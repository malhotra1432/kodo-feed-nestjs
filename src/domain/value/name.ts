export class Name {
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  public static create(name: string): Name {
    return new Name(name);
  }

  getName(): string {
    return this.name;
  }
}
