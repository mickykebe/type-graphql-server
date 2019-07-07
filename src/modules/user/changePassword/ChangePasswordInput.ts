import { InputType, Field } from "type-graphql";
import { PasswordInputMixin } from "../../shared/PasswordInputMixin";

@InputType()
export class ChangePasswordInput extends PasswordInputMixin(class {}) {
  @Field()
  token: string;
}
