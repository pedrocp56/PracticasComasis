/* eslint-disable @typescript-eslint/no-explicit-any*/
import * as React from "react";
import { Modal } from "antd";
import { ActionButton } from "@fluentui/react";

export const MostrarTitulo: React.FC<{ item: any, texto: string }> = ({ item, texto }) => {    
    if (!item) {
        return <div>Sin {texto} asociad@</div>;
    }
    return (
        <div>{item.Title}</div>
    );
};

export const MostrarBoolean: React.FC<{ bool: boolean }> = ({ bool }) => {
    let txt = "No se";
    let color = "White";
    let txtcolor = "white";
    switch (bool) {
        case true:
            txt = "Si";
            color = "White";
            txtcolor = "Black";
            break;
        case false:
            txt = "No";
            color = "Black";
            txtcolor = "White";
            break;
        case null:
            txt = "No";
            color = "Black";
            txtcolor = "White";
            break;
        default:
            txt = "No se";
            color = "White";
            txtcolor = "White";
            break;
    }
    return (
        <>
            <div style={{ color: txtcolor, backgroundColor: color, fontWeight: "bold" }} key={null}>
                {txt.toUpperCase()}
            </div>
        </>
    );
}

export const MostrarMultiline: React.FC<{titulo:string, text: string }> = ({ titulo,text }) => {
    const info = (): void => {
        Modal.info({
            title: titulo,
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

/* eslint-enable */
