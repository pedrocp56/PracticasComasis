/* eslint-disable @typescript-eslint/no-explicit-any*/
import * as React from "react";
import { Modal } from "antd";
import {
  Dropdown,
  IDropdownOption,
  Spinner,
  Stack,
  TextField,
  Toggle,
} from "@fluentui/react";
import { useEffect, useState } from "react";
import { isValidUrl } from "./Validaciones";
import { ArmaItem } from "../../ArmaItem";

interface IArmaFormProps {
  item: ArmaItem;
  callback: (result: boolean) => Promise<void>;
  isVisible: boolean;
  onCancel: () => void;
  onSave: (item: ArmaItem) => Promise<void>;
}

export default function ArmaFormProps(props: IArmaFormProps): JSX.Element {
  const [guardando, setGuardando] = useState(false);
  const [valido, setValido] = useState(true);
  const [itemEdit, setItemEdit] = useState(props.item);
  const [errorMessage, setErrorMessage] = useState("");

  function Validacion(): boolean {
    try {
      setErrorMessage("");
      if (
        itemEdit?.Nombre === null ||
        itemEdit?.Nombre === undefined ||
        itemEdit?.Nombre === ""
      ) {
        setErrorMessage("Nombre no válido");
        setValido(false);
        return false;
      }
      if (
        itemEdit?.Daño === null ||
        itemEdit?.Daño === undefined ||
        itemEdit?.Daño === ""
      ) {
        setErrorMessage("Daño no válido");
        setValido(false);
        return false;
      }

      if (itemEdit?.Tipo?.length === 0) {
        setErrorMessage("Selecciona un tipo");
        setValido(false);
        return false;
      }
      if (
        itemEdit?.Foto === null ||
        itemEdit?.Foto === undefined ||
        itemEdit?.Foto === "" ||
        isValidUrl(itemEdit?.Foto.Url)
      ) {
        setValido(true);
        return true;
      }
      setErrorMessage("La URL de la imagen no es válida");
      setValido(false);
      return false;
    } catch (error) {
      console.log(error);
      setValido(false);
      return false;
    }
  }

  const [opcionesTipo, setOpcionesTipo] = useState<IDropdownOption[]>([]);
  const [opcionesCar, setOpcionesCar] = useState<IDropdownOption[]>([]);

  const handleNombreChange = (newValue: string): void => {
    Validacion();
    if (newValue === "" || newValue === null) {
      setErrorMessage("Nombre no válido");
    } else {
      setErrorMessage("");
      Validacion();
    }
    setItemEdit({ ...itemEdit, Nombre: newValue } as ArmaItem);
  };

  const handleAtaqueChange = (newValue: string): void => {
    const parsedValue = parseInt(newValue);
    Validacion();
    if (!isNaN(parsedValue) && parsedValue >= 0) {
      setItemEdit({ ...itemEdit, Ataque: parsedValue } as ArmaItem);
    } else {
      if (newValue === "") {
        newValue = "0";
        setItemEdit({ ...itemEdit, Ataque: parseInt(newValue) } as ArmaItem);
      }
    }
  };

  const handleDañoChange = (newValue: string): void => {
    Validacion();
    if (newValue === "" || newValue === null) {
      setErrorMessage("Daño no válido");
    } else {
      setErrorMessage("");
      Validacion();
    }
    setItemEdit({ ...itemEdit, Daño: newValue } as ArmaItem);
  };

  const handleTipoChange = (item: IDropdownOption<any>): void => {
    Validacion();
    const selectedItems = item.selected
      ? [...(itemEdit.Tipo || []), item.text]
      : itemEdit.Tipo.filter((option) => option !== item.text);
    setItemEdit({ ...itemEdit, Tipo: selectedItems } as ArmaItem);
    if (itemEdit.Tipo?.length === 1 && !item.selected) {
      setErrorMessage("Selecciona un tipo");
    } else {
      setErrorMessage("");
      Validacion();
    }
  };

  const handleFotoChange = (newValue: string): void => {
    Validacion();
    if (newValue === "" || newValue === null || isValidUrl(newValue)) {
      setErrorMessage("");
      Validacion();
    } else {
      setErrorMessage("La URL de la imagen no es válida");
    }
    setItemEdit({
      ...itemEdit,
      Foto: { Description: newValue, Url: newValue },
    } as ArmaItem);
  };

  const handleOk = async (): Promise<void> => {

    if (!Validacion()) {
      setErrorMessage("Resuelve todos los errores");
      return;
    }
    console.log(valido);
    setGuardando(true);
    props.item.ItemEdit = itemEdit;
    await props.item.updateItem();
    setGuardando(false);
    props.onSave(itemEdit);
  };
/*
  useEffect((): void => {
    console.log(valido)
  }, [valido]);
*/
  useEffect((): void => {
    const check = Validacion();
    setValido(check);
    setItemEdit(props.item);
  }, [props.item]);

  useEffect((): void => {
    setOpcionesTipo([
      { key: "Contundente", text: "Contundente" },
      { key: "Cortante", text: "Cortante" },
      { key: "Frío", text: "Frío" },
      { key: "Fuego", text: "Fuego" },
      { key: "Fuerza", text: "Fuerza" },
      { key: "Necrótico", text: "Necrótico" },
      { key: "Perforante", text: "Perforante" },
      { key: "Psíquico", text: "Psíquico" },
      { key: "Radiante", text: "Radiante" },
      { key: "Relámpago", text: "Relámpago" },
      { key: "Trueno", text: "Trueno" },
      { key: "Veneno", text: "Veneno" },
    ]);
    setOpcionesCar([
      { key: "Fuerza", text: "Fuerza" },
      { key: "Destreza", text: "Destreza" },
      { key: "Constitución", text: "Constitución" },
      { key: "Inteligencia", text: "Inteligencia" },
      { key: "Sabiduria", text: "Sabiduria" },
      { key: "Carisma", text: "Carisma" },
    ]);
  }, []);



  return (
    <>
      
        <Modal
          title="Características"
          open={props.isVisible}
          okButtonProps={{ disabled: !valido }}
          onOk={handleOk}
          onCancel={props.onCancel}
        >
          <Stack hidden={!guardando}>
            <Spinner label="Guardando..." />
          </Stack>
          <Stack hidden={guardando}>
            <p>{errorMessage}</p>
            <TextField
              label="Nombre"
              value={itemEdit.Nombre}
              onChange={(e, newValue) => handleNombreChange(newValue || "")}
            />
            <TextField
              label="Ataque"
              value={itemEdit.Ataque?.toString()}
              onChange={(e, newValue) => handleAtaqueChange(newValue || "")}
            />
            <TextField
              label="Daño"
              value={itemEdit.Daño}
              onChange={(e, newValue) => handleDañoChange(newValue || "")}
            />
            <Dropdown
              label="Tipo"
              selectedKeys={itemEdit.Tipo}
              options={opcionesTipo}
              onChange={(e, selectedItems) => handleTipoChange(selectedItems)}
              multiSelect
            />
            <Toggle
              label="Arrojadiza"
              checked={itemEdit.Arrojadiza}
              onChange={(e, checked) => {
                setItemEdit({ ...itemEdit, Arrojadiza: checked } as ArmaItem);
              }}
            />
            <Dropdown
              label="Car"
              selectedKey={itemEdit.Car}
              options={opcionesCar}
              onChange={(e, item) => {
                setItemEdit({ ...itemEdit, Car: item.text } as ArmaItem);
              }}
            />
            <TextField
              label="Caracteristicas"
              value={itemEdit.Caracteristicas}
              onChange={(e, newValue) => {
                setItemEdit({
                  ...itemEdit,
                  Caracteristicas: newValue,
                } as ArmaItem);
              }}
              multiline
              rows={4}
            />
            <TextField
              label="Foto"
              value={itemEdit.Foto?.Url || ""}
              onChange={(e, newValue) => handleFotoChange(newValue || "")}
            />
          </Stack>
        </Modal>
    </>
  );
}
