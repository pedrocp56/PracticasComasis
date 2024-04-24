import * as React from "react";
import { Modal } from "antd";
import { ActionButton } from "@fluentui/react";
import { useState } from "react";


const ArmaCaracteristicas: React.FC<{ text: string }> = ({ text }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        color: "#161677"
    };
    let txt = "Mas información";
    if (text === null) {
       txt="Sin información";
    }
    return (
        <>
            <ActionButton type="primary"
                onClick={showModal}
                style={buttonStyle}
                iconProps={{ iconName: "ComplianceAudit" }}>
                <div style={{margin:"20px"}}>{txt}</div>
            </ActionButton>
            <Modal title="Características" open={isModalOpen}
                onOk={handleOk} onCancel={handleCancel}>
                <div style={{ whiteSpace: "pre-line" , margin:"20px"}}>{text}</div>
            </Modal>
        </>
    );
}

export default ArmaCaracteristicas;
/* eslint-enable */