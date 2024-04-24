import { Tag } from "antd";
import * as React from "react";

export interface carParaTablaProps {
  car: string;
}
export const CarFiltro = (): { text: string; value: string }[] => [
  {
    text: "Fuerza",
    value: "Fuerza",
  },
  {
    text: "Destreza",
    value: "Destreza",
  },
  {
    text: "Constitución",
    value: "Constitución",
  },
  {
    text: "Inteligencia",
    value: "Inteligencia",
  },
  {
    text: "Sabiduria",
    value: "Sabiduria",
  },
  {
    text: "Carisma",
    value: "Carisma",
  },
];

export default function ArmaCar(Props: carParaTablaProps): JSX.Element {
  let color = 'black';
  let txtcolor = 'white';
  switch (Props.car) {
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
      <Tag style={{ color: txtcolor, backgroundColor: color, fontWeight: "bold" }} key={Props.car}>
        {Props.car.toUpperCase()}
      </Tag>
    </>
  );
}
/* eslint-enable */