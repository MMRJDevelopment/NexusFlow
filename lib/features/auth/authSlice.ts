import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

interface AuthState {
  user: any | null
  token: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  token: typeof window !== 'undefined' ? Cookies.get('token') || null : null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: any; token: string }>) => {
      const { user, token } = action.payload
      state.user = user
      state.token = token
      state.isAuthenticated = true
      Cookies.set('token', token, { expires: 7 })
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      Cookies.remove('token')
    },
  },
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer