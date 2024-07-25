export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export type CreateUserDto = Pick<User, "name" | "email" | "password">;

export type UpdateUserDto = Pick<User, "name" | "email" | "password">;

export type UpdatePatchUserDto = Partial<
  Pick<User, "name" | "email" | "password">
>;
