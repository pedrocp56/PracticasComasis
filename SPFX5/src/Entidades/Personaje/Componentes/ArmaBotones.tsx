/* eslint-disable  @typescript-eslint/no-floating-promises*/

import * as React from "react";
import { Button, Dropdown, message, Modal } from "antd";
import { IStackTokens, Stack } from "@fluentui/react";
import { useState } from "react";
import { GeneradorDeNumeroHexadecimal } from "./UsoGeneral/GeneradorDeNumeroHexadecimal";

const Botones: React.FC = () => {
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);

    const horizontalGapStackTokens: IStackTokens = {
        childrenGap: 10,
        padding: 10,
    };

    const showModal1 = ():void  => {
        setIsModalOpen1(true);
    };

    const showModal2 = ():void  => {
        setIsModalOpen2(true);
    };

    const showModal3 = ():void  => {
        setIsModalOpen3(true);
    };

    const handleOk = ():void  => {
        setIsModalOpen1(false);
        setIsModalOpen2(false);
        setIsModalOpen3(false);
    };

    const handleCancel = ():void  => {
        setIsModalOpen1(false);
        setIsModalOpen2(false);
        setIsModalOpen3(false);
    };

    const [messageApi, contextHolder] = message.useMessage();

    const mostrarMensaje = (message: string):void => {
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

    const buttonStyles = {
        nuevaArma: {
            backgroundColor: GeneradorDeNumeroHexadecimal(),
            color: GeneradorDeNumeroHexadecimal()
        },
        pedro: {
            backgroundColor: GeneradorDeNumeroHexadecimal(),
            color: GeneradorDeNumeroHexadecimal()
        },
        candyCrush: {
            backgroundColor: GeneradorDeNumeroHexadecimal(),
            color: GeneradorDeNumeroHexadecimal()
        },
        mensaje: {
            backgroundColor: GeneradorDeNumeroHexadecimal(),
            color: GeneradorDeNumeroHexadecimal()
        },
        acciones: {
            backgroundColor: GeneradorDeNumeroHexadecimal(),
            color: GeneradorDeNumeroHexadecimal()
        }
    };

    return (
        <>
            {contextHolder}
            <Stack enableScopedSelectors horizontal disableShrink tokens={horizontalGapStackTokens}>
                <Button type="primary" onClick={showModal1} size="large" style={buttonStyles.nuevaArma}>
                    Nueva arma
                </Button>
                <Modal
                    title="Basic Modal"
                    open={isModalOpen1}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    style={buttonStyles.nuevaArma}>
                    <p>Nombre del arma</p>
                    <p>Ataque</p>
                    <p>Some contents...</p>
                </Modal>
                <Button type="primary" onClick={showModal2} size="large" style={buttonStyles.pedro}>
                    Pedro
                </Button>
                <Modal
                    open={isModalOpen2}
                    title="Hacer Vistas de tablas"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    style={buttonStyles.pedro}>
                    <p>Estafa piramidal</p>
                    <p>Aceptas?</p>
                </Modal>
                <Button type="primary" onClick={showModal3} size="large" style={buttonStyles.candyCrush}>
                    Candy crush
                </Button>
                <Modal
                    open={isModalOpen3}
                    title="Candy crush"
                    onOk={handleOk}
                    onCancel={handleCancel}
                    style={buttonStyles.candyCrush}>
                    <p>Hackear candy crash con sharepoint</p>
                    <p>Aceptas?</p>
                </Modal>
                <Button type="primary" size="large" onClick={() => mostrarMensaje("¡¡¡¡¡¡¡¡¡¡¡¡¡CAMBIO DE COLOR!!!!!!!!")} style={buttonStyles.mensaje}>
                    Mensaje
                </Button>
                <Dropdown.Button menu={{ items }} type="primary" size="large" style={buttonStyles.acciones}>
                    Acciones
                </Dropdown.Button>
            </Stack>
        </>
    );
};

export default Botones;
/* eslint-enable */