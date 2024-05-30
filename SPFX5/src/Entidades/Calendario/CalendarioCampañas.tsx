/* eslint-disable @typescript-eslint/no-explicit-any, dot-notation*/
import { WebPartContext } from "@microsoft/sp-webpart-base";
import * as moment from "moment";
import * as React from "react";
import { useMemo, useRef, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/sass/styles.scss";
import CustomToolbar from "./CustomToolbar";
import { EventoBigCalendar } from "./EventoBigCalendar";
import EventoInfo from "./EventoModal"; // Asegúrate de que la ruta es correcta
import commonStyles from "../../webparts/gestorPartidas/components/GestorPartidas.module.scss";


require("globalize/lib/cultures/globalize.culture.es");
require("globalize/lib/cultures/globalize.culture.en-US");
const mLocalizer = momentLocalizer(moment);

const ColoredDateCellWrapper = ({ children = null }): any =>
    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: "lightblue",
        },
    });
const lang = {
    es: {
        week: "Semana",
        work_week: "Semana de trabajo",
        day: "Día",
        month: "Mes",
        previous: "Anterior",
        next: "Siguiente",
        today: "Hoy",
        agenda: "Agenda",
        showMore: (total: number) => `+${total} más`,
    },
    "en-US": {
        week: "Week",
        work_week: "Work week",
        day: "Day",
        month: "Month",
        previous: "Previous",
        next: "Next",
        today: "Today",
        agenda: "Agenda",
        showMore: (total: number) => `+${total} more`,
    },
};

export interface MiCalendarioProps {
    Context: WebPartContext;
    eventos: EventoBigCalendar[];
}

export default function MiCalendarioWP(props: MiCalendarioProps): JSX.Element {
    const [itemVer, setItemVer] = useState<EventoBigCalendar>(null);
    const UICultureName = useRef<string>(
        props.Context.pageContext.cultureInfo.currentUICultureName
    );

    const { components, defaultDate } = useMemo(
        () => ({
            components: {
                timeSlotWrapper: ColoredDateCellWrapper,
                toolbar: CustomToolbar,
            },
            defaultDate: new Date(),
        }),
        []
    );

    const handleSelectEvent = (event: EventoBigCalendar): void => {
        setItemVer(event);
    };

    moment.locale("ko", {
        week: {
            dow: 1,
        },
    });

    return (
        <div className={commonStyles.calendarioFondo}>
            <Calendar
                components={components}
                defaultDate={defaultDate}
                events={props.eventos}
                localizer={mLocalizer}
                culture={UICultureName.current}
                showMultiDayTimes
                step={60}
                className={commonStyles.calendario}
                style={{ height: "480px", width: "550px" }}
                views={["month"]}
                startAccessor="start"
                endAccessor="end"
                messages={
                    UICultureName.current === "es-ES" ? lang["es"] : lang["en-US"]
                }
                popup
                showAllEvents={false}
                onSelectEvent={handleSelectEvent}
                eventPropGetter={(event, start, end, isSelected) => ({
                    style: {
                        backgroundColor: event.fondo,
                    },
                })}
            />

            {itemVer && (
                <EventoInfo
                    info={itemVer}
                    titulo={"Campaña"}
                    onClose={() => setItemVer(null)}
                />
            )}
        </div>
    );
}

/*eslint-enable */