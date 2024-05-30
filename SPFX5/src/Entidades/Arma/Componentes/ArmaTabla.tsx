/* eslint-disable @typescript-eslint/no-explicit-any*/

import { SearchOutlined } from "@ant-design/icons";
import { Stack } from "@fluentui/react";
import { Table, TableColumnsType } from "antd";
import * as React from "react";
import { useEffect } from "react";
import { SortDañoMax } from "../../Generales/Calculos";
import FiltroTexto from "../../Generales/FiltroTexto";
import { MostrarBoolean, MostrarMultiline } from "../../Generales/Mostrar";
import { ArmaItem } from "../ArmaItem";
import ArmaCar, { CarFiltro } from "./ArmaCar";
import ArmaTipo from "./ArmaTipo";
import ArmaBotonEditar from "./BotonEditar";
import ArmaBotonEliminar from "./BotonEliminar";
import ArmaBotonInfo from "./BotonInfo";
import { UsarImagenArma } from "../../Generales/UsarImagen";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";

export interface IArmaWebpartProps {
  Items: ArmaItem[];
  callback?: () => Promise<void>;
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
      render: (_text: string, record: ArmaItem) => (
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <ArmaBotonInfo titulo="Arma" info={record} />
          {Props.callback &&
            <ArmaBotonEliminar item={record} callback={Props.callback} />
          }
          {Props.callback &&
            <ArmaBotonEditar item={record} callback={Props.callback} />
          }
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
      dataIndex: "Danho",
      align: "center",
      sorter: SortDañoMax,
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
          <UsarImagenArma imageUrl={imageUrl} />
        </div>
      ),
    },
  ];

  const tableStyle = {
    margin: "auto",
    width: "1100px",
  };

  return (
    <>
      {!cargando && (
        <div>
          <Table
            className={commonStyles.tabla}
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
