import { IconButton } from "@fluentui/react";
import * as React from "react";
import { useState } from "react";
import { CampañaItem } from "../CampañaItem";
import CampañaFormProps from "./UsoGeneral/CampañaForm";

const buttonStyle = {
  backgroundColor: "#E4ADF3",
  color: "#161677",
};

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
        onClick={showModal}
        iconProps={{ iconName: "Edit" }}
        style={buttonStyle}
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
