import { IconButton } from "@fluentui/react";
import * as React from "react";
import { useState } from "react";
import { CampañaItem } from "../CampañaItem";
import CampañaFormProps from "./UsoGeneral/CampañaForm";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";


export interface IPCampañaBotonEditarProps {
  item: CampañaItem;
  callback: () => Promise<void>;
}
export default function CampañaBotonEditar(
  props: IPCampañaBotonEditarProps
): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const cerrar = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <IconButton
        className={commonStyles.botonEditar}
        onClick={showModal}
        iconProps={{ iconName: "Edit" }}
        title="Editar"
      />
      {isModalOpen &&
        <CampañaFormProps
          item={props.item}
          callback={props.callback}
          isVisible={isModalOpen}
          cerrar={cerrar}
        />
      }
    </>
  );
}
/* eslint-enable */
