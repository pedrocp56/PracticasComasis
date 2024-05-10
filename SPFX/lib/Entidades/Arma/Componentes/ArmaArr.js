import { Tag } from "antd";
import * as React from "react";
export default function ArmaArr(Props) {
    var txt = "No se";
    var color = "White";
    var txtcolor = "white";
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
    return (React.createElement(React.Fragment, null,
        React.createElement(Tag, { style: { color: txtcolor, backgroundColor: color }, key: null }, txt.toUpperCase())));
}
//# sourceMappingURL=ArmaArr.js.map