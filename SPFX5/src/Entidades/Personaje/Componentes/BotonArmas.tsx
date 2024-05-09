import * as React from "react";
import { Modal } from "antd";
import { IconButton } from "@fluentui/react";
import { PersonajeItem } from "../PersonajeItem";
//import UsarImagen from "../../Generales/UsarImagen";

export interface infoParaTablaProps {
  info: PersonajeItem;
}

const PersonajeBotonArmas: React.FC<{
  titulo: string;
  info: PersonajeItem;
}> = ({ titulo, info }) => {
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
        title="armas"
      >
        {titulo}
      </IconButton>
      <Modal
        title={titulo}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Armas</p>
        
      </Modal>
    </>
  );
};

export default PersonajeBotonArmas;
