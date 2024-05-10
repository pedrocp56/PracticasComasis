import { Spinner } from "@fluentui/react";
import * as React from 'react';
import { PersonajeLista } from "../../../Entidades/Personaje/PersonajeLista";
export default function GestorPersonajesWebPart(props) {
    var _a = React.useState(true), cargando = _a[0], setCargando = _a[1];
    var lista = React.useRef();
    React.useEffect(function () {
        lista.current = new PersonajeLista(props.SP.web, props.WebPartContext);
        lista.current.CargarTodos().then(function (Items) {
            console.log(Items);
        });
        setTimeout(function () {
            setCargando(false);
        }, 2000);
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement(Spinner, { hidden: !cargando })),
        React.createElement("div", { hidden: cargando },
            React.createElement("h1", null, "Ejemplo Webpart"),
            React.createElement("p", null, "Este es un ejemplo de webpart"),
            React.createElement("p", null,
                "Estamos en el sitio ",
                props.WebPartContext.pageContext.web.absoluteUrl))));
}
//# sourceMappingURL=GestionPersonajesWebPart.js.map