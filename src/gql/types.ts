import { graphql } from "./gql";

export const LOGIN_USER = `
mutation LoginUser($input: LoginInput!) {
    loginUser(input: $input) {
      data {
        email
        username
        accessToken
      }
    }
  }
`