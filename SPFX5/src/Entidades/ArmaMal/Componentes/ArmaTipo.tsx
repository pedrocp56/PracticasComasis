import { Tag } from "antd";
import * as React from "react";

export interface tipoParaTablaProps {
  tipo: string[];
}

export default function TipoCar(Props: tipoParaTablaProps): JSX.Element {
  let color = "black";
  let txtcolor = "white";
  const tags = Props.tipo?.map((t: string) => {
    switch (t) {
      case "Contundente":
        color = "#A79277";
        txtcolor = "#FFF2E1";
        break;
      case "Cortante":
        color = "#B4B4B8";
        txtcolor = "#F2EFE5";
        break;
      case "Frío":
        color = "#52D3D8";
        txtcolor = "WHITE";
        break;
      case "Fuego":
        color = "#750E21";
        txtcolor = "#E3651D";
        break;
      case "Fuerza":
        color = "#990000";
        txtcolor = "#FEB139";
        break;
      case "Necrótico":
        color = "#31304D";
        txtcolor = "#BB9CC0";
        break;
      case "Perforante":
        color = "#D71313";
        txtcolor = "WHITE";
        break;
      case "Psíquico":
        color = "#BDA1D7";
        txtcolor = "#FFCACC";
        break;
      case "Radiante":
        color = "#FFF9C9";
        txtcolor = "#FFB805";
        break;
      case "Relámpago":
        color = "#FFB200";
        txtcolor = "#FFFF87";
        break;
      case "Trueno":
        color = "#293462";
        txtcolor = "#F7D716";
        break;
      case "Veneno":
        color = "#874CCC";
        txtcolor = "#FF6FB5";
        break;
      default:
        color = "White";
        txtcolor = "White";
        break;
    }
    return (
        <Tag
          style={{ color: txtcolor, backgroundColor: color, fontWeight:"bold", marginTop:"5px"}}
          key={t}
        >
          {t.toUpperCase()}
        </Tag>
      );
    });
  
    return (
      <>
        {tags}
      </>
    );
  }
  /* eslint-enable */