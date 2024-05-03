/* eslint-disable @typescript-eslint/no-explicit-any*/
import * as React from "react";
import { Modal } from "antd";
import { Spinner, Stack, TextField } from "@fluentui/react";
import { useEffect, useState } from "react";
import { isValidUrl } from "../../../Generales/Validaciones";
import { PersonajeItem } from "../../PersonajeItem";
//import {  PeoplePicker,  PrincipalType,} from "@pnp/spfx-controls-react/lib/PeoplePicker";

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
      if (isValidUrl(itemEdit?.Foto.Url)) {
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
    props.item.ItemEdit = itemEdit;
    await props.item.updateItem();
    setGuardando(false);
    await props.onSave(itemEdit);
  };

  useEffect((): void => {
    console.log(valido);
  }, [valido]);

  useEffect((): void => {
    const check = Validacion();
    setValido(check);
  }, [itemEdit]);

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
          {/* No funciona
          <PeoplePicker
            context={props.item.Lista.Context as any}
            //label="Usuario"
            titleText="prueba 1"
            personSelectionLimit={1}
            showtooltip={true}
            required={true}
            searchTextLimit={8}
            ensureUser
            /*
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
                    Email: I.secondaryText,
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
          */}

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
              itemEdit.Competencia !== null
                ? itemEdit.Competencia.toString()
                : ""
            }
          />
          <TextField
            label="Campaña"
            onChange={(e, newValue) =>
              setItemEdit({ ...itemEdit, Campaña: newValue } as PersonajeItem)
            }
            value={itemEdit.Campaña}
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