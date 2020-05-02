import React from "react";
import { Helmet } from "react-helmet";

export const SEO = ({ description, lang = "en", meta = [], title }) => (
  <Helmet
    htmlAttributes={{
      lang
    }}
    title={`${title} - Manadrop`}
    meta={[
      {
        name: "description",
        content: description
      },
      {
        name: "keywords",
        content: ""
      },
      {
        property: "og:title",
        content: title
      },
      {
        property: "og:description",
        content: description
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        name: "twitter:card",
        content: "summary"
      },
      {
        name: "twitter:title",
        content: title
      },
      {
        name: "twitter:description",
        content: description
      }
    ].concat(meta)}
  />
);
