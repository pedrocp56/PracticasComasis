import * as React from "react";
import { Button, Modal } from "antd";
import { ArmaItem } from "../ArmaItem";

export interface infoParaTablaProps {
    text: string
    info: ArmaItem;
}

const ArmaInfo: React.FC<{ titulo: string, text: string, info: ArmaItem }> = ({ titulo, text, info }) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const buttonStyle = {
        backgroundColor: "#E4ADF3",
        color: "#161677"
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
    var foto = info.Foto;
    var url;
    if (!foto) {
        url = "Sin imagen";
    } else {
        url = foto.Url;
    }
    var car = info.Caracteristicas;
    if (!car) {
        car = "Sin caracteristicas especiales";
    }

    return (
        <>
            <Button type="primary"
                onClick={showModal}
                style={buttonStyle}>
                {titulo}
            </Button>
            <Modal title={titulo} open={isModalOpen}
                onOk={handleOk} onCancel={handleCancel}>
                <p>ID: {info.ID}</p>
                <p>Nombre: {info.Nombre}</p>
                <p>Ataque: {info.Ataque}</p>
                <p>Daño: {info.Daño}</p>
                <p>Tipo de daño: {info.Tipo}</p>
                <p>Arma arrojadiza: {txt}</p>
                <p>Caracteristica de ataque: {info.Car}</p>
                <p>Caracteristicas:</p>
                <p style={{ whiteSpace: "pre-line" }}>  {car}</p>
                <p>URL de la foto: {url}</p>
            </Modal>
        </>
    );
};

export default ArmaInfo;