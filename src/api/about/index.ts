import { api } from "..";

export const getAboutInfo = async () => {
    return api.get('/api/about')
};