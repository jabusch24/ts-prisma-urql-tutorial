import SchemaBuilder from "@pothos/core";
import { DateResolver } from "graphql-scalars";
import PrismaPlugin from "@pothos/plugin-prisma";
import type PrismaTypes from "@pothos/plugin-prisma/generated";
import { prisma } from "./db";

// You will need to register a Date scalar with your schema builder to let it know how to handle dates.
// The schema builder takes in a generic where you can specify various configurations.

export const builder = new SchemaBuilder<{
  Scalars: {
    Date: {
      Input: Date;
      Output: Date;
    };
  };
  PrismaTypes: PrismaTypes;
}>({ plugins: [PrismaPlugin], prisma: { client: prisma } });

builder.addScalarType("Date", DateResolver, {});

builder.queryType({});
