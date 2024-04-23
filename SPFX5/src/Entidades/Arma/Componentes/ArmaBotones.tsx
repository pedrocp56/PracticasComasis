import * as React from "react";
import { Button, Dropdown, message, Modal } from "antd";
import { DefaultPalette, IStackStyles, IStackTokens, Stack } from "@fluentui/react";
import { useState } from "react";

const stackStyles: IStackStyles = {
    root: {
        background: DefaultPalette.white,
    },
};
const horizontalGapStackTokens: IStackTokens = {
    childrenGap: 10,
    padding: 10,
};

const Botones: React.FC = () => {
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);

    const showModal1 = () => {
        setIsModalOpen1(true);
    };

    const showModal2 = () => {
        setIsModalOpen2(true);
    };

    const showModal3 = () => {
        setIsModalOpen3(true);
    };

    const handleOk = () => {
        setIsModalOpen1(false);
        setIsModalOpen2(false);
        setIsModalOpen3(false);
    };

    const handleCancel = () => {
        setIsModalOpen1(false);
        setIsModalOpen2(false);
        setIsModalOpen3(false);
    };

    const [messageApi, contextHolder] = message.useMessage();

    const mostrarMensaje = (message: string) => {
        messageApi.info(message);
    };

    const items = [
        {
            key: '1',
            label: '1 opción',
            onClick: () => mostrarMensaje("Hola,")
        },
        {
            key: '2',
            label: '2 opción',
            onClick: () => mostrarMensaje("pa ti mi cola")
        },
        {
            key: '3',
            label: '3 opción',
            onClick: () => mostrarMensaje("que tal?")
        },
    ];

    return (
        <>
            {contextHolder}
            <Stack enableScopedSelectors horizontal disableShrink styles={stackStyles} tokens={horizontalGapStackTokens}>
                <Button type="primary" onClick={showModal1} size="large">
                    Nueva arma
                </Button>
                <Modal title="Basic Modal" open={isModalOpen1} onOk={handleOk} onCancel={handleCancel}>
                    <p>Nombre del arma</p>
                    <p>Ataque</p>
                    <p>Some contents...</p>
                </Modal>
                <Button type="primary" onClick={showModal2} size="large">
                    Pedro
                </Button>
                <Modal
                    open={isModalOpen2}
                    title="Hacer Vistas de tablas"
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Estafa piramidal</p>
                    <p>Aceptas?</p>
                </Modal>
                <Button type="primary" onClick={showModal3} size="large">
                    Candy crush
                </Button>
                <Modal
                    open={isModalOpen3}
                    title="Candy crush"
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Hackear candy crash con sharepoint</p>
                    <p>Aceptas?</p>
                </Modal>
                <Button type="primary" size="large" onClick={() => mostrarMensaje("Probando")}>
                    Mensaje
                </Button>
                <Dropdown.Button menu={{ items }} type="primary" size="large">Acciones</Dropdown.Button>
            </Stack>
        </>
    );
};

export default Botones;
