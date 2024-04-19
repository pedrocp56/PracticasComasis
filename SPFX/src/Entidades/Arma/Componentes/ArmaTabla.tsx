import * as React from "react";
import { Table, Tag } from "antd";
import { ArmaItem } from "../ArmaItem";

export interface IArmaWebpartProps {
  Items: ArmaItem[];
}

export default function ArmaWebpart(
  Props: IArmaWebpartProps
): JSX.Element {
  const columns = [
    {
      key: "ID",
      title: "ID",
      dataIndex: "ID"
    },
    {
      key: "Nombre",
      title: "Nombre",
      dataIndex: "Nombre",
    },
    {
      key: "Ataque",
      title: "Ataque",
      dataIndex: "Ataque",
    },
    {
      key: "Daño",
      title: "Daño",
      dataIndex: "Daño",
    },
    {
      key: "Tipo",
      title: "Tipo",
      dataIndex: "Tipo",
      render: (_: any, item: any) => {
        return (
          item.Tipo.map((tipo: string) => {
            let color = 'black';
            let txtcolor = 'white';
            switch (tipo) {
              case "Contundente":
                color = '#A79277';
                txtcolor = '#FFF2E1';
                break;
              case "Cortante":
                color = '#B4B4B8';
                txtcolor = '#F2EFE5';
                break;
              case "Frío":
                color = '#52D3D8';
                txtcolor = 'WHITE';
                break;
              case "Fuego":
                color = '#750E21';
                txtcolor = '#E3651D';
                break;
              case "Fuerza":
                color = '#990000';
                txtcolor = '#FEB139';
                break;
              case "Necrótico":
                color = '#31304D';
                txtcolor = '#BB9CC0';
                break;
              case "Perforante":
                color = '#D71313';
                txtcolor = 'WHITE';
                break;
              case "Psíquico":
                color = '#BDA1D7';
                txtcolor = '#FFCACC';
                break;
              case "Radiante":
                color = '#FFF9C9';
                txtcolor = '#FFB805';
                break;
              case "Relámpago":
                color = '#FFB200';
                txtcolor = '#FFFF87';
                break;
              case "Trueno":
                color = '#293462';
                txtcolor = '#F7D716';;
                break;
              case "Veneno":
                color = '#874CCC';
                txtcolor = '#FF6FB5';
                break;
              default:
                color = 'White';
                txtcolor = 'White';
                break;
            }
            return (
              <>
                <Tag style={{ color: txtcolor, backgroundColor: color }} key={tipo}>
                  {tipo.toUpperCase()}
                </Tag>
              </>
            );
          }
          )
        );
      },
    },
    {
      key: "Arrojadiza",
      title: "Arrojadiza",
      dataIndex: "Arrojadiza",
      render: (arr: boolean) => {
        let txt = "No se";
        let color = 'White';
        let txtcolor = 'white';
        switch (arr) {
          case true:
            txt = "Si";
            color = 'White';
            txtcolor = 'Black';
            break;
          case false:
            txt = "No";
            color = 'Black';
            txtcolor = 'White';
            break;
          case null:
            txt = "No";
            color = 'Black';
            txtcolor = 'White';
            break;
          default:
            txt = "No se";
            color = 'White';
            txtcolor = 'White';
            break;
        }
        return (
          <>
            <Tag style={{ color: txtcolor, backgroundColor: color }}key={null}>
              {txt.toUpperCase()}
            </Tag>
          </>
        );
      }
    },
    {
      key: "Car",
      title: "Car",
      dataIndex: "Car",
      render: (car: string) => {

        let color = 'black';
        let txtcolor = 'white';
        switch (car) {
          case "Fuerza":
            color = '#FFE9A7';
            txtcolor = '#F59393';
            break;
          case "Destreza":
            color = '#A0DBFF';
            txtcolor = '#0386D7';
            break;
          case "Constitución":
            color = '#FFEFEA';
            txtcolor = '#CB6D51';
            break;
          case "Inteligencia":
            color = '#FFFEFE';
            txtcolor = '#A0DBFF';
            break;
          case "Sabiduria":
            color = '#BBF7E0';
            txtcolor = '#00A86B';
            break;
          case "Carisma":
            color = '#FECCD4';
            txtcolor = '#FD93A4';
            break;
          default:
            color = 'White';
            txtcolor = 'White';
            break;
        }
        return (
          <>
            <Tag style={{ color: txtcolor, backgroundColor: color }} key={car}>
              {car.toUpperCase()}
            </Tag>
          </>
        );
      }
    },
    {
      key: "Caracteristicas",
      title: "Caracteristicas",
      dataIndex: "Caracteristicas",
      render: (text: string) => (
        <span>{text ? text.split('\n').map((line, index) => <span key={index}>{line}<br /></span>) : null}</span>
      ),
    },    
    {
      key: "Foto",
      title: "Foto",
      dataIndex: "Foto"
    },
  ];

  return <Table dataSource={Props.Items} columns={columns} />;
}
