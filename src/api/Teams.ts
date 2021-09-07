import axios from "axios";
import UserResponse from "./Users";

export interface TeamsDto {
  id: number;
  name: string;
}

export type TeamsResponse = TeamsDto[];

export async function apiListTeams(): Promise<TeamsResponse> {
  const res = await axios.get<TeamsResponse>("/teams");
  return res.data;
}

export function apiDeleteTeam(id: number) {
  return axios.delete(`/teams/${id}`);
}

export async function apiCreateTeam(name: string) {
  return await axios.post("/teams/create", { name });
}

export async function apiListUsersInTeam(id: number) {
  const res = await axios.get<UserResponse[]>(`/team/${id}/users`);
  return res.data;
}

export function apiAddUserToTeam(teamId: number, userId: number) {
  return axios.post(`/teams/${teamId}/user/${userId}`);
}
