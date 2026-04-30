import { defineQuery } from 'next-sanity'

export const HOMEPAGE_QUERY = defineQuery(`
  *[_type == "homepage" && _id == "homepage"][0] {
    heroDescription,
    "heroBgDesktop": heroBgDesktop.asset->url,
    "heroBgMobile": heroBgMobile.asset->url,
    "aboutPortrait": aboutPortrait.asset->url,
    aboutText,
    "fullBleedPhoto": fullBleedPhoto.asset->url,
  }
`)

export const PORTFOLIO_QUERY = defineQuery(`
  *[_type == "portfolio"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    categories,
    "coverImageUrl": coverImage.asset->url,
    tall,
  }
`)

export const SERVICES_QUERY = defineQuery(`
  *[_type == "service"] | order(order asc) {
    _id,
    name,
    description,
    "imageUrl": image.asset->url,
  }
`)

export const TESTIMONIALS_QUERY = defineQuery(`
  *[_type == "testimonial"] {
    _id,
    clientName,
    quote,
    "logoUrl": logo.asset->url,
    rotation,
    positionLeft,
    positionTop,
    behindText,
  }
`)

export const NEWS_QUERY = defineQuery(`
  *[_type == "newsItem"] | order(order asc) {
    _id,
    "imageUrl": image.asset->url,
    excerpt,
  }
`)
