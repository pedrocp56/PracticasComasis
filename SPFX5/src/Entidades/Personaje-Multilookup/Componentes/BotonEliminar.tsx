import * as React from "react";
import { IconButton, Dialog, DialogType, DialogFooter, DefaultButton, PrimaryButton } from "@fluentui/react";
import { useState } from "react";
import { PersonajeItem } from "../PersonajeItem";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";

export interface IPersonajeBotonEliminarProps {
    item: PersonajeItem;
    callback: () => Promise<void>
}
export default function PersonajeBotonEliminar(props: IPersonajeBotonEliminarProps): JSX.Element {
    const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false); // Nuevo estado para confirmación

    const handleDelete = (): void => {
        // Mostrar diálogo de confirmación
        setIsDeleteConfirmed(true);
    };

    const handleDeleteConfirmed = async (): Promise<void> => {
        await props.item.deletePersonaje();
        await props.callback();
        setIsDeleteConfirmed(false); // Reiniciar el estado de confirmación
    };

    return (
        <>
            <IconButton
                className={commonStyles.botonEliminar}
                onClick={handleDelete}
                iconProps={{ iconName: "Delete" }}
                title="Eliminar"
            />
            <Dialog
                hidden={!isDeleteConfirmed}
                onDismiss={() => setIsDeleteConfirmed(false)}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: 'Eliminar Personaje',
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

