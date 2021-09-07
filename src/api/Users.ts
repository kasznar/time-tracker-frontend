import axios from "axios";

export default interface UserResponse {
  id: number;
  email: string;
  userType: string;
  name: string;
}

export async function apiListUsers() {
  const res = await axios.get<UserResponse[]>("/users");
  return res.data;
}
