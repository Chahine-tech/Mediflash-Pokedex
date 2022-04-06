import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PokemonResult {
  @Field()
  name : string

  @Field()
  url : string
}
