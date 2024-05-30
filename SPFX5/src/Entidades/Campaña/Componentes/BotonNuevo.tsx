/* eslint-disable @typescript-eslint/no-empty-function*/

//null en la fecha ??????
import * as React from "react";
import { useEffect, useState } from "react";
import { PrimaryButton, StackItem } from "@fluentui/react";
import { CampañaLista } from "../CampañaLista";
import { CampañaItem } from "../CampañaItem";
import CampañaFormProps from "./UsoGeneral/CampañaForm";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";

export interface ICampañaNuevoBotonProps {
  lista: CampañaLista;
  callback: (result: boolean) => Promise<void>;
}

export default function CampañaNuevoBoton(
  Props: ICampañaNuevoBotonProps
): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemEdit, setItemEdit] = useState<CampañaItem>(null);

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
        text={"Nuevo Campaña"}
        title={"Nuevo Campaña"}
        iconProps={{ iconName: "Add" }}
        onClick={() => {
          const nuevoparaForm = Props.lista.getNewCampaña();
          setItemEdit(nuevoparaForm);
        }}
      />
      {itemEdit && (
        <CampañaFormProps
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
