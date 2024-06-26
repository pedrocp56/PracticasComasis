import * as React from "react";
import { IconButton } from "@fluentui/react";
import { useEffect, useState } from "react";
import { ArmaItem } from "../ArmaItem";
import ArmaFormProps from "./UsoGeneral/ArmaTodoForm";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";


export interface IArmasBotonEditarProps {
    item: ArmaItem;
    callback: () => Promise<void>
}
export default function ArmasBotonEditar(props: IArmasBotonEditarProps): JSX.Element {
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
    }
        , [props.item]);

    return (
        <>
            <IconButton
                className={commonStyles.botonEditar}
                onClick={showModal}
                iconProps={{ iconName: "Edit" }}
            />
            <ArmaFormProps
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