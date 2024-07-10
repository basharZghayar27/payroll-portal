import { IUser } from "../utils/types/User";

class User {
  private users: IUser[] = [];
  private currentUser: IUser | null = null;

  constructor() {
    // Initialize with some dummy data
    this.users = [
      { id: 1, username: 'admin', password: '123qwe' },
    ];
  }

  async createAccount(username: string, password: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const existingUser = this.users.find(user => user.username === username);
        if (existingUser) {
          resolve('Username already exists');
        } else {
          const newUser: IUser = {
            id: this.users.length + 1,
            username,
            password,
          };
          this.users.push(newUser);
          resolve('Account created successfully');
        }
      }, 500);
    });
  }

  async login(username: string, password: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const user = this.users.find(
          user => user.username === username && user.password === password
        );

        if (user) {
          this.currentUser = user;
          resolve('Login successful');
        } else {
          resolve('Invalid username or password');
        }
      }, 500);
    });
  }

  getCurrentUser(): string | undefined | null {
    return this.currentUser?.username;
  }
}

export default User;
