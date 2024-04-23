import * as React from "react";
import { Table, TableColumnsType } from "antd";
import { ArmaItem } from "../ArmaItem";
import ArmaCar from "./ArmaCar";
import ArmaTipo from "./ArmaTipo";
import ArmaArr from "./ArmaArr";
import Botones from "./ArmaBotones";
import NuevaArma from "./ArmaNuevaBoton";
import ArmaCaracteristicas from "./ArmaCaracteristicas";
import ArmaInfo from "./ArmaInfo";
import UsarImagen from "./UsarImagen";

export interface IArmaWebpartProps {
  Items: ArmaItem[];
}

export default function ArmaWebpart(
  Props: IArmaWebpartProps
): JSX.Element {

  const columns: TableColumnsType<ArmaItem> = [
    {
      key: "Resume",
      title: "Resume",
      dataIndex: "Resume",
      render: (text: string, record: ArmaItem) => (
        <div>
          <ArmaInfo titulo="Info" text={text} info={record} />
        </div>
      )
    },

    {
      key: "ID",
      title: "ID",
      dataIndex: "ID",
      defaultSortOrder: "descend",
      sorter: (a: any, b: any) => a.ID - b.ID,
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
      sorter: (a: any, b: any) => a.Ataque - b.Ataque,
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
      onFilter: (value: string, record) => record.Car.indexOf(value) === 0,
      render: (tipo: string[]) => {
        return (
          <ArmaTipo tipo={tipo} />
        );
      }
    },
    {
      key: "Arrojadiza",
      title: "Arrojadiza",
      dataIndex: "Arrojadiza",
      render: (arr: boolean) => {
        return (
          <ArmaArr arr={arr} />
        );
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
      onFilter: (value: string, record) => record.Car.indexOf(value) === 0,
      render: (car: string) => {
        return (
          <ArmaCar car={car} />
        );
      }
    },
    {
      key: "Caracteristicas",
      title: "Caracteristicas",
      dataIndex: "Caracteristicas",
      render: (text: string) => (
        <div>
          <ArmaCaracteristicas text={text} />
        </div>
      ),
    },
    {
      key: "Foto",
      title: "Foto",
      dataIndex: "Foto",
      render: (imageUrl: any) => (
        <div>
          <UsarImagen imageUrl={imageUrl} />
        </div>
      ),
    },
  ];
  return (
    <div>
      <>
        <NuevaArma />
        <Botones />
        <Table
          columns={columns}
          dataSource={Props.Items}
        />
      </>
    </div>
  );

}
