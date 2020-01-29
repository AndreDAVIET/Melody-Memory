export class Challenge {
    id!: number;
    name!: string;
    sequence!: string;
    melodie!: string;
  
    constructor(input: Challenge) {
      Object.assign(this, input);
  }
  }