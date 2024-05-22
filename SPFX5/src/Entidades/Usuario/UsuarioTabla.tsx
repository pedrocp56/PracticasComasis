/* eslint-disable @typescript-eslint/no-floating-promises,@typescript-eslint/no-explicit-any, @typescript-eslint/explicit-function-return-type*/

import { WebPartContext } from "@microsoft/sp-webpart-base";
import { DefaultButton, Persona, Stack } from "office-ui-fabric-react";
import * as React from "react";
import { useState } from "react";

export interface IUsuarioTablaProps {
    context: WebPartContext;
    MCampaña: () => void;
    MCPersonaje: () => void;
}

export default function UsuarioTabla(
    Props: IUsuarioTablaProps
): JSX.Element {
    const [MostrarPersonajes, setMostrarPersonajes] = useState(false);
    const [MostrarCampañas, setMostrarCampañas] = useState(false);

    const mostrarCampaña = (): void => {
        setMostrarCampañas(true);
        setMostrarPersonajes(false);
        Props.MCampaña();
    };

    const mostrarPersonaje = (): void => {
        setMostrarCampañas(false);
        setMostrarPersonajes(true);
        Props.MCPersonaje();
    };

    return (
        <>
            <Stack horizontalAlign="center" verticalAlign="center" tokens={{ childrenGap: 25 }} styles={{ root: { flexGrow: 1 , } }}>
                <Persona
                    imageShouldFadeIn={false}
                    imageUrl={`/_layouts/15/userphoto.aspx?size=L&username=${Props.context.pageContext.legacyPageContext.userEmail}`}
                    text={Props.context.pageContext.legacyPageContext.userDisplayName}
                />
                <Stack horizontal tokens={{ childrenGap: 5 }}>
                    <DefaultButton
                        id={MostrarCampañas ? "botonUserPulsado" : "botonUserSinPulsar"}
                        onClick={mostrarCampaña}
                        text="Campaña"
                    />
                    <DefaultButton
                        id={MostrarPersonajes ? "botonUserPulsado" : "botonUserSinPulsar"}
                        onClick={mostrarPersonaje}
                        text="Personajes"
                    />
                </Stack>
            </Stack>
        </>
    );
}

/* eslint-enable */
