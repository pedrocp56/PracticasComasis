/* eslint-disable @typescript-eslint/no-empty-function*/

import * as React from "react";
import { useState } from "react";
import { PrimaryButton, StackItem } from "@fluentui/react";
import { ArmaItem } from "../ArmaItem";
import ArmaFormProps from "./UsoGeneral/ArmaTodoForm";
import { ArmaLista } from "../ArmaLista";


export interface IArmaNuevaBotonProps {
    lista: ArmaLista;
    callback: (result: boolean) => Promise<void>;
}

export default function ArmaNuevaBoton(Props: IArmaNuevaBotonProps): JSX.Element {
    const [nuevaArma, setNuevaArma] = useState<ArmaItem>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemEdit, setItemEdit] = useState<ArmaItem>(null);

    const handleOk = async () => {
        if (nuevaArma && itemEdit) {
            nuevaArma.ItemEdit = itemEdit;
            await nuevaArma.updateItem();
            await Props.callback(true);
            setIsModalOpen(false);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <StackItem>
            <PrimaryButton
                text={"Nuevo Evento"}
                title={"Nuevo Evento"}
                iconProps={{ iconName: "Add" }}
                onClick={() => {
                    const nuevoparaForm = Props.lista.getNewArma();
                    setNuevaArma(nuevoparaForm);
                    setItemEdit(nuevoparaForm);
                    setIsModalOpen(true);
                }}
                style={{ backgroundColor: "#1b4586", color: "#FFFFFF" }}
            />
            {nuevaArma &&
                <ArmaFormProps
                    item={itemEdit}
                    callback={Props.callback}
                    isVisible={isModalOpen}
                    onCancel={handleCancel}
                    onSave={handleOk}
                />}
        </StackItem>
    );
}


/* eslint-enable */