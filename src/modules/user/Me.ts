import { Resolver, Query, Ctx } from "type-graphql";
import { User } from "../../../src/entity/User";
import { MyContext } from "src/types/MyContext";

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
    const userId = ctx.req.session!.userId;

    if (!userId) {
      return undefined;
    }

    return User.findOne(userId);
  }
}
