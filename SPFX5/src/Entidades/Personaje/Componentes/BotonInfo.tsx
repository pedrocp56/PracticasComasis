import { IconButton } from "@fluentui/react";
import { Modal } from "antd";
import * as React from "react";
import { UsarImagen } from "../../Generales/UsarImagen";
import { PersonajeItem } from "../PersonajeItem";
import PersonajeBotonArmas from "./BotonArmas";

export interface infoParaTablaProps {
    personaje: PersonajeItem;
    titulo: string;
}

const PersonajeBotonInfo: React.FC<infoParaTablaProps> = (Props: infoParaTablaProps) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const showModal = (): void => {
        setIsModalOpen(true);
    };

    const handleOk = (): void => {
        setIsModalOpen(false);
    };


    return (
        <>
            <IconButton
                id="botonMostrar"
                onClick={showModal}
                iconProps={{ iconName: "ComplianceAudit" }}>
                {Props.titulo}
            </IconButton>
            {isModalOpen &&
                <Modal title={Props.titulo} open={isModalOpen}
                    onOk={handleOk}
                    cancelButtonProps={{ hidden: true }} closable={false}>
                    <p><strong>ID: </strong>{Props.personaje.ID}</p>
                    <p><strong>Nombre: </strong>{Props.personaje.Nombre}</p>
                    <p><strong>Usuario: </strong>{Props.personaje.UsuarioNombre}</p>
                    <p><strong>Caracteristicas: </strong></p>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ flex: 1 }}>
                            <p>Base</p>
                            <p>Fuerza: {Props.personaje.Fuerza}</p>
                            <p>Destreza: {Props.personaje.Destreza}</p>
                            <p>Constitución: {Props.personaje.Constitucion}</p>
                            <p>Inteligencia: {Props.personaje.Inteligencia}</p>
                            <p>Sabiduria: {Props.personaje.Sabiduria}</p>
                            <p>Carisma: {Props.personaje.Carisma}</p>
                        </div>
                        <div style={{ flex: 1 }}>
                            <p>Bono</p>
                            <p>{Props.personaje.Bono_Fuerza}</p>
                            <p>{Props.personaje.Bono_Destreza}</p>
                            <p>{Props.personaje.Bono_Constitucion}</p>
                            <p>{Props.personaje.Bono_Inteligencia}</p>
                            <p>{Props.personaje.Bono_Sabiduria}</p>
                            <p>{Props.personaje.Bono_Carisma}</p>
                        </div>
                    </div>
                    <p><strong>Bono de Competencia: </strong>{Props.personaje.Competencia}</p>
                    <p><strong>Armas: </strong>{<PersonajeBotonArmas personaje={Props.personaje} />}</p>
                    <p><strong>Foto: </strong>{<UsarImagen imageUrl={Props.personaje.Foto} />}</p>
                </Modal>
            }
        </>
    );
};

export default PersonajeBotonInfo;
/* eslint-enable */