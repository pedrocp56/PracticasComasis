import { message } from "antd";

const [messageApi] = message.useMessage();

export const success = async (content: string): Promise<void> => {
    await messageApi.open({
        type: 'success',
        content: content,
    });
};

export const error = async (content: string): Promise<void> => {
    await messageApi.open({
        type: 'error',
        content: content,
    });
};

export const warning = async (content: string): Promise<void> => {
    await messageApi.open({
        type: 'warning',
        content: content,
    });
};

/* eslint-enable */
