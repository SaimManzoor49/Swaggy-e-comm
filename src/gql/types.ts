import { graphql } from "./gql";

export const LOGIN_USER = graphql(`
mutation LoginUser($input: LoginInput!) {
    loginUser(input: $input) {
      data {
        email
        username
        accessToken
      }
    }
  }
`)