/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-floating-promises*/
import { SearchOutlined } from "@ant-design/icons";
import { IconButton, Spinner, Stack } from "@fluentui/react";
import { Modal, Table, TableColumnsType } from "antd";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import FiltroTexto from "../../Generales/FiltroTexto";
import { UsarImagen } from "../../Generales/UsarImagen";
import { ArmaFotoItem } from "../ArmaFotoItem";
import { ArmaItem } from "../../Arma/ArmaItem";
import { ArmaFotoLista } from "../ArmaFotoLista";

interface IArmaFotoFormProps {
  item: ArmaItem;
  callback: (itemEdit: ArmaItem) => Promise<void>;
  isVisible: boolean;
  cerrar: () => void;
}

export default function ArmaFotoFormProps(
  props: IArmaFotoFormProps
): JSX.Element {
  const [guardando, setGuardando] = useState(false);
  const [itemEdit, setItemEdit] = useState(props.item);

  const [fotos, setFotos] = useState<ArmaFotoItem[]>([]);
  const FotosL = useRef<ArmaFotoLista>(null);

  const consultaInicial = async (): Promise<void> => {
    FotosL.current = new ArmaFotoLista(props.item.Lista.web, props.item.Lista.Context);
    const consultaFotos = await FotosL.current.CargarTodos();
    await setFotos(consultaFotos);
  }

  useEffect(() => {
    consultaInicial();
  }, []);


  const handleOk = async (): Promise<void> => {
    setGuardando(true);
    setGuardando(false);
    props.item.ItemEdit = itemEdit;
    await props.callback(props.item.ItemEdit);
    await props.cerrar();
  };

  const handleSeleccionar = (item: ArmaFotoItem): void => {
    if (itemEdit.Foto?.Description === item.ID) {
      setItemEdit({ ...itemEdit, Foto: null } as ArmaItem);
    } else {
      const foto = item.Url.split(" ").join("%20");
      setItemEdit({ ...itemEdit, Foto: { Description: item.ID, Url: foto } } as ArmaItem);
    }
  };

  const columns: TableColumnsType<ArmaFotoItem> = [
    {
      key: "#",
      title: "#",
      dataIndex: "#",
      align: "center",
      render: (text: string, record: ArmaFotoItem) => (
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <IconButton
            onClick={() => {
              handleSeleccionar(record)
            }}
            iconProps={{ iconName: Number(itemEdit.Foto?.Description) === record.ID ? "HeartFill" : "Heart" }}
            title="Seleccionar"
          />
        </Stack>
      ),
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
      onFilter: (value: any, record: ArmaFotoItem) =>
        record.Nombre.toLowerCase().indexOf((value as string).toLowerCase()) !==
        -1,
    },
    {
      key: "Foto",
      title: "Foto",
      dataIndex: "Url",
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

      <Modal
        title="Armas"
        open={props.isVisible}
        onOk={handleOk}
        onCancel={props.cerrar}
        closable={false}
      >
        <Stack hidden={!guardando}>
          <Spinner label="Guardando..." />
        </Stack>
        <Stack hidden={guardando}>
          <Table
            columns={columns}
            dataSource={fotos}
            style={tableStyle}
          />
        </Stack>
      </Modal>
    </>
  );
}