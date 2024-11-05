import { api } from "./api";

export interface UserType {
  login: string;
  avatar_url: string;
  id: number;
  bio: string | null;
  name: string;
  location: string | null;
  testimony: string;
}

export type UsersDataType = Array<UserType>;

export interface ContentDataType {
  images: string[];
  audios: string[];
  videos: string[];
  docs: string[];
}

const baseApiUrl = import.meta.env.VITE_APP_BASEAPIURL;

export const getContent = async () => {
  return await api<ContentDataType>(baseApiUrl + "/api/content");
};

export const getGithubUsersData = async () => {
  return await api<UsersDataType>(baseApiUrl + "/api/github-users");
};

export const getData = async (route: string) => {
  return await api<ContentDataType & UsersDataType>(baseApiUrl + route);
};
