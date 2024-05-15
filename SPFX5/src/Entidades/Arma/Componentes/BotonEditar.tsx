
import * as React from "react";
import { IconButton } from "@fluentui/react";
import { useState } from "react";
import { ArmaItem } from "../ArmaItem";
import ArmaFormProps from "./UsoGeneral/ArmaForm";

const buttonStyle = {
  backgroundColor: "#E4ADF3",
  color: "#161677",
};

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
        onClick={showModal}
        iconProps={{ iconName: "Edit" }}
        style={buttonStyle}
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
