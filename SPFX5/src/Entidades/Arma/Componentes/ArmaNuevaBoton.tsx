import * as React from "react";
import { Button, Modal } from "antd";
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

const NuevaArma: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = ():void  => {
        setIsModalOpen(true);
    };

    const handleOk = ():void  => {
        setIsModalOpen(false);
    };

    const handleCancel = ():void  => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Stack enableScopedSelectors horizontal disableShrink styles={stackStyles} tokens={horizontalGapStackTokens}>
                <Button type="primary" onClick={showModal} size="large">
                    Nueva arma
                </Button>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <p>Nombre del arma</p>
                    <p>Ataque</p>
                    <p>Some contents...</p>
                </Modal>
            </Stack>
        </>
    );
};

export default NuevaArma;
/* eslint-enable */