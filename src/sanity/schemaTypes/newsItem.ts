import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const newsItem = defineType({
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'excerpt', media: 'image' },
  },
})
