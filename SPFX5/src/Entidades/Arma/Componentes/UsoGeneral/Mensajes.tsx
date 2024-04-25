import { message } from "antd";

const [messageApi] = message.useMessage();

export const success = (content: string): void => {
    messageApi.open({
        type: 'success',
        content: content,
    });
};

export const error = (content: string): void => {
    messageApi.open({
        type: 'error',
        content: content,
    });
};
export const warning = (content: string): void => {
    messageApi.open({
        type: 'warning',
        content: content,
    });
};
/* eslint-enable */
