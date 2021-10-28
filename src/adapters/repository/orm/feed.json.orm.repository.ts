export interface FeedJsonOrmRepository {
  save(data: Array<any>);
  findAll(): Promise<Array<any>>;
}
