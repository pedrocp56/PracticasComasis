
import * as React from "react";
import { useState } from "react";
import ArmaFotoFormProps from "../../ArmaFotos/Componentes/ArmaFotoTabla";
import { ArmaItem } from "../ArmaItem";
import commonStyles from "../../../webparts/gestorPartidas/components/GestorPartidas.module.scss";


export interface IArmaBotonFotoProps {
  item: ArmaItem;
  callback: (itemEdit: ArmaItem) => Promise<void>;
}
export default function ArmaBotonFoto(
  props: IArmaBotonFotoProps
): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (): void => {
    setIsModalOpen(true);
  };

  const cerrar = async (): Promise<void> => {
    setIsModalOpen(false);
  };
  const guardar = async (itemEdit: ArmaItem): Promise<void> => {
    props.item.ItemEdit = itemEdit;
    await props.callback(props.item.ItemEdit);
  };

  return (
    <>

      <button
        onClick={showModal}
        className={commonStyles.botonguapisimoeditar}
      >Editar</button>
      {isModalOpen &&
        <ArmaFotoFormProps
          item={props.item}
          callback={guardar}
          isVisible={isModalOpen}
          cerrar={cerrar} />
      }
    </>
  );
}
/* eslint-enable */
