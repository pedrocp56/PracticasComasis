/* eslint-disable @typescript-eslint/no-empty-function*/

import * as React from "react";
import { useEffect, useState } from "react";
import { PrimaryButton, StackItem } from "@fluentui/react";
import { PersonajeArmaItem } from "../PersonajeArmaItem";
import { PersonajeArmaLista } from "../PersonajeArmaLista";
import PersonajeArmaFormProps from "./UsoGeneral/PersonajeArmaForm";

export interface IPersonajeArmaNuevoBotonProps {
  lista: PersonajeArmaLista;
  callback: (result: boolean) => Promise<void>;
}

export default function PersonajeArmaNuevoBoton(
  Props: IPersonajeArmaNuevoBotonProps
): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemEdit, setItemEdit] = useState<PersonajeArmaItem>(null);

  useEffect(() => {
    // Este efecto se ejecutará cada vez que itemEdit cambie
    console.log("itemEdit actualizado:", itemEdit);
    if (itemEdit) {
      console.log(itemEdit);
      setIsModalOpen(true);
    }
  }, [itemEdit]);

  const handleOk = async (): Promise<void> => {
    await Props.callback(true);
    setIsModalOpen(false);
  };
  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  return (
    <StackItem>
      <PrimaryButton
        text={"Nueva arma para el personaje"}
        title={"Nuevo arma"}
        iconProps={{ iconName: "Add" }}
        onClick={() => {
          const nuevoparaForm = Props.lista.getNewPersonajeArma();
          setItemEdit(nuevoparaForm);
        }}
        style={{ backgroundColor: "#1b4586", color: "#FFFFFF" }}
      />
      {itemEdit && (
        <PersonajeArmaFormProps
          item={itemEdit}
          callback={Props.callback}
          isVisible={isModalOpen}
          onCancel={handleCancel}
          onSave={handleOk}
        />
      )}
    </StackItem>
  );
}

/* eslint-enable */
