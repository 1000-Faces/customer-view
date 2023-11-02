import axios from 'axios'

const BASE_URL = 'https://dineease-api.azurewebsites.net/api/auth'

export const getProfile = async () => {
  try {
    const token = localStorage.getItem('token')
    if (!token) {
      // Redirect to login if token is not found
      return
    }

    const response = await axios.get<UserProfile>(`${BASE_URL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    // Return the user profile from the response
    return response.data
  } catch (error) {
    // Handle profile retrieval error
  }
}

interface UserProfile {
  // Define your user profile structure here
}
