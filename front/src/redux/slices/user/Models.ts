export interface InitialState {
  id: string;
  email: string;
  username: string;
  isLogged: boolean;
}

export interface LoginPayload {
  username: string;
  id: string;
}

// API
export interface LoginResponse {
  token: string;
  username: string;
  name: string;
  id: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

// register
export interface RegisterCredentials {
  email: string;
  username: string;
  password: string;
}
