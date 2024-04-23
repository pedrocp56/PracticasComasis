import * as React from "react";
import { Button, Modal } from "antd";
import { IStackStyles, IStackTokens, Stack } from "@fluentui/react";
import { useState } from "react";

const stackStyles: IStackStyles = {
    root: {
        background: "White",
    },
};
const horizontalGapStackTokens: IStackTokens = {
    childrenGap: 10,
    padding: 10,
};

const ArmaCaracteristicas: React.FC<{ text: string}> = ({ text}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setTimeout(() => {
            setIsModalOpen(false);
        }, 1000);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const buttonStyle = {
        backgroundColor: "#E4ADF3",
        color: "#161677"
    };

    return (
        <>
            <Stack enableScopedSelectors horizontal disableShrink styles={stackStyles} tokens={horizontalGapStackTokens}>
                <Button type="primary"
                    onClick={showModal}
                    style={buttonStyle}>
                    Caracteristicas
                </Button>
                <Modal title="Características" open={isModalOpen}
                    onOk={handleOk} onCancel={handleCancel}>
                    <div style={{ whiteSpace: "pre-line" }}>{text}</div>
                </Modal>
            </Stack >
        </>
    );
};

export default ArmaCaracteristicas;