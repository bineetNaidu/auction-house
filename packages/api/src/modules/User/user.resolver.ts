import { User } from './user.entity';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { CreateOrFindUserInput } from './createOrFindUser.dto';

@Resolver()
export class UserResolvers {
  @Mutation(() => User)
  async createOrFindUser(
    @Arg('input') { avatar, googleId, name }: CreateOrFindUserInput
  ): Promise<User> {
    let user = await User.findOne({ where: { googleId } });
    if (!user) {
      user = await User.create({
        avatar,
        googleId,
        name,
      }).save();
    }
    return user;
  }
}
