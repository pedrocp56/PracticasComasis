/* eslint-disable @typescript-eslint/no-explicit-any*/
import * as React from "react";
import { Image } from 'antd';

export const UsarImagen: React.FC<{ imageUrl: any }> = ({ imageUrl }) => {
    if (!imageUrl?.Url) {
        return <div>Sin imagen</div>;
    }
    return (
        <Image src={imageUrl.Url} style={{ width: 'auto', height: '75px' }} />
    );
};
export const UsarUrl: React.FC<{ imageUrl: any }> = ({ imageUrl }) => {
    if (!imageUrl) {
        return <div>Sin imagen</div>;
    }
    return (
        <Image src={imageUrl} style={{ width: 'auto', height: '75px' }} />
    );
};

export const UsarImagenArma: React.FC<{ imageUrl: any }> = ({ imageUrl }) => {
    if (!imageUrl) {
        return (
            <Image
                src={"https://gamepedia.cursecdn.com/hon_gamepedia/8/8a/Icon_Disarm.png"}
                title="Desarmado"
                style={{ width: 'auto', height: '75px' }}
            />
        );
    }
    return (
        <Image src={imageUrl.Url} style={{ width: 'auto', height: '75px' }} />
    );
};

/* eslint-enable */


