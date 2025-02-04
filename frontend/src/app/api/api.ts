import axios from "axios";

const API_BASE_URL = "http://localhost:3001";

export async function createUsers(name: string, email: string) {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/create`, {
      name,
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Failed to create user", error);
    throw new Error("Failed to create user");
  }
}

export async function fetchData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data", error);
    throw new Error("Failed to fetch data");
  }
}

export async function deleteUsers() {
  try {
    const response = await axios.delete(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete all users", error);
    throw new Error("Failed to delete all users");
  }
}

export async function updateUser(id: string, name?: string, email?: string) {
  try {
    const response = await axios.put(`${API_BASE_URL}/users/update/${id}`, {
      name,
      email,
    });

    return response.data;
  } catch (error) {
    console.error("Failed to update user", error);
    throw new Error("Failed to update user");
  }
}
