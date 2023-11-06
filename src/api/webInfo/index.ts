import { api } from "..";

export const getWebInfo = async () => {
    return api.get('/api/webInfo')
};

