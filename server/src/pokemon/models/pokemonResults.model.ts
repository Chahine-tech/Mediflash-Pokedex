import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PokemonResult } from './pokemonResult.models';

@ObjectType()
export class PokemonResults {
  @Field(type => Int)
  count: number;

  @Field()
  next: string;

  @Field()
  previous: string;

  @Field(type => [PokemonResult])
  results: [PokemonResult];
}
