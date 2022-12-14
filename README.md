# AUCTION HOUSE

A place to buy/bid exclusive art work in realtime.

## Tool

- GraphQL/GraphQL Subscriptions (type-graphql)
- Typescript
- Apollo Server
- Nextjs

## Roadmap

- [x] setup lerna
- [x] setup server
- [x] setup postgres database
  - [x] setup docker-compose with adminer
- [ ] dockerize the server app
  - [ ] setup docker-compose for server
- [ ] design the database
  - [x] User
  - [x] Auctions
  - [x] Bidders
- [ ] Add TypeORM migrations
- [] setup web
  - [x] add TailwindCSS
  - [x] add DaisyUI
  - [x] add NextAuth
  - [x] Add GraphQL client
    - [x] setup graphql code gen
    - [x] setup apollo graphql
  - [x] add navbar
  - [x] user can view the list of available auction
  - [x] create auctions provided the user is logged in
  - [ ] add myAuctions page
  - [ ] user can bid/buyout the auction
