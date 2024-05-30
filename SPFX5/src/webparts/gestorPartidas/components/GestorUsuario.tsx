/* eslint-disable @typescript-eslint/no-floating-promises*/
import { Stack } from '@fluentui/react';
import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPFI } from "@pnp/sp";
import * as React from 'react';
import { useEffect, useState } from 'react';
import MiCalendarioWP from '../../../Entidades/Calendario/CalendarioCampañas';
import { EventoBigCalendar } from '../../../Entidades/Calendario/EventoBigCalendar';
import { CampañaItem } from '../../../Entidades/Campaña/CampañaItem';
import { CampañaLista } from '../../../Entidades/Campaña/CampañaLista';
import CampañaNuevoBoton from '../../../Entidades/Campaña/Componentes/BotonNuevo';
import CampañaTabla from '../../../Entidades/Campaña/Componentes/CampañaTabla';
import PersonajeNuevoBoton from '../../../Entidades/Personaje/Componentes/BotonNuevo';
import PersonajeTabla from '../../../Entidades/Personaje/Componentes/PersonajeTabla';
import { PersonajeItem } from '../../../Entidades/Personaje/PersonajeItem';
import { PersonajeLista } from '../../../Entidades/Personaje/PersonajeLista';
import UsuarioTabla from '../../../Entidades/Usuario/UsuarioTabla';
import ArmaTabla from '../../../Entidades/Arma/Componentes/ArmaTabla';
import { ArmaItem } from '../../../Entidades/Arma/ArmaItem';
import { ArmaLista } from '../../../Entidades/Arma/ArmaLista';


export interface IUsuarioCompWebpartProps {
  SP: SPFI;
  WebPartContext: WebPartContext;
}

export default function GestorUsuarioCompWebpart(
  props: IUsuarioCompWebpartProps
): JSX.Element {
  const [Campañas, setCampañas] = React.useState<CampañaItem[]>([]);
  const CampañaL = React.useRef<CampañaLista>(null);
  const [Personajes, setPersonajes] = React.useState<PersonajeItem[]>([]);
  const PersonajeL = React.useRef<PersonajeLista>(null);
  const [MostrarPersonajes, setMostrarPersonajes] = useState(false);
  const [MostrarCampañas, setMostrarCampañas] = useState(false);
  const [MostrarArmas, setMostrarArmas] = useState(false);
  const [eventos, setEventos] = useState<EventoBigCalendar[]>([]);
//Implementar ver arma
  const [Armas, setArmas] = React.useState<ArmaItem[]>([]);
  const ArmaL = React.useRef<ArmaLista>(null);


  const recargaDatos = async (): Promise<void> => {
    await CampañaL.current.CargarTodosMaster(props.WebPartContext.pageContext.legacyPageContext.userId).then((i) => {
      setCampañas(i);
    });
    await PersonajeL.current.CargarTodosUsuario(props.WebPartContext.pageContext.legacyPageContext.userId).then((i) => {
      setPersonajes(i);
    });
    await ArmaL.current.CargarTodos(props.WebPartContext.pageContext.legacyPageContext.userId).then((i) => {
      setArmas(i);
    });
  };
  const recargaDatosCampañaPer = async (p: PersonajeItem): Promise<CampañaItem> => {
    return await CampañaL.current.CargarID(p.Campaña.ID);
  };

  const cargarEventos = async (): Promise<void> => {
    setEventos([]);
    let eventosCamp: EventoBigCalendar[] = [];
    const eventosPer: EventoBigCalendar[] = [];
    if (Campañas !== null && Campañas !== undefined) {
      const events = Campañas.map(c => ({
        id: c.ID,
        title: c.Nombre,
        start: c.Fecha,
        end: c.Fecha,
        allDay: true,
        fondo: "#8d6a4d",
        item: c,
      }));
      eventosCamp = events;
    }

    if (Personajes) {
      const promesasPersonajes = Personajes.map(async (p) => {
        if (p.Campaña?.ID) {
          const c = await recargaDatosCampañaPer(p);
          if (c) {
            return {
              id: c.ID,
              title: c.Nombre,
              start: c.Fecha,
              end: c.Fecha,
              allDay: true,
              fondo: "#8d4d48",
              item: c,
            };
          }
        }
        return null;
      });

      const resultadosPersonajes = await Promise.all(promesasPersonajes);
      resultadosPersonajes.forEach(evento => {
        if (evento) {
          eventosPer.push(evento);
        }
      });
    }

    const todosEventos = [...eventosCamp];
    eventosPer.forEach(e => {
      if (!todosEventos.some(ev => ev.id === e.id)) {
        todosEventos.push(e);
      }
    });

    setEventos(todosEventos);
  };

  useEffect(() => {
    cargarEventos();
  }, [Personajes, Campañas])

  useEffect((): void => {
    CampañaL.current = new CampañaLista(props.SP.web, props.WebPartContext);
    PersonajeL.current = new PersonajeLista(props.SP.web, props.WebPartContext);
    ArmaL.current = new ArmaLista(props.SP.web, props.WebPartContext);
    recargaDatos();
  }, []);

  const mostrarCampaña = (): void => {
    setMostrarCampañas(true);
    setMostrarPersonajes(false);
    setMostrarArmas(false);
  };

  const mostrarPersonaje = (): void => {
    setMostrarCampañas(false);
    setMostrarPersonajes(true);
    setMostrarArmas(false);
  };
  const mostrarArma = (): void => {
    setMostrarCampañas(false);
    setMostrarPersonajes(false);
    setMostrarArmas(true);
  };

  return (
    <>
      <Stack horizontal tokens={{ childrenGap: 25 }}>
        <UsuarioTabla context={props.WebPartContext} MCampaña={mostrarCampaña} MPersonaje={mostrarPersonaje} MArma={mostrarArma}/>
        <Stack horizontalAlign="end" >
          <MiCalendarioWP Context={props.WebPartContext} eventos={eventos} />
        </Stack>
      </Stack>
      <br />
      {MostrarPersonajes && (
        <div>
          <Stack horizontalAlign="start" tokens={{ childrenGap: 25 }}>
            <PersonajeNuevoBoton lista={PersonajeL.current} callback={recargaDatos} />
            <PersonajeTabla Items={Personajes} callback={recargaDatos} />
          </Stack>
        </div>
      )}
      {MostrarCampañas && (
        <div>
          <Stack horizontalAlign="start" tokens={{ childrenGap: 25 }}>
            <CampañaNuevoBoton lista={CampañaL.current} callback={recargaDatos} />
            <CampañaTabla Items={Campañas} listaPer={PersonajeL.current} callback={recargaDatos} />
          </Stack>
        </div>
      )}
      {MostrarArmas && (
        <div>
          <Stack horizontalAlign="start" tokens={{ childrenGap: 25 }}>
            <ArmaTabla Items={Armas} />
          </Stack>
        </div>
      )}
    </>
  );
}
/* eslint-enable */
