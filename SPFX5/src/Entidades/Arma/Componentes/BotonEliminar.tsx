
import * as React from "react";

import { IconButton, Dialog, DialogType, DialogFooter, DefaultButton, PrimaryButton } from "@fluentui/react";
import { useState } from "react";
import { ArmaItem } from "../ArmaItem";

const buttonStyle = {
    backgroundColor: "#E4ADF3",
    color: "red"
};

export interface IArmaBotonEliminarProps {
    item: ArmaItem;
    callback: () => Promise<void>
}
export default function ArmaBotonEliminar(props: IArmaBotonEliminarProps): JSX.Element {
    const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false); // Nuevo estado para confirmación

    const handleDelete = (): void => {
        // Mostrar diálogo de confirmación
        setIsDeleteConfirmed(true);
    };

    const handleDeleteConfirmed = async (): Promise<void> => {
        await props.item.deleteArma();
        await props.callback();
        setIsDeleteConfirmed(false); // Reiniciar el estado de confirmación
    };

    return (
        <>
            <IconButton
                onClick={handleDelete}
                iconProps={{ iconName: "Delete" }}
                style={buttonStyle}
                title="Eliminar"
            />
            <Dialog
                hidden={!isDeleteConfirmed}
                onDismiss={() => setIsDeleteConfirmed(false)}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: 'Eliminar Arma',
                    subText: '¿Estás seguro de que quieres eliminar este personaje?',
                }}
                modalProps={{
                    isBlocking: true,
                }}
            >
                <DialogFooter>
                    <PrimaryButton onClick={handleDeleteConfirmed} text="Sí" />
                    <DefaultButton onClick={() => setIsDeleteConfirmed(false)} text="No" />
                </DialogFooter>
            </Dialog>
        </>
    );
}

