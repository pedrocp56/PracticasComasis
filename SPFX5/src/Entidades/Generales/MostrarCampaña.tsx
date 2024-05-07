/* eslint-disable @typescript-eslint/no-explicit-any*/
import * as React from "react";

const UsarCampaña: React.FC<{ campaña: any }> = ({ campaña }) => {
    console.log(campaña);
    
    if (!campaña) {
        return <div>Sin campaña asociada</div>;
    }
    return (
        <div>{campaña.Title}</div>
    );
};

export default UsarCampaña;
/* eslint-enable */
