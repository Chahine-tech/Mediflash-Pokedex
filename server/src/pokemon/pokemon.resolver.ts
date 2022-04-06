import { Resolver, Query, Args, Int} from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';
import { PokemonResults } from './models/pokemonResults.model';

@Resolver(of => PokemonResults)
export class PokemonResolver {
  constructor(private readonly pokemonService: PokemonService) {}

  @Query()
  pokemon(@Args('offset', { type: () => Int }) offset: number, @Args('limit', { type: () => Int }) limit: number) {
    return this.pokemonService.findAll(offset, limit);
  }
}
