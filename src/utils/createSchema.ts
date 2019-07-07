import { buildSchema } from "type-graphql";
import { MyContext } from "../types/MyContext";

export const createSchema = () =>
  buildSchema({
    resolvers: [__dirname + "/../modules/*/*.ts"],
    authChecker: ({ context: { req } }: { context: MyContext }): boolean => {
      return !!req.session!.userId;
    }
  });
