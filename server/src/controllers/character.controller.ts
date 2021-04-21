// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {post} from '@loopback/rest';
export class CharacterController {
  constructor() {}
  @post('/characters', {
    responses: {
      '200': {
        description: 'Character model instance',
        content: {'application/json': {schema: {'x-ts-type': Character}}},
      },
    },
  })
  async create(@requestBody() character: Character): Promise<Character> {
    //add following lines
    let characterId = 1;
    while (await this.characterRepository.exists(characterId)) {
      characterId++;
    }
    character.id = characterId;
    //add above lines
    return await this.characterRepository.create(character);
  }
}
