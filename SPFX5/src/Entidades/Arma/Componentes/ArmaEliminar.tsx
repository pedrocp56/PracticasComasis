import * as React from "react";
import { IconButton, Stack, Dialog, DialogType, DialogFooter, DefaultButton, PrimaryButton } from "@fluentui/react";
import { useState } from "react";
import { ArmaItem } from "../ArmaItem";

const stackStyles = {
    root: {
        background: "White",
    },
};
const horizontalGapStackTokens = {
    childrenGap: 10,
    padding: 10,
};

export interface IArmaEliminarBotonProps {
    item: ArmaItem;
    callback: () => Promise<void>
}
export default function ArmaEliminarBoton(props: IArmaEliminarBotonProps): JSX.Element {
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
            <Stack enableScopedSelectors horizontal disableShrink styles={stackStyles} tokens={horizontalGapStackTokens}>
                <IconButton
                    onClick={handleDelete}
                    iconProps={{ iconName: "Delete" }}
                />
            </Stack>
            <Dialog
                hidden={!isDeleteConfirmed}
                onDismiss={() => setIsDeleteConfirmed(false)}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: 'Eliminar elemento',
                    subText: '¿Estás seguro de que quieres eliminar este elemento?',
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

