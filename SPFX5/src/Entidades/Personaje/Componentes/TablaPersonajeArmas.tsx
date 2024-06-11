/* eslint-disable @typescript-eslint/no-explicit-any,  @typescript-eslint/no-extra-semi, @typescript-eslint/no-floating-promises*/
import { SearchOutlined } from "@ant-design/icons";
import { Stack } from "@fluentui/react";
import { Table, TableColumnsType } from "antd";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { CalcularAtaque } from "../../Generales/Calculos";
import FiltroTexto from "../../Generales/FiltroTexto";
import { MostrarBoolean, MostrarTitulo } from "../../Generales/Mostrar";
import PersonajeArmaBotonEditar from "../../PersonajeArma/Componentes/BotonEditar";
import PersonajeArmaBotonEliminar from "../../PersonajeArma/Componentes/BotonEliminar";
import { PersonajeArmaItem } from "../../PersonajeArma/PersonajeArmaItem";
import { PersonajeArmaLista } from "../../PersonajeArma/PersonajeArmaLista";
import { PersonajeItem } from "../PersonajeItem";
import PersonajeArmaNuevoBoton from "../../PersonajeArma/Componentes/BotonNuevo";

import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";


export interface IPersonajeArmasTablaProps {
  personaje: PersonajeItem;
  callback?: () => Promise<void>;
}

export default function PersonajeArmasTabla(
  Props: IPersonajeArmasTablaProps
): JSX.Element {
  const [cargando, setCargando] = React.useState(true);


  useEffect((): void => {
    setCargando(false);
  }, []);

  const [Armas, setArmas] = useState<PersonajeArmaItem[]>([]);
  const ArmasL = useRef<PersonajeArmaLista>(null);

  const consultaInicial = async (): Promise<void> => {
    ArmasL.current = new PersonajeArmaLista(Props.personaje.Lista.web, Props.personaje.Lista.Context);
    const consultaArmas = await ArmasL.current.CargarArmasDePersonaje(Props.personaje.ID);
    await setArmas(consultaArmas);
  }
  const recargaDatos = async (): Promise<void> => {
    const consultaArmas = await ArmasL.current.CargarArmasDePersonaje(Props.personaje.ID);
    await setArmas(consultaArmas);
    await Props.callback;
  };
  //no recarga si se añade una arma

  let columns: TableColumnsType<PersonajeArmaItem> = [
    ...(Props.callback ? [{
      key: "#",
      title: "#",
      dataIndex: "#",
      render: (text: string, record: PersonajeArmaItem) => (
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <PersonajeArmaBotonEliminar item={record} callback={recargaDatos} />
          <PersonajeArmaBotonEditar item={record} callback={recargaDatos} personaje={Props.personaje} />
        </Stack>
      ),
    }] : []),
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

  useEffect(() => {
    consultaInicial();
    if (Props.callback === undefined) {
      columns = columns.filter(column => column.key !== "#");
    }
  }, []);
  return (
    <>
      {!cargando &&
        <div>
          {Props.callback &&
            <PersonajeArmaNuevoBoton lista={ArmasL.current} callback={recargaDatos} personaje={Props.personaje} />
          }
          <Table
            className={commonStyles.tabla}
            columns={columns} dataSource={Armas} style={tableStyle} />
        </div>
      }
    </>
  );
}
/* eslint-enable */
