import * as React from "react";
import { IconButton } from "@fluentui/react";
import { useEffect, useState } from "react";
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
        onClick={showModal}
        iconProps={{ iconName: "Edit" }}
        style={buttonStyle}
        title="Editar"
      />
      <CampañaFormProps
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
