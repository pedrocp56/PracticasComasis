/* eslint-disable @typescript-eslint/no-empty-function*/

import * as React from "react";
import { useEffect, useState } from "react";
import { PrimaryButton, StackItem } from "@fluentui/react";
import { PersonajeLista } from "../PersonajeLista";
import { PersonajeItem } from "../PersonajeItem";
import PersonajeFormProps from "./UsoGeneral/PersonajeForm";

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
        text={"Nuevo Personaje"}
        title={"Nuevo Personaje"}
        iconProps={{ iconName: "Add" }}
        onClick={() => {
          const nuevoparaForm = Props.lista.getNewPersonaje();
          console.log(nuevoparaForm);
          setItemEdit(nuevoparaForm);
          console.log("aaaaaaaaaaaaaaaaaaaaaa");

          console.log(itemEdit);
        }}
        style={{ backgroundColor: "#1b4586", color: "#FFFFFF" }}
      />
      {itemEdit && (
        <PersonajeFormProps
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
