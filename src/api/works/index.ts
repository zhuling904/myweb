import { api } from "..";

export const getWorks = async () => {
  return api.get("/api/works");
};
