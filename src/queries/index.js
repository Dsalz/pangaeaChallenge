import { gql } from "@apollo/client";

export const getProductsQuery = gql`
  query($currency: Currency!) {
    products {
      id
      image_url
      title
      price(currency: $currency)
    }
  }
`;

export const getCurrenciesQuery = gql`
  query {
    currency
  }
`;
