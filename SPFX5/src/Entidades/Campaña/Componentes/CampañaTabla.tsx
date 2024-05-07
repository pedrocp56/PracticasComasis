/* eslint-disable @typescript-eslint/no-explicit-any*/
import { SearchOutlined } from "@ant-design/icons";
import { Table, TableColumnsType } from "antd";
import * as React from "react";

import { Stack } from "@fluentui/react";
import FiltroTexto from "../../Generales/FiltroTexto";
import UsarImagen from "../../Generales/UsarImagen";
import { CampañaItem } from "../CampañaItem";
import UsarFecha from "../../Generales/OperacionesFecha";
import CampañaBotonEditar from "./BotonEditar";
import CampañaBotonEliminar from "./BotonEliminar";

export interface ICampañaWebpartProps {
    Items: CampañaItem[];
    callback: () => Promise<void>;
}

export default function CampañaWebpart(
    Props: ICampañaWebpartProps
): JSX.Element {
    const columns: TableColumnsType<CampañaItem> = [
        {
            key: "#",
            title: "#",
            dataIndex: "#",
            align: "center",
            render: (text: string, record: CampañaItem) => (
                <Stack horizontal tokens={{ childrenGap: 5 }}>
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
