import { IconButton } from "@fluentui/react";
import { Modal } from "antd";
import * as React from "react";
import { UsarImagenArma } from "../../Generales/UsarImagen";
import { ArmaItem } from "../ArmaItem";

export interface infoParaTablaProps {
    info: ArmaItem;
}

const ArmaBotonInfo: React.FC<{ titulo: string, info: ArmaItem }> = ({ titulo, info }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const showModal = (): void => {
        setIsModalOpen(true);
    };

    const handleOk = (): void => {
        setIsModalOpen(false);
    };


    let txt;
    switch (info.Arrojadiza) {
        case true:
            txt = "Si";
            break;
        case false:
            txt = "No";
            break;
        default:
            txt = "No";
            break;
    }
    let car = info.Caracteristicas;
    if (!car) {
        car = "Sin caracteristicas especiales";
    }
    return (
        <>
            <IconButton
            id="botonMostrar"
                onClick={showModal}
                iconProps={{ iconName: "ComplianceAudit" }}>
                {titulo}
            </IconButton>
            {isModalOpen &&
                <Modal title={titulo} open={isModalOpen}
                    onOk={handleOk} 
                    cancelButtonProps={{ hidden: true }} closable={false}>
                    <p>ID: {info.ID}</p>
                    <p>Nombre: {info.Nombre}</p>
                    <p>Ataque: {info.Ataque}</p>
                    <p>Daño: {info.Danho}</p>
                    <p>Tipo de daño: {info.Tipo?.join(", ")}</p>
                    <p>Arma arrojadiza: {txt}</p>
                    <p>Caracteristica de ataque: {info.Car}</p>
                    <p>Caracteristicas:</p>
                    <p style={{ whiteSpace: "pre-line" }}>  {car}</p>
                    <p>Foto: {<UsarImagenArma imageUrl={info.Foto} />}</p>
                </Modal>
            }
        </>
    );
};

export default ArmaBotonInfo;
/* eslint-enable */