commands:

- pnpm init
- pnpm i -D ts-node-dev typescript @types/node
- pnpm tsc --init
- pnpm i -D prisma
- pnpm prisma init
- pnpm prisma migrate dev --name init
- pnpm prisma db seed // to create initial database records

- pnpm install @graphql-yoga/node graphql // DEPRECATED!!
- pnpm add graphql-yoga graphql // use this instead
- index.ts filled as in https://the-guild.dev/graphql/yoga-server/docs#server, not as described in the tutorial

- pnpm i @pothos/core
- pnpm i graphql-scalars // e.g. for DATETIME
- pnpm i @pothos/plugin-prisma

Interesting note, add this to ease the prisma regeneration and installation (i.e. Once that is added, you will need a way to generate Pothos' artifacts. You will need to install this API's node modules and regenerate Prisma Client this each time this application is deployed later in the series, so go ahead and create a new script in package.json to handle this):
"build": "pnpm i && pnpm prisma generate"

Observations:

- make sure you have the right yoga version!
- Note: It may seem redundant to manually define GraphQL object types when you've already defined the shape of the data in the Prisma schema. The Prisma schema defines the shape of the data in the database, while the GraphQL schema defines the data available in the API. (TRUE)
- this works amazingly with codeium (see screenshot)
