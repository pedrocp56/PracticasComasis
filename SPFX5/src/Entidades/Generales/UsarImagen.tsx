/* eslint-disable @typescript-eslint/no-explicit-any*/
import * as React from "react";
import { Image } from 'antd';

const UsarImagen: React.FC<{ imageUrl: any }> = ({ imageUrl }) => {
    if (!imageUrl) {
        return <div>Sin imagen</div>;
    }
    return (
        <Image src={imageUrl.Url} />
    );
};

export default UsarImagen;
/* eslint-enable */


