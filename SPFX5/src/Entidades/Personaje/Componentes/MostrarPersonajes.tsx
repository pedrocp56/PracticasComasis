/* eslint-disable @typescript-eslint/no-floating-promises*/

import * as React from "react";
import { PersonajeLista } from "../PersonajeLista";
import { PersonajeItem } from "../PersonajeItem";
import { useEffect, useState } from "react";
import { DefaultButton } from "@fluentui/react";
import PersonajeTabla from "./PersonajeTabla";
import { Modal } from "antd";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";

export const MostrarPersonajes: React.FC<{ campañaID: number, listaPer: PersonajeLista }> = ({ campañaID, listaPer }) => {

    const [Personajes, setPersonajes] = React.useState<PersonajeItem[]>([]);
    const [MostrarPer, setMostrarPer] = useState(false);

    const cargarPersonajes = async (): Promise<void> => {
        await listaPer.CargarTodosCampaña(campañaID).then((i) => {
            setPersonajes(i);
        });
    };

    useEffect((): void => {
        cargarPersonajes();
    }, []);

    const mostrarP = (): void => {
        setMostrarPer(true);
        console.log(Personajes);
    };
    const cerrar = (): void => {
        setMostrarPer(false);
        console.log(Personajes);
    };

    return (
        <>
            {!listaPer &&
                <div>No hay lista</div>
            }
            {Personajes.length === 0 &&
                <div>Sin Personajes</div>
            }
            {Personajes.length !== 0 &&
                <DefaultButton
                    className={commonStyles.botonMostrar}
                    onClick={mostrarP}
                    text="Mostrar Personajes"
                />
            }
            {MostrarPer &&
                <Modal title={"Personajes"} open={MostrarPer}
                    onOk={cerrar} onCancel={cerrar}
                    cancelButtonProps={{ hidden: true }} closable={false}
                    width={850}>
                    <PersonajeTabla Items={Personajes} />
                </Modal>

            }
        </>
    );
};
/* eslint-enable */
