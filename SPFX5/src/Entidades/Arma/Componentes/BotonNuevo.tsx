/* eslint-disable @typescript-eslint/no-empty-function*/

import * as React from "react";
import { useEffect, useState } from "react";
import { PrimaryButton, StackItem } from "@fluentui/react";
import { ArmaLista } from "../ArmaLista";
import { ArmaItem } from "../ArmaItem";
import ArmaFormProps from "./UsoGeneral/ArmaForm";

export interface IArmaNuevoBotonProps {
  lista: ArmaLista;
  callback: (result: boolean) => Promise<void>;
}

export default function ArmaNuevoBoton(
  Props: IArmaNuevoBotonProps
): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemEdit, setItemEdit] = useState<ArmaItem>(null);

  useEffect(() => {
    // Este efecto se ejecutará cada vez que itemEdit cambie
    if (itemEdit) {
      console.log(itemEdit);
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
        text={"Nuevo Arma"}
        title={"Nuevo Arma"}
        iconProps={{ iconName: "Add" }}
        onClick={() => {
          const nuevoparaForm = Props.lista.getNewArma();
          setItemEdit(nuevoparaForm);
        }}
        style={{ backgroundColor: "#1b4586", color: "#FFFFFF" }}
      />
      {itemEdit && (
        <ArmaFormProps
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
