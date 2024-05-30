import { IconButton } from "@fluentui/react";
import * as React from "react";
import { useState } from "react";
import { PersonajeItem } from "../../Personaje/PersonajeItem";
import { PersonajeArmaItem } from "../PersonajeArmaItem";
import PersonajeArmaFormProps from "./UsoGeneral/PersonajeArmaForm";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";

export interface IPersonajeArmaBotonEditarProps {
  item: PersonajeArmaItem;
  callback: () => Promise<void>;
  personaje?: PersonajeItem;
}
export default function PersonajeArmaBotonEditar(
  Props: IPersonajeArmaBotonEditarProps
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
        <PersonajeArmaFormProps
          item={Props.item}
          callback={Props.callback}
          isVisible={isModalOpen}
          cerrar={cerrar}
          personaje={Props.personaje}
        />
      }
    </>
  );
}
/* eslint-enable */
