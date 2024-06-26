/* eslint-disable @typescript-eslint/no-explicit-any*/
import * as React from "react";
import { Table, TableColumnsType } from "antd";
import { ArmaItem } from "../ArmaItem";
import ArmaCar, { CarFiltro } from "./ArmaCar";
import ArmaTipo from "./ArmaTipo";
import ArmaArr from "./ArmaArr";
import ArmaCaracteristicas from "./ArmaCaracteristicas";
import ArmaInfo from "./ArmaInfo";
import { SearchOutlined } from '@ant-design/icons';
import { CalcularDañoMax } from "./ArmaDaño";
import ArmasBotonEditar from "./ArmaEditar";
import ArmaEliminarBoton from "./ArmaEliminar";
import { Stack } from "@fluentui/react";
import FiltroTexto from "../../Generales/FiltroTexto";
import { UsarImagen } from "../../Generales/UsarImagen";


export interface IArmaWebpartProps {
  Items: ArmaItem[];
  callback: () => Promise<void>
}

export default function ArmaWebpart(
  Props: IArmaWebpartProps
): JSX.Element {



  const columns: TableColumnsType<ArmaItem> = [
    {
      key: "#",
      title: "#",
      dataIndex: "#",
      align: 'center',
      render: (text: string, record: ArmaItem) => (
        <Stack horizontal tokens={{childrenGap: 5}}>
          <ArmaInfo titulo="Info" info={record} />
          <ArmasBotonEditar item={record} callback={Props.callback} />
          <ArmaEliminarBoton item={record} callback={Props.callback} />
        </Stack>
      )
    },
    {
      key: "ID",
      title: "ID",
      dataIndex: "ID",
      align: 'center',
      defaultSortOrder: "ascend",
      sorter: (a: any, b: any) => a.ID - b.ID,
    },
    {
      key: "Nombre",
      title: "Nombre",
      dataIndex: "Nombre",
      align: 'center',
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
      align: 'center',
      sorter: (a: any, b: any) => a.Ataque - b.Ataque,
    },
    {
      key: "Daño",
      title: "Daño",
      dataIndex: "Danho",
      align: 'center',
      sorter: CalcularDañoMax,
    },
    {
      key: "Tipo",
      title: "Tipo",
      dataIndex: "Tipo",
      align: 'center',
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
      align: 'center',
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
      align: 'center',
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
      align: 'center',
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
      align: 'center',
      render: (imageUrl: any) => (
        <div>
          <UsarImagen imageUrl={imageUrl} />
        </div>
      ),
    },

  ];
  const tableStyle = {
    margin: 'auto',
    width: 'fit-content'
  };
  return (
    <div>
      <>
        <Table
          columns={columns}
          dataSource={Props.Items}
          style={tableStyle}
        />
      </>
    </div>
  );
}
/* eslint-enable */