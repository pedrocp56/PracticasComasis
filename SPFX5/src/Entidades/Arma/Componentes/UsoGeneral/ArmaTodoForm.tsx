import * as React from "react";
import { Modal } from "antd";
import { Dropdown, IDropdownOption, IStackStyles, IStackTokens, Spinner, Stack, TextField, Toggle } from "@fluentui/react";
import { useEffect, useState } from "react";
import { isValidUrl } from "./Validaciones";
import { ArmaItem } from "../../ArmaItem";

interface IArmaFormProps {
    item: ArmaItem;
    callback: () => Promise<void>
    isVisible: boolean;
    onCancel: () => void;
    onSave: (item: ArmaItem) => Promise<void>;
}
const stackStyles: IStackStyles = {
    root: {
        background: "White",
    },
};
const horizontalGapStackTokens: IStackTokens = {
    childrenGap: 10,
    padding: 10,
};

export default function ArmaFormProps(props: IArmaFormProps): JSX.Element {
    const [guardando, setGuardando] = useState(false);
    const [itemEdit, setItemEdit] = useState(props.item);
    const [errorMessage, setErrorMessage] = useState("");


    const [opcionesTipo, setOpcionesTipo] =
        useState<IDropdownOption[]>([]);
    const [opcionesCar, setOpcionesCar] =
        useState<IDropdownOption[]>([]);


    const handleFotoChange = (newValue: string): void => {
        if (newValue === "" || newValue === null || isValidUrl(newValue)) {
            setErrorMessage("");
        } else {
            setErrorMessage("La URL de la imagen no es válida");
        }
        setItemEdit({ ...itemEdit, Foto: { Description: newValue, Url: newValue } } as ArmaItem);
    };


    const handleOk = async (): Promise<void> => {
        setGuardando(true);
        props.item.ItemEdit = itemEdit;
        await props.item.updateItem();
        await props.callback();
        setGuardando(false);
        props.onCancel();
    };

    useEffect((): void => {
        setItemEdit(props.item);
    }
        , [props.item]);

    useEffect((): void => {
        setOpcionesTipo([
            { key: "Contundente", text: "Contundente" },
            { key: "Cortante", text: "Cortante" },
            { key: "Frío", text: "Frío" },
            { key: "Fuego", text: "Fuego" },
            { key: "Fuerza", text: "Fuerza" },
            { key: "Necrótico", text: "Necrótico" },
            { key: "Perforante", text: "Perforante" },
            { key: "Psíquico", text: "Psíquico" },
            { key: "Radiante", text: "Radiante" },
            { key: "Relámpago", text: "Relámpago" },
            { key: "Trueno", text: "Trueno" },
            { key: "Veneno", text: "Veneno" },
        ]);

    }, [])

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
                <Modal title="Características" open={props.isVisible}
                    onOk={handleOk} onCancel={props.onCancel}>
                    <Stack hidden={!guardando}>
                        <Spinner label="Guardando..." />
                    </Stack>
                    <Stack hidden={guardando}>
                        <p>{errorMessage}</p>
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
                        <Dropdown
                            label="Tipo"
                            selectedKeys={itemEdit.Tipo}
                            options={opcionesTipo}
                            onChange={(e, item) => {
                                const selectedItems = item.selected ? [...(itemEdit.Tipo || []), item.text] : itemEdit.Tipo.filter(option => option !== item.text);
                                setItemEdit({ ...itemEdit, Tipo: selectedItems } as ArmaItem);
                            }}
                            multiSelect
                        />
                        <Toggle label="Arrojadiza" checked={itemEdit.Arrojadiza} onChange={(ev, checked) => { setItemEdit({ ...itemEdit, Arrojadiza: checked } as ArmaItem); }} />
                        <Dropdown label="Car" selectedKey={itemEdit.Car} options={opcionesCar} onChange={(e, item) => { setItemEdit({ ...itemEdit, Car: item.text } as ArmaItem) }} />
                        <TextField label="Caracteristicas" value={itemEdit.Caracteristicas} onChange={(e, newValue) => { setItemEdit({ ...itemEdit, Caracteristicas: newValue } as ArmaItem) }}
                            multiline rows={4} />
                        <TextField
                            label="Foto"
                            value={itemEdit.Foto?.Url || ""}
                            onChange={(e, newValue) => handleFotoChange(newValue || "")}
                        />
                    </Stack>
                </Modal>
            </Stack >
        </>
    );
}