import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const query = `mutation CreateOrFindUser($input: CreateOrFindUserInput!) {
  createOrFindUser(input: $input) {
    id
    googleId
    name
    avatar
  }
}`;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: 'secret',
  callbacks: {
    signIn: ({ user }) => {
      try {
        fetch('http://localhost:4000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables: {
              input: {
                googleId: user.id!,
                avatar: user.image!,
                name: user.name!,
              },
            },
          }),
        });
        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
});
