import { IconButton } from "@fluentui/react";
import { Modal } from "antd";
import * as React from "react";
import { UsarImagenArma } from "../../Generales/UsarImagen";
import { ArmaItem } from "../ArmaItem";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";


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
                className={commonStyles.botonMostrar}
                onClick={showModal}
                iconProps={{ iconName: "ComplianceAudit" }}>
                {titulo}
            </IconButton>
            {isModalOpen &&
                <Modal title={titulo} open={isModalOpen}
                    onOk={handleOk}
                    cancelButtonProps={{ hidden: true }} closable={false}>
                    <p><strong>ID: </strong>{info.ID}</p>
                    <p><strong>Nombre: </strong>{info.Nombre}</p>
                    <p><strong>Ataque: </strong>{info.Ataque}</p>
                    <p><strong>Daño: </strong>{info.Danho}</p>
                    <p><strong>Tipo de daño: </strong>{info.Tipo?.join(", ")}</p>
                    <p><strong>Arma arrojadiza: </strong>{txt}</p>
                    <p><strong>Caracteristica de ataque: </strong>{info.Car}</p>
                    <p><strong>Caracteristicas:</strong></p>
                    <p style={{ whiteSpace: "pre-line" }}>  {car}</p>
                    <p><strong>Foto: </strong>{<UsarImagenArma imageUrl={info.Foto} />}</p>
                </Modal>
            }
        </>
    );
};

export default ArmaBotonInfo;
/* eslint-enable */