
import * as React from "react";
import { IconButton } from "@fluentui/react";
import { useState } from "react";
import { ArmaItem } from "../ArmaItem";
import ArmaFormProps from "./UsoGeneral/ArmaForm";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";

export interface IArmaBotonEditarProps {
  item: ArmaItem;
  callback: (result: boolean) => Promise<void>;
}
export default function ArmaBotonEditar(
  props: IArmaBotonEditarProps
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
        <ArmaFormProps
          item={props.item}
          callback={props.callback}
          isVisible={isModalOpen}
          cerrar={cerrar}
        />}
    </>
  );
}
/* eslint-enable */
