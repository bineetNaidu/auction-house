import { Field, InputType } from 'type-graphql';

@InputType()
export class CreateOrFindUserInput {
  @Field()
  googleId: string;
  @Field()
  avatar: string;
  @Field()
  name: string;
}
