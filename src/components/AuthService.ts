// AuthService.ts

import axios from 'axios'

const BASE_URL = 'https://dineease-api.azurewebsites.net/api/auth'

export const login = async (credentials: { username: string; password: string }) => {
  try {
    const response = await axios.post<{ token: string }>(`${BASE_URL}/login`, credentials)
    const token = response.data.token

    // Store the token in local storage or cookies
    localStorage.setItem('token', token)
  } catch (error) {
    // Handle login error
  }
}

export const logout = () => {
  // Remove the token from local storage or cookies
  localStorage.removeItem('token')
}
