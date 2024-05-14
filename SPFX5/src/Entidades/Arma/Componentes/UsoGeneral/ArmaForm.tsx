/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-floating-promises*/
import { Dropdown, IDropdownOption, Spinner, Stack, TextField, Toggle } from "@fluentui/react";
import { Modal } from "antd";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { ArmaFotoItem } from "../../../ArmaFotos/ArmaFotoItem";
import { ArmaFotoLista } from "../../../ArmaFotos/ArmaFotoLista";
import { ArmaItem } from "../../ArmaItem";

interface IArmaFormProps {
    item: ArmaItem;
    callback: (result: boolean) => Promise<void>;
    isVisible: boolean;
    cerrar: () => void;
}

export default function ArmaFormProps(
    props: IArmaFormProps
): JSX.Element {
    const [guardando, setGuardando] = useState(false);
    const [valido, setValido] = useState(false);
    const [itemEdit, setItemEdit] = useState(props.item);
    const [errorMessage, setErrorMessage] = useState("");
    const [opcionesTipo, setOpcionesTipo] = useState<IDropdownOption[]>([]);
    const [opcionesCar, setOpcionesCar] = useState<IDropdownOption[]>([]);

    function Validacion(): boolean {
        try {
            setErrorMessage("");
            if (
                itemEdit?.Nombre === null ||
                itemEdit?.Nombre === undefined ||
                itemEdit?.Nombre === ""
            ) {
                setErrorMessage("Nombre no válido");
                setValido(false);
                return false;
            }
            if (
                itemEdit?.Ataque === null ||
                itemEdit?.Ataque === undefined
            ) {
                setErrorMessage("Ataque no válido");
                setValido(false);
                return false;
            }
            if (
                itemEdit?.Danho === null ||
                itemEdit?.Danho === undefined ||
                itemEdit?.Danho === ""
            ) {
                setErrorMessage("Daño no válido");
                setValido(false);
                return false;
            }

            if (itemEdit?.Tipo === null ||
                itemEdit?.Tipo === undefined ||
                itemEdit?.Tipo?.length === 0) {
                setErrorMessage("Selecciona un tipo");
                setValido(false);
                return false;
            }
            setValido(true);
            return true;
        } catch (error) {
            console.log(error);
            setValido(false);
            return false;
        }
    }

    const handleOk = async (): Promise<void> => {
        if (!Validacion()) {
            setErrorMessage("Resuelve todos los errores");
            return;
        }
        console.log(valido);
        setGuardando(true);
        props.item.ItemEdit = itemEdit;
        await props.item.updateItem();
        setGuardando(false);
        await props.callback(true);
        await props.cerrar();
    };

    useEffect((): void => {
        //console.log(valido);
    }, [valido]);

    useEffect((): void => {
        const check = Validacion();
        setValido(check);
    }, [itemEdit]);


    const [fotos, setFotos] = useState<ArmaFotoItem[]>([]);
    const FotosL = useRef<ArmaFotoLista>(null);

    const consultaInicial = async (): Promise<void> => {
        FotosL.current = new ArmaFotoLista(props.item.Lista.web, props.item.Lista.Context);
        const consultaFotos = await FotosL.current.CargarTodos();
        console.log(consultaFotos);
        await setFotos(consultaFotos);
    }

    useEffect(() => {
        consultaInicial();
        console.log(fotos);
    }, []);


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
        setOpcionesCar([
            { key: "Fuerza", text: "Fuerza" },
            { key: "Destreza", text: "Destreza" },
            { key: "Constitución", text: "Constitución" },
            { key: "Inteligencia", text: "Inteligencia" },
            { key: "Sabiduria", text: "Sabiduria" },
            { key: "Carisma", text: "Carisma" },
        ]);
    }, []);

    const handleTipoChange = (item: IDropdownOption<any>): void => {
        const selectedItems = item.selected
            ? [...(itemEdit.Tipo || []), item.text]
            : itemEdit.Tipo.filter((option) => option !== item.text);
        setItemEdit({ ...itemEdit, Tipo: selectedItems } as ArmaItem);
    };

    return (
        <>

            <Modal
                title="Características"
                open={props.isVisible}
                okButtonProps={{ disabled: !valido }}
                onOk={handleOk}
                onCancel={props.cerrar}
            >
                <Stack hidden={!guardando}>
                    <Spinner label="Guardando..." />
                </Stack>
                <Stack hidden={guardando}>
                    <p>{errorMessage}</p>
                    <TextField
                        label="Nombre"
                        onChange={(e, newvalue) => {
                            setItemEdit({ ...itemEdit, Nombre: newvalue } as ArmaItem);
                        }}
                        value={itemEdit.Nombre}
                    />
                    <TextField
                        label="Ataque"
                        onChange={(e, newValue) =>
                            setItemEdit({
                                ...itemEdit,
                                Ataque: newValue ? parseInt(newValue) : undefined,
                            } as ArmaItem)
                        }
                        value={itemEdit.Ataque !== null && itemEdit.Ataque !== undefined ? itemEdit.Ataque.toString() : ""}
                    />
                    <TextField
                        label="Daño"
                        onChange={(e, newvalue) => {
                            setItemEdit({ ...itemEdit, Danho: newvalue } as ArmaItem);
                        }}
                        value={itemEdit.Danho}
                    />

                    <Dropdown
                        label="Tipo"
                        selectedKeys={itemEdit.Tipo}
                        options={opcionesTipo}
                        onChange={(e, selectedItems) => { handleTipoChange(selectedItems) }}
                        multiSelect
                    />
                    <Toggle
                        label="Arrojadiza"
                        checked={itemEdit.Arrojadiza}
                        onChange={(e, checked) => {
                            setItemEdit({ ...itemEdit, Arrojadiza: checked } as ArmaItem);
                        }}
                    />
                    <Dropdown
                        label="Car"
                        selectedKey={itemEdit.Car}
                        options={opcionesCar}
                        onChange={(e, item) => {
                            setItemEdit({ ...itemEdit, Car: item.text } as ArmaItem);
                        }}
                    />
                    <TextField
                        label="Caracteristicas"
                        value={itemEdit.Caracteristicas}
                        onChange={(e, newValue) => {
                            setItemEdit({
                                ...itemEdit,
                                Caracteristicas: newValue,
                            } as ArmaItem);
                        }}
                        multiline
                        rows={4}
                    />
                    <Dropdown
                        label="Foto"
                        placeholder="Seleccione una foto"
                        //defaultSelectedKey={itemEdit?.Foto?.ID || 1}
                        options={fotos.map(F => {
                            return {
                                key: F.ID,
                                text: F.Nombre,
                                data: F
                            }
                        })}

                        onChange={(e, newvalue) => {
                            console.log(newvalue.data.Url.replaceAll(" ", "%20"));

                            const foto = newvalue.data.Url.replaceAll(" ", "%20");
                            setItemEdit({ ...itemEdit, Foto: { Description: newvalue.text, Url: foto } } as ArmaItem);
                        }}

                    />
                </Stack>
            </Modal>
        </>
    );
}
