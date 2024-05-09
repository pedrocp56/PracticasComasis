/* eslint-disable @typescript-eslint/no-explicit-any*/
import { SearchOutlined } from "@ant-design/icons";
import { Stack } from "@fluentui/react";
import { Table, TableColumnsType } from "antd";
import * as React from "react";
import { useEffect } from "react";
import FiltroTexto from "../../Generales/FiltroTexto";
import MostrarTitulo, { MostrarBoolean } from "../../Generales/Mostrar";
import { PersonajeArmaItem } from "../PersonajeArmaItem";
import PersonajeArmaBotonEditar from "./BotonEditar";
import PersonajeArmaBotonEliminar from "./BotonEliminar";
import { CalcularAtaque } from "../../Generales/Calculos";

export interface IPersonajeArmaWebpartProps {
  Items: PersonajeArmaItem[];
  callback: () => Promise<void>;
}

export default function PersonajeArmaWebpart(
  Props: IPersonajeArmaWebpartProps
): JSX.Element {
  //para que solo muestre cuando es false no es necesario aqui
  const [cargando, setCargando] = React.useState(true);

  useEffect((): void => {
    setCargando(false);
  }, []);


  const columns: TableColumnsType<PersonajeArmaItem> = [
    {
      key: "#",
      title: "#",
      dataIndex: "#",
      align: "center",
      render: (text: string, record: PersonajeArmaItem) => (
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <PersonajeArmaBotonEliminar item={record} callback={Props.callback} />
          <PersonajeArmaBotonEditar item={record} callback={Props.callback} />
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
      key: "Personaje",
      title: "Personaje",
      dataIndex: "Personaje",
      align: "center",
      filterDropdown: FiltroTexto,
      render: (text: string, record: PersonajeArmaItem) => (
        <MostrarTitulo item={record.Personaje} texto={"personaje"} />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value: any, record: PersonajeArmaItem) => {
        const personajeTitle = record.Personaje?.Title || "Sin personaje asociad@";
        return personajeTitle.toLowerCase().indexOf((value as string).toLowerCase()) !== -1;
      }
    },
    {
      key: "Arma",
      title: "Arma",
      dataIndex: "Arma",
      align: "center",
      filterDropdown: FiltroTexto,
      render: (text: string, record: PersonajeArmaItem) => (
        <MostrarTitulo item={record.Arma} texto={"arma"} />
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value: any, record: PersonajeArmaItem) => {
        const armaTitle = record.Arma?.Title || "Sin arma asociad@";
        return armaTitle.toLowerCase().indexOf((value as string).toLowerCase()) !== -1;
      }
    },
    {
      key: "Ataque",
      title: "Ataque",
      dataIndex: "Ataque",
      align: "center",
      filterDropdown: FiltroTexto,
      render: (text: string, record: PersonajeArmaItem) => (
        <CalcularAtaque item={record} />
      ),
      sorter: (a: any, b: any) => a.Ataque - b.Ataque,
    },
    {
      key: "Competencia",
      title: "Competencia",
      dataIndex: "Competencia",
      align: 'center',
      render: (comp: boolean) => (
        <MostrarBoolean bool={comp} />
      )
    },
    {
      key: "Bonificacion",
      title: "Bonificación",
      dataIndex: "Bonificacion",
      align: 'center',
    },
  ];
  const tableStyle = {
    margin: "auto",
    width: "fit-content",
  };
  return (
    <>
      {!cargando
        &&
        <div>
          <Table columns={columns} dataSource={Props.Items} style={tableStyle} />
        </div>
      }
    </>
  );
}
/* eslint-enable */
