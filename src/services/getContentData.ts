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

export const getContent = async () => {
  return await api<ContentDataType>("/api/content", {
    method: "GET",
    mode: "no-cors",
  });
};

export const getGithubUsersData = async () => {
  return await api<UsersDataType>("/api/github-users", {
    mode: "no-cors",
  });
};

export const getData = async (route: string) => {
  return await api<ContentDataType & UsersDataType>(route, {
    method: "GET",
    mode: "no-cors",
  });
};
