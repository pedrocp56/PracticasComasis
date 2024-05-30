/* eslint-disable @typescript-eslint/no-empty-function*/

import * as React from "react";
import { useEffect, useState } from "react";
import { PrimaryButton, StackItem } from "@fluentui/react";
import { PersonajeLista } from "../PersonajeLista";
import { PersonajeItem } from "../PersonajeItem";
import PersonajeFormProps from "./UsoGeneral/PersonajeForm";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";

export interface IPersonajeNuevoBotonProps {
  lista: PersonajeLista;
  callback: (result: boolean) => Promise<void>;
}

export default function PersonajeNuevoBoton(
  Props: IPersonajeNuevoBotonProps
): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemEdit, setItemEdit] = useState<PersonajeItem>(null);

  useEffect(() => {
    // Este efecto se ejecutará cada vez que itemEdit cambie
    console.log("itemEdit actualizado:", itemEdit);
    if (itemEdit) {
      setIsModalOpen(true);
    }
  }, [itemEdit]);

  const cerrar = (): void => {
    setItemEdit(null);
    setIsModalOpen(false);
  };

  return (
    <StackItem>
      <PrimaryButton
        className={commonStyles.botonNuevo}
        text={"Nuevo Personaje"}
        title={"Nuevo Personaje"}
        iconProps={{ iconName: "Add" }}
        onClick={() => {
          const nuevoparaForm = Props.lista.getNewPersonaje();
          setItemEdit(nuevoparaForm);
        }}
      />
      {itemEdit && (
        <PersonajeFormProps
          item={itemEdit}
          callback={Props.callback}
          isVisible={isModalOpen}
          cerrar={cerrar}
        />
      )}
    </StackItem>
  );
}

/* eslint-enable */
