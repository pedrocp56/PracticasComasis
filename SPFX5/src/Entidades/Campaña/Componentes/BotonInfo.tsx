import { IconButton } from "@fluentui/react";
import { Modal } from "antd";
import * as React from "react";
import UsarFecha from "../../Generales/OperacionesFecha";
import { UsarImagen } from "../../Generales/UsarImagen";
import { CampañaItem } from "../CampañaItem";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";

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
                className={commonStyles.botonMostrar}
                onClick={showModal}
                iconProps={{ iconName: "ComplianceAudit" }}>
                {Props.titulo}
            </IconButton>
            {isModalOpen &&
                <Modal title={Props.titulo} open={isModalOpen}
                    onOk={handleOk} 
                    cancelButtonProps={{ hidden: true }} closable={false}>
                    <p><strong>ID: </strong>{Props.info.ID}</p>
                    <p><strong>Nombre: </strong>{Props.info.Nombre}</p>
                    <p><strong>Descripción:</strong></p>
                    <p style={{ whiteSpace: "pre-line" }}>  {Props.info.Descripcion}</p>
                    <p><strong>Próxima sesion: </strong>{<UsarFecha fecha={Props.info.Fecha} />}</p>
                    <p><strong>Foto: </strong>{<UsarImagen imageUrl={Props.info.Foto} />}</p>
                    <p><strong>Master: </strong>{Props.info.Master.Title}</p>
                </Modal>
            }
        </>
    );
};

export default CampañaBotonInfo;
/* eslint-enable */