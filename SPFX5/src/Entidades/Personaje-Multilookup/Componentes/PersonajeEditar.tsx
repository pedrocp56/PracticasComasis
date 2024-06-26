import * as React from "react";
import { IconButton } from "@fluentui/react";
import { useEffect, useState } from "react";
import { PersonajeItem } from "../PersonajeItem";
import PersonajeFormProps from "./UsoGeneral/PersonajeForm";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";

export interface IPersonajeBotonEditarProps {
  item: PersonajeItem;
  callback: () => Promise<void>;
}
export default function PersonajeBotonEditar(
  props: IPersonajeBotonEditarProps
): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemEdit, setItemEdit] = useState(props.item);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleOk = async (): Promise<void> => {
    props.item.ItemEdit = itemEdit;
    await props.item.updateItem();
    await props.callback();
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  useEffect((): void => {
    setItemEdit(props.item);
  }, [props.item]);

  return (
    <>
      <IconButton
        className={commonStyles.botonEditar}
        onClick={showModal}
        iconProps={{ iconName: "Edit" }}
        title="Editar"
      />
      <PersonajeFormProps
        item={props.item}
        callback={props.callback}
        isVisible={isModalOpen}
        onCancel={handleCancel}
        onSave={handleOk}
      />
    </>
  );
}
/* eslint-enable */
