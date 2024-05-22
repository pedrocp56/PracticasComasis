import * as React from "react";
import { Modal } from "antd";
import { ArmaItem } from "../ArmaItem";
import { IconButton } from "@fluentui/react";

export interface infoParaTablaProps {
    info: ArmaItem;
}

const ArmaInfo: React.FC<{ titulo: string, info: ArmaItem }> = ({ titulo, info }) => {
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
    const foto = info.Foto;
    let url;
    if (!foto) {
        url = "Sin imagen";
    } else {
        url = foto.Url;
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
            <Modal title={titulo} open={isModalOpen}
                onOk={handleOk}
                cancelButtonProps={{ hidden: true }} closable={false}>
                <p>ID: {info.ID}</p>
                <p>Nombre: {info.Nombre}</p>
                <p>Ataque: {info.Ataque}</p>
                <p>Daño: {info.Daño}</p>
                <p>Tipo de daño: {info.Tipo?.join(", ")}</p>
                <p>Arma arrojadiza: {txt}</p>
                <p>Caracteristica de ataque: {info.Car}</p>
                <p>Caracteristicas:</p>
                <p style={{ whiteSpace: "pre-line" }}>  {car}</p>
                <p>Foto: {<img src={url} alt="Foto de Arma"
                    style={{ maxWidth: '250px', maxHeight: 'auto' }} />}</p>
            </Modal>
        </>
    );
};

export default ArmaInfo;
/* eslint-enable */