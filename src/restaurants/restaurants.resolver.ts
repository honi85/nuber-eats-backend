import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dtos/create-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";

@Resolver(of => Restaurant)
export class RestaurantResolver{
   
    @Query(returns => [Restaurant])
    restaurants(@Args('veganOnly') veganOnly: boolean): Restaurant[]{
        return [];
    }

    @Mutation(returns => Boolean)
    createRestaurant(
        @Args() createRestaurantDto: CreateRestaurantDto
        // @Args('createRestaurantInput') createRestaurantInput: CreateRestaurantDto
        // @Args('name') name:string,
        // @Args('isVegan') isVegan:boolean,
        // @Args('address') address:string,
        // @Args('ownersName') ownersName:string
    ): boolean {
        console.log(createRestaurantDto);
        return true;
    }

}