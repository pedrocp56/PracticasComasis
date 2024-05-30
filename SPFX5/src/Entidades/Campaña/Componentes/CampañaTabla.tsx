/* eslint-disable @typescript-eslint/no-explicit-any*/
import { SearchOutlined } from "@ant-design/icons";
import { Table, TableColumnsType } from "antd";
import * as React from "react";

import { Stack } from "@fluentui/react";
import FiltroTexto from "../../Generales/FiltroTexto";
import { CampañaItem } from "../CampañaItem";
import UsarFecha from "../../Generales/OperacionesFecha";
import CampañaBotonEditar from "./BotonEditar";
import CampañaBotonEliminar from "./BotonEliminar";
import { UsarImagen } from "../../Generales/UsarImagen";
import { MostrarTitulo } from "../../Generales/Mostrar";
import CampañaBotonInfo from "./BotonInfo";
import { PersonajeLista } from "../../Personaje/PersonajeLista";
import { useEffect } from "react";
import { MostrarPersonajes } from "../../Personaje/Componentes/MostrarPersonajes";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";

export interface ICampañaWebpartProps {
    Items: CampañaItem[];
    listaPer?: PersonajeLista;
    callback: () => Promise<void>;
}

export default function CampañaWebpart(
    Props: ICampañaWebpartProps
): JSX.Element {
    let columns: TableColumnsType<CampañaItem> = [
        {
            key: "#",
            title: "#",
            dataIndex: "#",
            align: "center",
            render: (text: string, record: CampañaItem) => (
                <Stack horizontal tokens={{ childrenGap: 5 }}>
                    <CampañaBotonInfo info={record} titulo={"Campaña"} />
                    <CampañaBotonEliminar item={record} callback={Props.callback} />
                    <CampañaBotonEditar item={record} callback={Props.callback} />
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
            onFilter: (value: any, record: CampañaItem) =>
                record.Nombre.toLowerCase().indexOf((value as string).toLowerCase()) !==
                -1,
        },
        {
            key: "Descripcion",
            title: "Descripcion",
            dataIndex: "Descripcion",
            align: "center",
        },
        {
            key: "Fecha",
            title: "Fecha proxima sesión",
            dataIndex: "Fecha",
            align: "center",
            render: (text: string, record: CampañaItem) => (
                <div>
                    <UsarFecha fecha={record.Fecha} />
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
        {
            key: "Master",
            title: "Master",
            dataIndex: "Master",
            align: "center",
            render: (Master: any) => (
                <div>
                    <MostrarTitulo item={Master} texto={"Master"} />
                </div>
            ),
        },
        {
            key: "Personajes",
            title: "Personajes",
            dataIndex: "Personajes",
            align: "center",
            render: (text: string, record: CampañaItem) => (
                <div>
                    <MostrarPersonajes campañaID={record.ID} listaPer={Props?.listaPer} />
                </div>
            ),
        }


    ];

    useEffect((): void => {
        if (!Props.listaPer) {
            columns = columns.filter(column => column.key !== "Personajes");
        }
    }, []);
    
    const tableStyle = {
        margin: "auto",
        width: "1100px",
      };

    return (
        <div>
            <>
                <Table className={commonStyles.tabla}
                    columns={columns} dataSource={Props.Items}
                    style={tableStyle} />
            </>
        </div>
    );
}
/* eslint-enable */
