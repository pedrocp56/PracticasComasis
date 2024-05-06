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

  if (info.ListaArmas.length === 0) {
    return <>Sin armas</>;
  }
  return (
    <>
      <IconButton
        onClick={showModal}
        style={buttonStyle}
        iconProps={{ iconName: "Script" }}
        title={`${info.ListaArmas.length} armas`}
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
        {info.ListaArmas.length > 0 ? (
          info.ListaArmas.map((arma, index) => (
            <>
              <p key={index}>{arma.Title}</p>
              {/* No me vaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          <UsarImagen imageUrl={arma?.Foto} />
          */}
            </>
          ))
        ) : (
          <p>Sin armas</p>
        )}
      </Modal>
    </>
  );
};

export default PersonajeBotonArmas;
