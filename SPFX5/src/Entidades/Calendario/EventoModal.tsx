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
                <p>ID: {Props.info.item.ID}</p>
                <p>Nombre: {Props.info.item.Nombre}</p>
                <p>Descripción:</p>
                <p style={{ whiteSpace: "pre-line" }}>  {Props.info.item.Descripcion}</p>
                <p>Próxima sesion: {<UsarFecha fecha={Props.info.item.Fecha} />}</p>
                <p>Foto: {<UsarImagen imageUrl={Props.info.item.Foto} />}</p>
                <p>Master: {Props.info.item.Master.Title}</p>
            </Modal >
        </>
    );
};

export default EventoInfo;

/* eslint-enable */