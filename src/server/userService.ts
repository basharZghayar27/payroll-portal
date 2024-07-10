import { IUser } from "../utils/types/user";

class User {
  private users: IUser[] = [];
  private currentUser: IUser | null = null;

  constructor() {
    // Initialize with some dummy data
    this.users = [
      { id: 1, username: 'user1', password: 'password1' },
      { id: 2, username: 'user2', password: 'password2' },
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

  getCurrentUser(): IUser | null {
    return this.currentUser;
  }
}

export default User;
