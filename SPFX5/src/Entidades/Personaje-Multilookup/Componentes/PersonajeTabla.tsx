/* eslint-disable @typescript-eslint/no-explicit-any*/
import { SearchOutlined } from "@ant-design/icons";
import { Table, TableColumnsType } from "antd";
import * as React from "react";

import { Stack } from "@fluentui/react";
import { useEffect } from "react";
import FiltroTexto from "../../Generales/FiltroTexto";
import MostrarTitulo from "../../Generales/Mostrar";
import UsarImagen from "../../Generales/UsarImagen";
import { PersonajeItem } from "../PersonajeItem";
import PersonajeBotonArmas from "./BotonArmas";
import PersonajeBotonCar from "./BotonCar";
import PersonajeBotonEliminar from "./BotonEliminar";
import PersonajeBotonEditar from "./PersonajeEditar";

export interface IPersonajeWebpartProps {
  Items: PersonajeItem[];
  callback: () => Promise<void>;
}

export default function PersonajeWebpart(
  Props: IPersonajeWebpartProps
): JSX.Element {
  //para que solo muestre cuando es false no es necesario aqui
  const [cargando, setCargando] = React.useState(true);

  useEffect((): void => {
    setCargando(false);
    console.log("AAAAAAAAAAAAAAAAAAAA");
  }, []);


  const columns: TableColumnsType<PersonajeItem> = [
    {
      key: "#",
      title: "#",
      dataIndex: "#",
      align: "center",
      render: (text: string, record: PersonajeItem) => (
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <PersonajeBotonEliminar item={record} callback={Props.callback} />
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
        record.UsuarioNombre.toLowerCase().indexOf((value as string).toLowerCase()) !==
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
      render: (text: string, record: PersonajeItem) => (
        <MostrarTitulo item={record.Campaña} texto={"campaña"}/>
      ),
      filterIcon: (filtered: boolean) => (
        <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
      ),
      onFilter: (value: any, record: PersonajeItem) => {
        const campañaTitle = record.Campaña?.Title || "";
        return campañaTitle.toLowerCase().indexOf((value as string).toLowerCase()) !== -1;
      }
    },
    {
      key: "Armas",
      title: "Armas",
      dataIndex: "Armas",
      align: "center",
      render: (text: string, record: PersonajeItem) => (
        <PersonajeBotonArmas titulo="Armas" info={record} />
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
