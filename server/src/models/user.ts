export class User {
  id!: number;
  pseudo!: string;
  password!: string;
  role!: string;

  constructor(input: User) {
    Object.assign(this, input);
}
}