// import {
//   Count,
//   CountSchema,
//   Filter,
//   FilterExcludingWhere,
//   repository,
//   Where,
// } from '@loopback/repository';
// import {
//   post,
//   param,
//   get,
//   getModelSchemaRef,
//   patch,
//   put,
//   del,
//   requestBody,
//   response,
// } from '@loopback/rest';
// import {Diary} from '../models';
// import {DiaryRepository} from '../repositories';

// export class ApplicationController {
//   constructor(
//     @repository(DiaryRepository)
//     public diaryRepository: DiaryRepository,
//   ) {}

//   @post('/diaries')
//   @response(200, {
//     description: 'Diary model instance',
//     content: {'application/json': {schema: getModelSchemaRef(Diary)}},
//   })
//   async create(
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Diary, {
//             title: 'NewDiary',
//             exclude: ['number'],
//           }),
//         },
//       },
//     })
//     diary: Omit<Diary, 'number'>,
//   ): Promise<Diary> {
//     return this.diaryRepository.create(diary);
//   }

//   @get('/diaries/count')
//   @response(200, {
//     description: 'Diary model count',
//     content: {'application/json': {schema: CountSchema}},
//   })
//   async count(@param.where(Diary) where?: Where<Diary>): Promise<Count> {
//     return this.diaryRepository.count(where);
//   }

//   @get('/diaries')
//   @response(200, {
//     description: 'Array of Diary model instances',
//     content: {
//       'application/json': {
//         schema: {
//           type: 'array',
//           items: getModelSchemaRef(Diary, {includeRelations: true}),
//         },
//       },
//     },
//   })
//   async find(@param.filter(Diary) filter?: Filter<Diary>): Promise<Diary[]> {
//     return this.diaryRepository.find(filter);
//   }

//   @patch('/diaries')
//   @response(200, {
//     description: 'Diary PATCH success count',
//     content: {'application/json': {schema: CountSchema}},
//   })
//   async updateAll(
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Diary, {partial: true}),
//         },
//       },
//     })
//     diary: Diary,
//     @param.where(Diary) where?: Where<Diary>,
//   ): Promise<Count> {
//     return this.diaryRepository.updateAll(diary, where);
//   }

//   @get('/diaries/{id}')
//   @response(200, {
//     description: 'Diary model instance',
//     content: {
//       'application/json': {
//         schema: getModelSchemaRef(Diary, {includeRelations: true}),
//       },
//     },
//   })
//   async findById(
//     @param.path.number('id') id: number,
//     @param.filter(Diary, {exclude: 'where'})
//     filter?: FilterExcludingWhere<Diary>,
//   ): Promise<Diary> {
//     return this.diaryRepository.findById(id, filter);
//   }

//   @patch('/diaries/{id}')
//   @response(204, {
//     description: 'Diary PATCH success',
//   })
//   async updateById(
//     @param.path.number('id') id: number,
//     @requestBody({
//       content: {
//         'application/json': {
//           schema: getModelSchemaRef(Diary, {partial: true}),
//         },
//       },
//     })
//     diary: Diary,
//   ): Promise<void> {
//     await this.diaryRepository.updateById(id, diary);
//   }

//   @put('/diaries/{id}')
//   @response(204, {
//     description: 'Diary PUT success',
//   })
//   async replaceById(
//     @param.path.number('id') id: number,
//     @requestBody() diary: Diary,
//   ): Promise<void> {
//     await this.diaryRepository.replaceById(id, diary);
//   }

//   @del('/diaries/{id}')
//   @response(204, {
//     description: 'Diary DELETE success',
//   })
//   async deleteById(@param.path.number('id') id: number): Promise<void> {
//     await this.diaryRepository.deleteById(id);
//   }
// }
