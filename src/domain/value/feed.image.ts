export class FeedImage {
  private readonly image: string;

  constructor(image: string) {
    this.image = image;
  }

  public static create(image: string): FeedImage {
    return new FeedImage(image);
  }

  getImage(): string {
    return this.image;
  }
}
