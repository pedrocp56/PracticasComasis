/* eslint-disable  @typescript-eslint/no-extra-semi, @typescript-eslint/no-floating-promises*/
import { IconButton } from "@fluentui/react";
import { Modal } from "antd";
import * as React from "react";
import { PersonajeItem } from "../PersonajeItem";
import PersonajeArmasTabla from "./TablaPersonajeArmas";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";

export interface infoParaTablaProps {
  personaje: PersonajeItem;
  callback?: () => Promise<void>;
}

export default function PersonajeBotonArmas(Props: infoParaTablaProps): JSX.Element {

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
        className={commonStyles.botonMostrar}
        onClick={showModal}
        iconProps={{ iconName: "Script" }}
        title="Armas"
      />
      {isModalOpen &&
        < Modal
          title={"Armas"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelButtonProps={{ hidden: true }}
          width={550}
          closable={false}
        >
          <PersonajeArmasTabla personaje={Props.personaje} callback={Props?.callback} />
        </Modal >
      }
    </>
  );
};
/* eslint-enable */
