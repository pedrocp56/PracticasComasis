/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-floating-promises*/
import { Dropdown, Spinner, Stack, TextField, Toggle } from "@fluentui/react";
import { Modal } from "antd";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { ArmaItem } from "../../../ArmaMal/ArmaItem";
import { ArmaLista } from "../../../ArmaMal/ArmaLista";
import { PersonajeArmaItem } from "../../PersonajeArmaItem";
import { PersonajeItem } from "../../../Personaje/PersonajeItem";
import { PersonajeLista } from "../../../Personaje/PersonajeLista";

interface IPersonajeArmaFormProps {
  item: PersonajeArmaItem;
  callback: (result: boolean) => Promise<void>;
  isVisible: boolean;
  cerrar: () => void;
}

export default function PersonajeArmaFormProps(
  props: IPersonajeArmaFormProps
): JSX.Element {
  const [guardando, setGuardando] = useState(false);
  const [valido, setValido] = useState(false);
  const [itemEdit, setItemEdit] = useState(props.item);
  const [errorMessage, setErrorMessage] = useState("");
  const [armas, setArmas] = useState<ArmaItem[]>([]);
  const ArmaL = useRef<ArmaLista>(null);
  const [personajes, setPersonajes] = useState<PersonajeItem[]>([]);
  const PersonajeL = useRef<PersonajeLista>(null);

  function Validacion(): boolean {
    console.log("Validando....");
    try {
      setErrorMessage("");
      //Competencia no hace falta es un boolean
      if (
        itemEdit?.Personaje === null ||
        itemEdit?.Personaje === undefined 
      ) {
        setErrorMessage("Personaje no válido");
        setValido(false);
        return false;
      }
      if (
        itemEdit?.Arma === null ||
        itemEdit?.Arma === undefined 
      ) {
        setErrorMessage("Arma no válido");
        setValido(false);
        return false;
      }
      if (
        itemEdit?.Bonificacion === null ||
        itemEdit?.Bonificacion === undefined ||
        itemEdit?.Bonificacion < 0 ||
        itemEdit?.Bonificacion > 10
      ) {
        setErrorMessage("Bonificaccion no válida (0-10)");
        setValido(false);
        return false;
      }
      setValido(true);
      return true;
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
    await props.callback(true);
    await props.cerrar();
  };

  useEffect((): void => {
    //console.log(valido);
  }, [valido]);

  useEffect((): void => {
    const check = Validacion();
    setValido(check);
  }, [itemEdit]);

  const consultaInicial = async (): Promise<void> => {
    ArmaL.current = new ArmaLista(props.item.Lista.web, props.item.Lista.Context);
    const consultaArmas = await ArmaL.current.CargarTodos();
    setArmas(consultaArmas);

    PersonajeL.current = new PersonajeLista(props.item.Lista.web, props.item.Lista.Context);
    const consultaPersonajes = await PersonajeL.current.CargarTodos();
    setPersonajes(consultaPersonajes);

  }

  useEffect(() => {
    consultaInicial();

  }, []);


  return (
    <>
      <Modal
        title="Arma del personaje"
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

          <Dropdown
            label="Personaje"
            placeholder="Seleccione un Personaje"
            defaultSelectedKey={itemEdit?.Personaje?.ID || null}
            options={personajes.map(P => {
              return {
                key: P.ID,
                text: P.Nombre,
                data: P
              }
            })}
            onChange={(e, newvalue) => {
              const NuevoPersonaje = { ID: newvalue.key, Title: newvalue.text }
              setItemEdit({ ...itemEdit, Personaje: NuevoPersonaje } as PersonajeArmaItem);
            }}
          />
          <Dropdown
            label="Arma"
            placeholder="Seleccione una Arma"
            defaultSelectedKey={itemEdit?.Arma?.ID || null}
            options={armas.map(A => {
              return {
                key: A.ID,
                text: A.Nombre,
                data: A
              }
            })}
            onChange={(e, newvalue) => {
              const NuevaArma = { ID: newvalue.key, Title: newvalue.text }
              setItemEdit({ ...itemEdit, Arma: NuevaArma } as PersonajeArmaItem);
            }}
          />
          <Toggle
            label="Competencia"
            checked={itemEdit.Competencia}
            onChange={(e, checked) => {
              setItemEdit({ ...itemEdit, Competencia: checked } as PersonajeArmaItem);
            }}
          />
          <TextField
            label="Bonificacion"
            onChange={(e, newValue) =>
              setItemEdit({
                ...itemEdit,
                Bonificacion: newValue ? parseInt(newValue) : undefined,
              } as PersonajeArmaItem)
            }
            value={itemEdit.Bonificacion !== null&&itemEdit.Bonificacion !== undefined ? itemEdit.Bonificacion.toString() : ""}
          />
        </Stack>
      </Modal>
    </>
  );
}
