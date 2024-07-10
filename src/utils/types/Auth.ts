export type TLogin = {
	username: string;
	password: string;
};

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (values: TLogin) => Promise<void>;
  logout: () => void;
}