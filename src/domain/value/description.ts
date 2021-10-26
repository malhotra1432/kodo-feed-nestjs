export class Description {
  private readonly description: string;

  constructor(description: string) {
    this.description = description;
  }

  public static create(description: string): Description {
    return new Description(description);
  }

  getDescription(): string {
    return this.description;
  }
}
