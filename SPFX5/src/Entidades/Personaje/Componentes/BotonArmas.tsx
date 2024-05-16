/* eslint-disable  @typescript-eslint/no-extra-semi, @typescript-eslint/no-floating-promises*/
import { IconButton } from "@fluentui/react";
import { Modal } from "antd";
import * as React from "react";
import { PersonajeItem } from "../PersonajeItem";
import PersonajeArmasTabla from "./TablaPersonajeArmas";

export interface infoParaTablaProps {
  personaje: PersonajeItem;
  callback: () => Promise<void>;
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
          <PersonajeArmasTabla personaje={Props.personaje} callback={Props.callback} />
        </Modal >
      }
    </>
  );
};
/* eslint-enable */
