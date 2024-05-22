import * as React from "react";
import { Modal } from "antd";
import { IconButton } from "@fluentui/react";
import { PersonajeItem } from "../PersonajeItem";

export interface infoParaTablaProps {
  info: PersonajeItem;
}

const PersonajeBotonCar: React.FC<{ titulo: string; info: PersonajeItem }> = ({
  titulo,
  info,
}) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const handleOk = (): void => {
    setIsModalOpen(false);
  };

  const handleCancel = (): void => {
    setIsModalOpen(false);
  };

  return (
    <>
      <IconButton
        id="botonMostrar"
        onClick={showModal}
        iconProps={{ iconName: "Script" }}
        title="Más información"
      >
        {titulo}
      </IconButton>
      <Modal
        title={titulo}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ flex: 1 }}>
            <p>Base</p>
            <p>Fuerza: {info.Fuerza}</p>
            <p>Destreza: {info.Destreza}</p>
            <p>Constitución: {info.Constitucion}</p>
            <p>Inteligencia: {info.Inteligencia}</p>
            <p>Sabiduria: {info.Sabiduria}</p>
            <p>Carisma: {info.Carisma}</p>
          </div>
          <div style={{ flex: 1 }}>
            <p>Bono</p>
            <p>{info.Bono_Fuerza}</p>
            <p>{info.Bono_Destreza}</p>
            <p>{info.Bono_Constitucion}</p>
            <p>{info.Bono_Inteligencia}</p>
            <p>{info.Bono_Sabiduria}</p>
            <p>{info.Bono_Carisma}</p>
          </div>
        </div>
        <p>Bono de Competencia: {info.Competencia}</p>
      </Modal>
    </>
  );
};

export default PersonajeBotonCar;
/* eslint-enable */
