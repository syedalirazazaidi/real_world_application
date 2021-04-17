import {get} from '@loopback/rest';

export class HelloController {
  constructor() {}

  @get('/hello')
  async hello(): Promise<string> {
    console.log('Function Called');
    return 'Hello world!';
  }
}
