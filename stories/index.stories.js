import React from "react";
import { storiesOf } from "@storybook/react";
import { setupGraphiQL } from "@storybook/addon-graphql";

const graphiql = setupGraphiQL({ url: "http://localhost:3000/graphql" });

const query = `
{
  hero {
    name
    age
  }
}
`;

storiesOf("GraphQL", module)
  .add("Broken", graphiql(query))
  .add("Not broken", graphiql(query.trim()));
