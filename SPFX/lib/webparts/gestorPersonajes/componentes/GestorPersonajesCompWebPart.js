import { Spinner } from "@fluentui/react";
import * as React from "react";
import { ArmaLista } from "../../../Entidades/Arma/ArmaLista";
import { useEffect, useState } from "react";
import ArmaTabla from "../../../Entidades/Arma/Componentes/ArmaTabla";
export default function GestorPersonajesCompWebpart(props) {
    var _a = useState(true), cargando = _a[0], setCargando = _a[1];
    var _b = React.useState([]), Items = _b[0], setItems = _b[1];
    var ArmaL = React.useRef(new ArmaLista(props.SP.web, props.WebPartContext));
    useEffect(function () {
        ArmaL.current.CargarTodos().then(function (i) {
            console.log(i);
            setItems(i);
        });
        console.log(Items);
        setTimeout(function () {
            setCargando(false);
            if (!cargando)
                console.log("Cargado");
        }, 2000);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement(Spinner, { hidden: !cargando })),
        React.createElement("div", { hidden: cargando },
            React.createElement("h1", null, "Mis armas Webpart"),
            React.createElement(ArmaTabla, { Items: Items }))));
}
//# sourceMappingURL=GestorPersonajesCompWebpart.js.map