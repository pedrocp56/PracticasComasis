import { Tag } from "antd";
import * as React from "react";

export interface arrParaTablaProps {
    arr: boolean;
}

export default function ArmaArr(Props: arrParaTablaProps): JSX.Element {
    let txt = "No se";
    let color = "White";
    let txtcolor = "white";
    switch (Props.arr) {
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
            <Tag style={{ color: txtcolor, backgroundColor: color, fontWeight:"bold"}} key={null}>
                {txt.toUpperCase()}
            </Tag>
        </>
    );
}
/* eslint-enable */