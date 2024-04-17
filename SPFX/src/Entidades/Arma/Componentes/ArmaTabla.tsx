import * as React from "react";
import { Table } from "antd";
import { ArmaItem } from "../ArmaItem";

export interface IArmaWebpartProps {
  Items: ArmaItem[];
}

export default function ArmaWebpart(
  Props: IArmaWebpartProps
): JSX.Element {
  const columns = [
    {
      key: "ID",
      title: "ID",
      dataIndex: "ID"
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
    },
    {
      key: "Daño",
      title: "Daño",
      dataIndex: "Daño",
    },
    {
      key: "Tipo",
      title: "Tipo",
      dataIndex: "Tipo"
    },
    {
      key: "Arrojadiza",
      title: "Arrojadiza",
      dataIndex: "Arrojadiza",
    },
    {
      key: "Car",
      title: "Car",
      dataIndex: "Car",
    },
    {
      key: "Caracteristicas",
      title: "Caracteristicas",
      dataIndex: "Caracteristicas",
    },
    {
      key: "Foto",
      title: "Foto",
      dataIndex: "Foto"
    },
  ];

  return <Table dataSource={Props.Items} columns={columns} />;
}
