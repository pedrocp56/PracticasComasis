/* eslint-disable  @typescript-eslint/no-extra-semi*/
import * as React from "react";
import { Modal } from "antd";
import { IconButton } from "@fluentui/react";
import { PersonajeItem } from "../PersonajeItem";

export interface infoParaTablaProps {
  titulo: string;
  info: PersonajeItem;
}

export default function PersonajeBotonCar(props: infoParaTablaProps): JSX.Element {
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

  const buttonStyle = {
    backgroundColor: "#E4ADF3",
    color: "#1B4C25",
  };
  return (
    <>
      <IconButton
        onClick={showModal}
        style={buttonStyle}
        iconProps={{ iconName: "Script" }}
        title="Más información"
      >
        {props.titulo}
      </IconButton>
      {isModalOpen &&
        <Modal
          title={props.titulo}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ flex: 1 }}>
              <p>Base</p>
              <p>Fuerza: {props.info.Fuerza}</p>
              <p>Destreza: {props.info.Destreza}</p>
              <p>Constitución: {props.info.Constitucion}</p>
              <p>Inteligencia: {props.info.Inteligencia}</p>
              <p>Sabiduria: {props.info.Sabiduria}</p>
              <p>Carisma: {props.info.Carisma}</p>
            </div>
            <div style={{ flex: 1 }}>
              <p>Bono</p>
              <p>{props.info.Bono_Fuerza}</p>
              <p>{props.info.Bono_Destreza}</p>
              <p>{props.info.Bono_Constitucion}</p>
              <p>{props.info.Bono_Inteligencia}</p>
              <p>{props.info.Bono_Sabiduria}</p>
              <p>{props.info.Bono_Carisma}</p>
            </div>
          </div>
          <p>Bono de Competencia: {props.info.Competencia}</p>
        </Modal>
      }
    </>
  );
};
/* eslint-enable */
