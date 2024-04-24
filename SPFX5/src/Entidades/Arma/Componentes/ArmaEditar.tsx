
import * as React from "react";
import { Modal } from "antd";
import { Dropdown, IDropdownOption, IStackStyles, IStackTokens, IconButton, Spinner, Stack, TextField } from "@fluentui/react";
import { useEffect, useState } from "react";
import { ArmaItem } from "../ArmaItem";

const stackStyles: IStackStyles = {
    root: {
        background: "White",
    },
};
const horizontalGapStackTokens: IStackTokens = {
    childrenGap: 10,
    padding: 10,
};

export interface IArmasBotonEditarProps {
    item: ArmaItem;
    callback: () => Promise<void>
}
export default function ArmasBotonEditar(props: IArmasBotonEditarProps): JSX.Element {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [guardando, setGuardando] = useState(false);
    const [itemEdit, setItemEdit] = useState(props.item);
    const [opcionesCar, setOpcionesCar] =
        useState<IDropdownOption[]>([]);
    const showModal = (): void => {
        setIsModalOpen(true);
    };

    const handleOk = async (): Promise<void> => {
        setGuardando(true);
        props.item.ItemEdit = itemEdit;
        await props.item.updateItem();
        await props.callback();
        setGuardando(false);
        setIsModalOpen(false);
    };

    const handleCancel = (): void => {
        setIsModalOpen(false);
    };

    useEffect((): void => {
        setItemEdit(props.item);
    }
        , [props.item]);

    useEffect((): void => {
        setOpcionesCar([
            { key: "Fuerza", text: "Fuerza" },
            { key: "Destreza", text: "Destreza" },
            { key: "Constitución", text: "Constitución" },
            { key: "Inteligencia", text: "Inteligencia" },
            { key: "Sabiduria", text: "Sabiduria" },
            { key: "Carisma", text: "Carisma" },
        ]);

    }, [])



    return (
        <>
            <Stack enableScopedSelectors horizontal disableShrink styles={stackStyles} tokens={horizontalGapStackTokens}>
                <IconButton
                    onClick={showModal}
                    iconProps={{ iconName: "Edit" }}
                />
                <Modal title="Características" open={isModalOpen}
                    onOk={handleOk} onCancel={handleCancel}>
                    <Stack hidden={!guardando}>
                        <Spinner label="Guardando..." />
                    </Stack>
                    <Stack hidden={guardando}>
                        <TextField label="Nombre" value={itemEdit.Nombre} onChange={(e, newValue) => { setItemEdit({ ...itemEdit, Nombre: newValue } as ArmaItem) }} />
                        <TextField
                            label="Ataque"
                            value={itemEdit.Ataque.toString()} // Convertir el número a string
                            onChange={(e, newValue) => {
                                const parsedValue = parseInt(newValue);
                                if (!isNaN(parsedValue)) {
                                    setItemEdit({ ...itemEdit, Ataque: parsedValue } as ArmaItem);
                                } else {
                                    console.error("El valor ingresado no es un número válido");
                                }
                            }} />
                        <TextField label="Daño" value={itemEdit.Daño} onChange={(e, newValue) => { setItemEdit({ ...itemEdit, Daño: newValue } as ArmaItem) }} />

                        <Dropdown label="Car" selectedKey={itemEdit.Car} options={opcionesCar} onChange={(e, item) => { setItemEdit({ ...itemEdit, Car: item.text } as ArmaItem) }} />


                    </Stack>
                </Modal>
            </Stack >
        </>
    );
}
/* eslint-enable */