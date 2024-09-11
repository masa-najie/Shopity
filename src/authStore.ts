import { create } from "zustand";

interface User {
  email: string;
  password: string;
}
interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: User, token: string) => void;
  logout: (token: string) => void;
}
const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: (user, token) =>
    set((state) => ({
      user: state.user,
      token: state.token,
      isAuthenticated: true,
    })),
  logout: (token) =>
    set((state) => ({
      user: null,
      token: null,
      isAuthenticated: false,
    })),
}));
export default useAuthStore;
