import { IconButton } from "@fluentui/react";
import { Modal } from "antd";
import * as React from "react";
import { UsarImagen } from "../../Generales/UsarImagen";
import { PersonajeItem } from "../PersonajeItem";
import PersonajeBotonArmas from "./BotonArmas";
import PersonajeBotonCar from "./BotonCar";

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
                    <p>ID: {Props.personaje.ID}</p>
                    <p>Nombre: {Props.personaje.Nombre}</p>
                    <p>Usuario: {Props.personaje.UsuarioNombre}</p>


                    <p>Caracteristicas: {<PersonajeBotonCar titulo="Características" info={Props.personaje} />}</p>
                    <p>Armas: {<PersonajeBotonArmas personaje={Props.personaje} />}</p>
                    <p>Foto: {<UsarImagen imageUrl={Props.personaje.Foto} />}</p>
                </Modal>
            }
        </>
    );
};

export default PersonajeBotonInfo;
/* eslint-enable */