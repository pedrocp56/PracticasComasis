import * as React from "react";
import { Table } from "antd";
import ArmaCar from "./ArmaCar";
import ArmaTipo from "./ArmaTipo";
import ArmaArr from "./ArmaArr";
export default function ArmaWebpart(Props) {
    var columns = [
        {
            key: "ID",
            title: "ID",
            dataIndex: "ID",
            defaultSortOrder: "descend",
            sorter: function (a, b) { return a.ID - b.ID; },
        },
        {
            key: "Nombre",
            title: "Nombre",
            dataIndex: "Nombre",
        },
        {
            key: "Ataque",
            title: "Ataque",
            dataIndex: "Ataque",
            sorter: function (a, b) { return a.Ataque - b.Ataque; },
        },
        {
            key: "Daño",
            title: "Daño",
            dataIndex: "Daño",
        },
        {
            key: "Tipo",
            title: "Tipo",
            dataIndex: "Tipo",
            onFilter: function (value, record) { return record.Car.indexOf(value) === 0; },
            render: function (tipo) {
                return (React.createElement(ArmaTipo, { tipo: tipo }));
            }
        },
        {
            key: "Arrojadiza",
            title: "Arrojadiza",
            dataIndex: "Arrojadiza",
            render: function (arr) {
                return (React.createElement(ArmaArr, { arr: arr }));
            }
        },
        {
            key: "Car",
            title: "Car",
            dataIndex: "Car",
            filters: [
                {
                    text: "Fuerza",
                    value: "Fuerza",
                },
                {
                    text: "Destreza",
                    value: "Destreza",
                },
                {
                    text: "Constitución",
                    value: "Constitución",
                },
                {
                    text: "Inteligencia",
                    value: "Inteligencia",
                },
                {
                    text: "Sabiduria",
                    value: "Sabiduria",
                },
                {
                    text: "Carisma",
                    value: "Carisma",
                },
            ],
            onFilter: function (value, record) { return record.Car.indexOf(value) === 0; },
            render: function (car) {
                return (React.createElement(ArmaCar, { car: car }));
            }
        },
        {
            key: "Caracteristicas",
            title: "Caracteristicas",
            dataIndex: "Caracteristicas",
            render: function (text) { return (React.createElement("span", null, text ? text.split("\n").map(function (line, index) { return React.createElement("span", { key: index },
                line,
                React.createElement("br", null)); }) : null)); },
        },
        {
            key: "Foto",
            title: "Foto",
            dataIndex: "Foto"
        },
    ];
    return (React.createElement(Table, { columns: columns, dataSource: Props.Items }));
}
//# sourceMappingURL=ArmaTabla.js.map