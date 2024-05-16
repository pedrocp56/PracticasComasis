/* eslint-disable @typescript-eslint/no-explicit-any*/

import * as React from "react";
import { useEffect } from "react";
import { Persona, Stack } from "office-ui-fabric-react";
import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface IUsuarioWebpartProps {
    context: WebPartContext;
}

export default function UsuarioWebpart(
    Props: IUsuarioWebpartProps
): JSX.Element {
    //para que solo muestre cuando es false no es necesario aqui
    const [cargando, setCargando] = React.useState(true);
    useEffect((): void => {
        setCargando(false);
        console.log("AAAAAAAAAAAAAAA");
        
    }, []);
    return (
        <>
            {!cargando
                &&
                /*
                <div>
                    <MostrarPerfil />
                    <BotonCampañas />
                    <BotonPersonajes />
                </div>
                */
                <Stack horizontalAlign="center" tokens={{ childrenGap: 25 }}>
                    <Persona
                        imageShouldFadeIn={false}
                        imageUrl={`/_layouts/15/userphoto.aspx?size=L&username=${Props.context.pageContext.legacyPageContext.userEmail}`}
                        text={Props.context.pageContext.legacyPageContext.userDisplayName}
                    />
                    <Stack horizontal tokens={{ childrenGap: 5 }}>
                    <div>CAMPAÑAS</div>
                    <div>PERSONAJES</div>
                    </Stack>
                </Stack>
            }
        </>
    );
}
/* eslint-enable */
