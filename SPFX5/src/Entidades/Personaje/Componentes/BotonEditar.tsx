import * as React from "react";
import { IconButton } from "@fluentui/react";
import { useState } from "react";
import { PersonajeItem } from "../PersonajeItem";
import PersonajeFormProps from "./UsoGeneral/PersonajeForm";

const buttonStyle = {
  backgroundColor: "#E4ADF3",
  color: "#161677",
};

export interface IPersonajeBotonEditarProps {
  item: PersonajeItem;
  callback: () => Promise<void>;
}
export default function PersonajeBotonEditar(
  props: IPersonajeBotonEditarProps
): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [itemEdit, setItemEdit] = useState(props.item);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const cerrar = (): void => {
    setIsModalOpen(false);
  };
  /*
    useEffect((): void => {
      setItemEdit(props.item);
    }, [props.item]);
  */
  return (
    <>
      <IconButton
        onClick={showModal}
        iconProps={{ iconName: "Edit" }}
        style={buttonStyle}
        title="Editar"
      />
      {isModalOpen &&
        <PersonajeFormProps
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
