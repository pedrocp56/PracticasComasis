/* eslint-disable @typescript-eslint/no-explicit-any*/
import * as React from "react";
import { Table, TableColumnsType } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { Stack } from "@fluentui/react";
import { PersonajeItem } from "../PersonajeItem";
import FiltroTexto from "../../Generales/FiltroTexto";
import UsarImagen from "../../Generales/UsarImagen";
import PersonajeBotonCar from "./BotonCar";
import PersonajeBotonEditar from "./PersonajeEditar";

export interface IPersonajeWebpartProps {
  Items: PersonajeItem[];
  callback: () => Promise<void>;
}

export default function PersonajeWebpart(
  Props: IPersonajeWebpartProps
): JSX.Element {
  const columns: TableColumnsType<PersonajeItem> = [
    {
      key: "#",
      title: "#",
      dataIndex: "#",
      align: "center",
      render: (text: string, record: PersonajeItem) => (
        <Stack horizontal tokens={{ childrenGap: 5 }}>
            <PersonajeBotonEditar item={record} callback={Props.callback} />
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
      onFilter: (value: any, record: PersonajeItem) =>
        record.Nombre.toLowerCase().indexOf((value as string).toLowerCase()) !==
        -1,
    },
    {
      key: "Usuario",
      title: "Usuario",
      dataIndex: "UsuarioNombre",
      align: "center",
      filterDropdown: FiltroTexto,
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value: any, record: PersonajeItem) =>
        record.Nombre.toLowerCase().indexOf((value as string).toLowerCase()) !==
        -1,
    },
    {
      key: "Caracteristicas",
      title: "Características",
      dataIndex: "Características",
      align: "center",
      render: (text: string, record: PersonajeItem) => (
        <PersonajeBotonCar titulo="Características" info={record} />
      ),
    },
    {
      key: "Campañaa",
      title: "Campaña",
      dataIndex: "Campaña",
      align: "center",
      filterDropdown: FiltroTexto,
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value: any, record: PersonajeItem) =>
        record.Campaña.toLowerCase().indexOf(
          (value as string).toLowerCase()
        ) !== -1,
    },
    {
      key: "Armas",
      title: "Armas",
      dataIndex: "Armas",
      align: "center",
      render: (text: string, record: PersonajeItem) => (
        <Stack horizontal tokens={{ childrenGap: 5 }}></Stack>
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
    <div>
      <>
        <Table columns={columns} dataSource={Props.Items} style={tableStyle} />
      </>
    </div>
  );
}
/* eslint-enable */
