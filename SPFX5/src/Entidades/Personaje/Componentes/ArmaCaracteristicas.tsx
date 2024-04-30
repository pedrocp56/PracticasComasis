import * as React from "react";
import { Modal } from "antd";
import { ActionButton } from "@fluentui/react";


const ArmaCaracteristicas: React.FC<{ text: string }> = ({ text }) => {
    const info = (): void => {
        Modal.info({
            title: 'Características',
            content: (
                <div>
                    <div style={{ whiteSpace: "pre-line", margin: "20px" }}>{text}</div>
                </div>
            ),
        });
    };

    if (text === null) {
        return (
            <>
                <p>Sin información</p>
            </>
        );
    }
    return (
        <>
            <ActionButton type="primary"
                onClick={info}
                iconProps={{ iconName: "ComplianceAudit" }} />
        </>
    );
}

export default ArmaCaracteristicas;
/* eslint-enable */