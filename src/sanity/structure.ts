import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Homepage')
        .id('homepage')
        .child(
          S.document()
            .schemaType('homepage')
            .documentId('homepage')
        ),
      S.divider(),
      S.documentTypeListItem('portfolio').title('Portfolio Items'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('newsItem').title('News Items'),
    ])
