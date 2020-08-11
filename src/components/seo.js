import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import config from '../config';

function SEO({ metadata }) {
  const lang = config.siteLanguage

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metadata.title}
      titleTemplate={`${metadata.title} | %s`}
      meta={[
        {
          name: `robots`,
          content: `noindex`,
        },
        {
          name: `description`,
          content: metadata.description,
        },
        {
          property: `og:title`,
          content: metadata.title,
        },
        {
          property: `og:description`,
          content: metadata.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: metadata.author,
        },
        {
          name: `twitter:title`,
          content: metadata.title,
        },
        {
          name: `twitter:description`,
          content: metadata.description,
        },
      ]}
    />
  )
}

SEO.propTypes = {
  metadata: PropTypes.object.isRequired,
}

export default SEO
