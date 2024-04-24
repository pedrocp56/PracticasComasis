import * as React from "react";
import { Table, TableColumnsType } from "antd";
import { ArmaItem } from "../ArmaItem";
import ArmaCar, { CarFiltro } from "./ArmaCar";
import ArmaTipo from "./ArmaTipo";
import ArmaArr from "./ArmaArr";
import NuevaArma from "./ArmaNuevaBoton";
import ArmaCaracteristicas from "./ArmaCaracteristicas";
import ArmaInfo from "./ArmaInfo";
import UsarImagen from "./UsoGeneral/UsarImagen";
import { SearchOutlined } from '@ant-design/icons';
import FiltroTexto from "./UsoGeneral/FiltroTexto";
import { CalcularDañoMax } from "./ArmaDaño";


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
          <ArmaInfo titulo="Info" info={record} />
        </div>
      )
    },

    {
      key: "ID",
      title: "ID",
      dataIndex: "ID",
      defaultSortOrder: "ascend",
      sorter: (a: any, b: any) => a.ID - b.ID,
    },
    {
      key: "Nombre",
      title: "Nombre",
      dataIndex: "Nombre",
      filterDropdown: FiltroTexto,
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
      onFilter: (value: any, record: ArmaItem) =>
        record.Nombre.toLowerCase().indexOf((value as string).toLowerCase()) !== -1,
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
      sorter: CalcularDañoMax,
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
      filters: CarFiltro(),
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
    {
      key: "Editar",
      title: "Editar",
      dataIndex: "Editar",
      render: (text: string, record: ArmaItem) => (
        <div>
          <ArmaInfo titulo="Info" info={record} />
        </div>
      )
    },
  ];
  return (
    <div>
      <>
        <NuevaArma />
        <Table
          columns={columns}
          dataSource={Props.Items}
        />
      </>
    </div>
  );

}
