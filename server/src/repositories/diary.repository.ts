import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Diary, DiaryRelations} from '../models';

export class DiaryRepository extends DefaultCrudRepository<
  Diary,
  typeof Diary.prototype.username,
  DiaryRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Diary, dataSource);
  }
}
