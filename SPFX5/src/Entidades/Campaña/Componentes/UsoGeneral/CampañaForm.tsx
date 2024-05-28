/* eslint-disable @typescript-eslint/no-explicit-any*/
import { Spinner, Stack, TextField } from "@fluentui/react";
import { Modal } from "antd";
import * as React from "react";
import { useEffect, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';


import { DateConvention, DateTimePicker, TimeConvention } from "@pnp/spfx-controls-react";
import { isValidUrl } from "../../../Generales/Validaciones";
import { CampañaItem } from "../../CampañaItem";

interface ICampañaFormProps {
  item: CampañaItem;
  callback: (result: boolean) => Promise<void>;
  isVisible: boolean;
  cerrar: () => void;
}

export default function CampañaFormProps(
  props: ICampañaFormProps
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
      //Se podria comprobar que no se pueda poner el mismo nombre a 2 campañas
      if (
        itemEdit &&
        itemEdit.Fecha &&
        itemEdit.Fecha < new Date(Date.now())
      ) {      
        setErrorMessage("Fecha no válida");
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
    setGuardando(true);
    props.item.ItemEdit = itemEdit;
    await props.item.updateItem();
    await props.callback(true);
    setGuardando(false);
    await props.cerrar();
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
        title="Campaña"
        open={props.isVisible}
        okButtonProps={{ disabled: !valido }}
        onOk={handleOk}
        onCancel={props.cerrar}
      >
        <Stack hidden={!guardando}>
          <Spinner label="Guardando..." />
        </Stack>
        <Stack hidden={guardando}>
          <p>{errorMessage}</p>
          <TextField
            label="Nombre"
            onChange={(e, newvalue) => {
              setItemEdit({ ...itemEdit, Nombre: newvalue } as CampañaItem);
            }}
            value={itemEdit.Nombre}
          />
          <TextField
            label="Descripcion"
            onChange={(e, newvalue) => {
              setItemEdit({ ...itemEdit, Descripcion: newvalue } as CampañaItem);
            }}
            value={itemEdit.Descripcion}
          />
          <DateTimePicker
            showLabels={false}
            label="Fecha"
            firstDayOfWeek={1}
            dateConvention={DateConvention.DateTime}
            timeConvention={TimeConvention.Hours24}
            value={itemEdit?.Fecha || null}
            formatDate={(Date) => {
              if (Date === null) return null;
              return Date.toLocaleDateString();
            }}
            onChange={(Date) => {
              setItemEdit({
                ...itemEdit,
                Fecha: Date,
              } as CampañaItem);
            }}
            allowTextInput={true}
            showClearDate={true}
            minDate={new Date()}

          />
          <TextField
            label="Foto"
            onChange={(e, newValue) =>
              setItemEdit({
                ...itemEdit,
                Foto: { Description: newValue, Url: newValue },
              } as CampañaItem)
            }
            value={itemEdit.Foto?.Url}
          />
        </Stack>
      </Modal>
    </>
  );
}
