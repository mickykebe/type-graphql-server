import { Resolver, Ctx, Mutation } from "type-graphql";
import { MyContext } from "src/types/MyContext";

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: MyContext): Promise<Boolean> {
    return new Promise((res, rej) =>
      ctx.req.session!.destroy(err => {
        if (err) {
          console.error(err);
          rej(false);
        }
        ctx.res.clearCookie("qid");
        res(true);
      })
    );
  }
}
