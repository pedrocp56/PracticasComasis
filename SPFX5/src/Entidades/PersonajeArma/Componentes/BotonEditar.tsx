import * as React from "react";
import { IconButton } from "@fluentui/react";
import { useState } from "react";
import { PersonajeArmaItem } from "../PersonajeArmaItem";
import PersonajeArmaFormProps from "./UsoGeneral/PersonajeArmaForm";

const buttonStyle = {
  backgroundColor: "#E4ADF3",
  color: "#161677",
};

export interface IPersonajeArmaBotonEditarProps {
  item: PersonajeArmaItem;
  callback: () => Promise<void>;
}
export default function PersonajeArmaBotonEditar(
  props: IPersonajeArmaBotonEditarProps
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
        <PersonajeArmaFormProps
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
