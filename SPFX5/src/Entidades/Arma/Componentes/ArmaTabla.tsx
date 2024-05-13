/* eslint-disable @typescript-eslint/no-explicit-any*/
import { SearchOutlined } from "@ant-design/icons";
import { Table, TableColumnsType } from "antd";
import * as React from "react";

import { Stack } from "@fluentui/react";
import { useEffect } from "react";
import { CalcularDañoMax } from "../../Generales/Calculos";
import FiltroTexto from "../../Generales/FiltroTexto";
import { MostrarBoolean, MostrarMultiline } from "../../Generales/Mostrar";
import UsarImagen from "../../Generales/UsarImagen";
import { ArmaItem } from "../ArmaItem";
import ArmaCar, { CarFiltro } from "./ArmaCar";
import ArmaTipo from "./ArmaTipo";
import ArmaBotonEditar from "./BotonEditar";
import ArmaBotonEliminar from "./BotonEliminar";

export interface IArmaWebpartProps {
  Items: ArmaItem[];
  callback: () => Promise<void>;
}

export default function ArmaWebpart(Props: IArmaWebpartProps): JSX.Element {
  //para que solo muestre cuando es false no es necesario aqui
  const [cargando, setCargando] = React.useState(true);

  useEffect((): void => {
    setCargando(false);
  }, []);

  const columns: TableColumnsType<ArmaItem> = [
    {
      key: "#",
      title: "#",
      dataIndex: "#",
      align: "center",
      render: (text: string, record: ArmaItem) => (
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <ArmaBotonEliminar item={record} callback={Props.callback} />
          <ArmaBotonEditar item={record} callback={Props.callback} />
        </Stack>
      ),
    },
    {
      key: "ID",
      title: "ID",
      dataIndex: "ID",
      align: "center",
      defaultSortOrder: "ascend",
      sorter: (a: any, b: any) => a.ID - b.ID,
    },
    {
      key: "Nombre",
      title: "Nombre",
      dataIndex: "Nombre",
      align: "center",
      filterDropdown: FiltroTexto,
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value: any, record: ArmaItem) =>
        record.Nombre.toLowerCase().indexOf((value as string).toLowerCase()) !==
        -1,
    },
    {
      key: "Ataque",
      title: "Ataque",
      dataIndex: "Ataque",
      align: "center",
      sorter: (a: any, b: any) => a.Ataque - b.Ataque,
    },
    {
      key: "Daño",
      title: "Daño",
      dataIndex: "Daño",
      align: "center",
      sorter: CalcularDañoMax,
    },
    {
      key: "Tipo",
      title: "Tipo",
      dataIndex: "Tipo",
      align: "center",
      onFilter: (value: string, record) => record.Car.indexOf(value) === 0,
      render: (tipo: string[]) => {
        return <ArmaTipo tipo={tipo} />;
      },
    },
    {
      key: "Arrojadiza",
      title: "Arrojadiza",
      dataIndex: "Arrojadiza",
      align: "center",
      render: (arr: boolean) => {
        return <MostrarBoolean bool={arr} />;
      },
    },
    {
      key: "Car",
      title: "Car",
      dataIndex: "Car",
      align: "center",
      filters: CarFiltro(),
      onFilter: (value: string, record) => record.Car.indexOf(value) === 0,
      render: (car: string) => {
        return <ArmaCar car={car} />;
      },
    },
    {
      key: "Caracteristicas",
      title: "Caracteristicas",
      dataIndex: "Caracteristicas",
      align: "center",
      render: (text: string) => (
        <div>
          <MostrarMultiline titulo="Caracteristicas" text={text} />
        </div>
      ),
    },
    {
      key: "Foto",
      title: "Foto",
      dataIndex: "Foto",
      align: "center",
      render: (imageUrl: any) => (
        <div>
          <UsarImagen imageUrl={imageUrl} />
        </div>
      ),
    },
  ];
  const tableStyle = {
    margin: "auto",
    width: "fit-content",
  };
  return (
    <>
      {!cargando && (
        <div>
          <Table
            columns={columns}
            dataSource={Props.Items}
            style={tableStyle}
          />
        </div>
      )}
    </>
  );
}
/* eslint-enable */
