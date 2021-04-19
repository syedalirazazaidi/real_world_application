import {Entity, model, property} from '@loopback/repository';

@model()
export class Diary extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  username: string;

  constructor(data?: Partial<Diary>) {
    super(data);
  }
}

export interface DiaryRelations {
  // describe navigational properties here
}

export type DiaryWithRelations = Diary & DiaryRelations;
