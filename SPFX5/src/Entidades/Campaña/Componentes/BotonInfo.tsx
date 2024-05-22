import { IconButton } from "@fluentui/react";
import { Modal } from "antd";
import * as React from "react";
import UsarFecha from "../../Generales/OperacionesFecha";
import { UsarImagen } from "../../Generales/UsarImagen";
import { CampañaItem } from "../CampañaItem";

export interface infoParaTablaProps {
    info: CampañaItem;
    titulo: string;
}

const CampañaBotonInfo: React.FC<infoParaTablaProps> = (Props: infoParaTablaProps) => {
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
                    <p>ID: {Props.info.ID}</p>
                    <p>Nombre: {Props.info.Nombre}</p>
                    <p>Descripción:</p>
                    <p style={{ whiteSpace: "pre-line" }}>  {Props.info.Descripcion}</p>
                    <p>Próxima sesion: {<UsarFecha fecha={Props.info.Fecha} />}</p>
                    <p>Foto: {<UsarImagen imageUrl={Props.info.Foto} />}</p>
                    <p>Master: {Props.info.Master.Title}</p>
                </Modal>
            }
        </>
    );
};

export default CampañaBotonInfo;
/* eslint-enable */