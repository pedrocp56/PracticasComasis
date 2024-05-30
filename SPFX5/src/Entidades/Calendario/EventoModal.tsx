import { Modal } from "antd";
import * as React from "react";
import UsarFecha from "../Generales/OperacionesFecha";
import { UsarImagen } from "../Generales/UsarImagen";
import { EventoBigCalendar } from "./EventoBigCalendar";

export interface infoParaTablaProps {
    info: EventoBigCalendar;
    titulo: string;
    onClose: () => void;
}

const EventoInfo: React.FC<infoParaTablaProps> = (Props: infoParaTablaProps) => {
    return (
        <>
            <Modal title={Props.titulo}
                visible={true}
                cancelButtonProps={{ hidden: true }} closable={false}
                onOk={Props.onClose} >
                <p><strong>ID: </strong>{Props.info.item.ID}</p>
                <p><strong>Nombre: </strong>{Props.info.item.Nombre}</p>
                <p><strong>Descripción:</strong></p>
                <p style={{ whiteSpace: "pre-line" }}>  {Props.info.item.Descripcion}</p>
                <p><strong>Próxima sesion: </strong>{<UsarFecha fecha={Props.info.item.Fecha} />}</p>
                <p><strong>Foto: </strong>{<UsarImagen imageUrl={Props.info.item.Foto} />}</p>
                <p><strong>aster: </strong>M{Props.info.item.Master.Title}</p>
            </Modal >
        </>
    );
};

export default EventoInfo;

/* eslint-enable */