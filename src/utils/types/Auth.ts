export type TLogin = {
	username: string;
	password: string;
};

export type TSignUp = {
	username: string;
	password: string;
	confirmPassword: string;
};

export interface AuthContextType {
  isAuthenticated: boolean;
  login: (values: TLogin) => Promise<void>;
  signUp: (values: TSignUp) => Promise<void>;
  logout: () => void;
}