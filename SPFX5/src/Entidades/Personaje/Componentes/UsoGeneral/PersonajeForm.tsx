/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-floating-promises*/
import { Dropdown, IDropdownOption, Spinner, Stack, TextField } from "@fluentui/react";
import {
  PeoplePicker,
  PrincipalType,
} from "@pnp/spfx-controls-react/lib/PeoplePicker";
import { Modal } from "antd";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { ArmaLista } from "../../../ArmaMal/ArmaLista";
import { CampañaItem } from "../../../Campaña/CampañaItem";
import { CampañaLista } from "../../../Campaña/CampañaLista";
import { isValidUrl } from "../../../Generales/Validaciones";
import { ComasisUser, PersonajeItem } from "../../PersonajeItem";

interface IPersonajeFormProps {
  item: PersonajeItem;
  callback: (result: boolean) => Promise<void>;
  isVisible: boolean;
  onCancel: () => void;
  onSave: (item: PersonajeItem) => Promise<void>;
}

export default function PersonajeFormProps(
  props: IPersonajeFormProps
): JSX.Element {
  const [guardando, setGuardando] = useState(false);
  const [valido, setValido] = useState(false);
  const [itemEdit, setItemEdit] = useState(props.item);
  const [errorMessage, setErrorMessage] = useState("");
  const [campañas, setCampañas] = useState<CampañaItem[]>([]);
  const CampañaL = useRef<CampañaLista>(null);
  const ArmasL = useRef<ArmaLista>(null);
  const [opcionesArmas, setOpcionesArmas] =
    useState<IDropdownOption[]>([]);
    
  function Validacion(): boolean {
    console.log("Validando....");
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
      if (itemEdit?.Usuario === null || itemEdit?.Usuario === undefined) {
        setErrorMessage("Usuario no válido");
        setValido(false);
        return false;
      }
      if (
        itemEdit?.Fuerza === null ||
        itemEdit?.Fuerza === undefined ||
        itemEdit?.Fuerza < 1 ||
        itemEdit?.Fuerza > 30
      ) {
        setErrorMessage("Fuerza no válida (1-30)");
        setValido(false);
        return false;
      }
      if (
        itemEdit?.Destreza === null ||
        itemEdit?.Destreza === undefined ||
        itemEdit?.Destreza < 1 ||
        itemEdit?.Destreza > 30
      ) {
        setErrorMessage("Destreza no válida (1-30)");
        setValido(false);
        return false;
      }
      if (
        itemEdit?.Constitucion === null ||
        itemEdit?.Constitucion === undefined ||
        itemEdit?.Constitucion < 1 ||
        itemEdit?.Constitucion > 30
      ) {
        setErrorMessage("Constitucion no válida (1-30)");
        setValido(false);
        return false;
      }
      if (
        itemEdit?.Inteligencia === null ||
        itemEdit?.Inteligencia === undefined ||
        itemEdit?.Inteligencia < 1 ||
        itemEdit?.Inteligencia > 30
      ) {
        setErrorMessage("Inteligencia no válida (1-30)");
        setValido(false);
        return false;
      }
      if (
        itemEdit?.Sabiduria === null ||
        itemEdit?.Sabiduria === undefined ||
        itemEdit?.Sabiduria < 1 ||
        itemEdit?.Sabiduria > 30
      ) {
        setErrorMessage("Sabiduria no válida (1-30)");
        setValido(false);
        return false;
      }
      if (
        itemEdit?.Carisma === null ||
        itemEdit?.Carisma === undefined ||
        itemEdit?.Carisma < 1 ||
        itemEdit?.Carisma > 30
      ) {
        setErrorMessage("Carisma no válida (1-30)");
        setValido(false);
        return false;
      }
      if (
        itemEdit?.Competencia === null ||
        itemEdit?.Competencia === undefined ||
        itemEdit?.Competencia < 2 ||
        itemEdit?.Competencia > 6
      ) {
        setErrorMessage("Bono de competencia no válida (2-6)");
        setValido(false);
        return false;
      }
      if (isValidUrl(itemEdit?.Foto?.Url || null)) {
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

  const handleOk = async (): Promise<void> => {
    if (!Validacion()) {
      setErrorMessage("Resuelve todos los errores");
      return;
    }
    console.log(valido);
    setGuardando(true);
    //itemEdit.ListaArmas = null;
    props.item.ItemEdit = itemEdit;
    await props.item.updateItem();
    setGuardando(false);
    await props.onSave(itemEdit);
  };

  useEffect((): void => {
    //console.log(valido);
  }, [valido]);

  useEffect((): void => {
    const check = Validacion();
    setValido(check);
  }, [itemEdit]);

  const consultaInicial = async (): Promise<void> => {
    CampañaL.current = new CampañaLista(props.item.Lista.web, props.item.Lista.Context);
    const consultaCampañas = await CampañaL.current.CargarTodos();
    setCampañas(consultaCampañas);

    ArmasL.current = new ArmaLista(props.item.Lista.web, props.item.Lista.Context);
    const consultaArmas = await ArmasL.current.CargarTodos();

    setOpcionesArmas(
      Object.keys(consultaArmas)
        .sort((a: any, b: any) =>
          consultaArmas[a].Nombre >
            consultaArmas[b].Nombre
            ? 1
            : -1
        )
        .map((key: any) => {
          const item = consultaArmas[key];
          return {
            key: item.ID,
            text: item.Nombre,
            data: item,
          };
        }));


  }

  useEffect(() => {
    consultaInicial();

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
            onChange={(e, newvalue) => {
              setItemEdit({ ...itemEdit, Nombre: newvalue } as PersonajeItem);
            }}
            value={itemEdit.Nombre}
          />

          <PeoplePicker
            context={props.item.Lista.Context as any}
            //label="Usuario"
            titleText="Usuario"
            personSelectionLimit={1}
            showtooltip={true}
            required={true}
            ensureUser
            onChange={(Items) => {
              if (Items.length === 0) {
                setItemEdit({
                  ...itemEdit,
                  Usuario: null,
                } as PersonajeItem);
              } else {
                const UserIds: ComasisUser[] = Items.map((I) => {
                  return {
                    Data: null,
                    EMail: I.secondaryText,
                    LoginName: "",
                    Title: I.text,
                    ID: parseInt(I.id),
                  };
                });
                setItemEdit({
                  ...itemEdit,
                  Usuario: UserIds[0],
                } as PersonajeItem);
              }
            }}
            defaultSelectedUsers={[itemEdit?.Usuario?.EMail]}
            principalTypes={[PrincipalType.User]}
            resolveDelay={200}
          />

          <TextField
            label="Fuerza"
            onChange={(e, newValue) =>
              setItemEdit({
                ...itemEdit,
                Fuerza: newValue ? parseInt(newValue) : undefined,
              } as PersonajeItem)
            }
            value={itemEdit.Fuerza !== null ? itemEdit.Fuerza.toString() : ""}
          />

          <TextField
            label="Destreza"
            onChange={(e, newValue) =>
              setItemEdit({
                ...itemEdit,
                Destreza: newValue ? parseInt(newValue) : undefined,
              } as PersonajeItem)
            }
            value={
              itemEdit.Destreza !== null ? itemEdit.Destreza.toString() : ""
            }
          />
          <TextField
            label="Constitucion"
            onChange={(e, newValue) =>
              setItemEdit({
                ...itemEdit,
                Constitucion: newValue ? parseInt(newValue) : undefined,
              } as PersonajeItem)
            }
            value={
              itemEdit.Constitucion !== null
                ? itemEdit.Constitucion.toString()
                : ""
            }
          />
          <TextField
            label="Inteligencia"
            onChange={(e, newValue) =>
              setItemEdit({
                ...itemEdit,
                Inteligencia: newValue ? parseInt(newValue) : undefined,
              } as PersonajeItem)
            }
            value={
              itemEdit.Inteligencia !== null
                ? itemEdit.Inteligencia.toString()
                : ""
            }
          />
          <TextField
            label="Sabiduria"
            onChange={(e, newValue) =>
              setItemEdit({
                ...itemEdit,
                Sabiduria: newValue ? parseInt(newValue) : undefined,
              } as PersonajeItem)
            }
            value={
              itemEdit.Sabiduria !== null ? itemEdit.Sabiduria.toString() : ""
            }
          />
          <TextField
            label="Carisma"
            onChange={(e, newValue) =>
              setItemEdit({
                ...itemEdit,
                Carisma: newValue ? parseInt(newValue) : undefined,
              } as PersonajeItem)
            }
            value={itemEdit.Carisma !== null ? itemEdit.Carisma.toString() : ""}
          />
          <TextField
            label="Bono de competencia"
            onChange={(e, newValue) =>
              setItemEdit({
                ...itemEdit,
                Competencia: newValue ? parseInt(newValue) : undefined,
              } as PersonajeItem)
            }
            value={
              itemEdit && itemEdit.Competencia !== null
                ? itemEdit.Competencia.toString()
                : ""
            }
          />
          <Dropdown
            label="Campaña"
            placeholder="Seleccione una campaña"
            defaultSelectedKey={itemEdit?.Campaña?.ID || 1}
            options={campañas.map(C => {
              return {
                key: C.ID,
                text: C.Nombre,
                data: C
              }
            })}

            onChange={(e, newvalue) => {
              const Campaña = { ID: newvalue.key, Title: newvalue.text }
              setItemEdit({ ...itemEdit, Campaña: Campaña } as PersonajeItem);
            }}
          />
          <Dropdown
            label="Armas"
            placeholder="Seleccione las armas que usa"
            multiSelect
            options={opcionesArmas ? opcionesArmas : []}
            selectedKeys={itemEdit?.ListaArmas?.map((arma) => {
              return arma.ID
            })}
            onChange={(a, option) => {
              if (option.selected) {
                const arm = itemEdit?.ListaArmas
                  ? [...itemEdit.ListaArmas]
                  : [];
                arm.push(option.data);
                setItemEdit({
                  ...itemEdit,
                  ListaArmas: arm,
                } as PersonajeItem);
              } else {
                const arm = itemEdit?.ListaArmas.filter(
                  (arm) => arm.ID !== option.key
                );
                setItemEdit({
                  ...itemEdit,
                  ListaArmas: arm,
                } as PersonajeItem);
              }
            }}

          />

          <TextField
            label="Foto"
            onChange={(e, newValue) =>
              setItemEdit({
                ...itemEdit,
                Foto: { Description: newValue, Url: newValue },
              } as PersonajeItem)
            }
            value={itemEdit.Foto?.Url}
          />
        </Stack>
      </Modal>
    </>
  );
}
