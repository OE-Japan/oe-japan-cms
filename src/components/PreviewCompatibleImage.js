import React from 'react'
import PropTypes from 'prop-types'
// import Img from 'gatsby-image'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: '5px' }
  const { alt = '', childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      // <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
      <GatsbyImage style={imageStyle} image={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    // return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
    return <GatsbyImage style={imageStyle} image={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />
    // return <GatsbyImage style={imageStyle} image={image} alt={alt} />

  return <StaticImage src="../../static/img/oe-japan-logo.png" alt="Open Education Japan (OE Japan)" />
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
