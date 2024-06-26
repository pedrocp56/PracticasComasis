/* eslint-disable @typescript-eslint/no-empty-function*/

import * as React from "react";
import { useState } from "react";
import { PrimaryButton, StackItem } from "@fluentui/react";
import { ArmaItem } from "../ArmaItem";
import ArmaFormProps from "./UsoGeneral/ArmaTodoForm";
import { ArmaLista } from "../ArmaLista";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";


export interface IArmaNuevaBotonProps {
    lista: ArmaLista;
    callback: (result: boolean) => Promise<void>;
}

export default function ArmaNuevaBoton(Props: IArmaNuevaBotonProps): JSX.Element {
    const [nuevaArma, setNuevaArma] = useState<ArmaItem>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemEdit, setItemEdit] = useState<ArmaItem>(null);
    /*
        const handleOk = async ():Promise<void> => {
            if (nuevaArma && itemEdit) {
                nuevaArma.ItemEdit = itemEdit;
                await Props.callback(true);
                setIsModalOpen(false);
            }
        };
    */
    const handleOk = async (): Promise<void> => {
        await Props.callback(true);
        setIsModalOpen(false);
    };
    const handleCancel = (): void => {
        setIsModalOpen(false);
    };

    return (
        <StackItem>
            <PrimaryButton
                className={commonStyles.botonMostrar}
                text={"Nueva Arma"}
                title={"Nueva Arma"}
                iconProps={{ iconName: "Add" }}
                onClick={() => {
                    const nuevoparaForm = Props.lista.getNewArma();
                    setNuevaArma(nuevoparaForm);
                    setItemEdit(nuevoparaForm);
                    setIsModalOpen(true);
                }} />
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