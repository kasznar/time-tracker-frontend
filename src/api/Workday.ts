import axios from "axios";

export interface WorkdayDto {
  id: number;
  type: string;
  summary: string;
}

export interface CalendarDayDto {
  calendar_day_id: number;
  date: string;
  type: string;
  workday: WorkdayDto;
}

export interface WorkdayRequest {
  user_id: number;
  year: number;
  month: number;
}

export interface UpdateWorkdayRequest {
  workday_id: number,
  summary?: string,
  type?: string,
}

export interface CreateWorkdayRequest {
  summary: string;
  type: string;
  day_id: number;
  user_id: number;
}


export async function apiListWorkdays(data: WorkdayRequest) {
  const res = await axios.post<CalendarDayDto[]>("/workday", data);
  return res.data;
}

export function apiUpdateWorkday(data: UpdateWorkdayRequest) {
  return axios.post("/workday/update", data);
}

export function apiCreateWorkday(data: CreateWorkdayRequest) {
  return axios.post("/workday/create", data);
}
