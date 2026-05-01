import { defineField, defineType } from 'sanity'
import { HomeIcon } from '@sanity/icons'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'heroBgDesktop',
      title: 'Hero Background — Desktop',
      type: 'image',
    }),
    defineField({
      name: 'heroBgMobile',
      title: 'Hero Background — Mobile',
      type: 'image',
    }),
    defineField({
      name: 'aboutPortrait',
      title: 'About Portrait',
      type: 'image',
    }),
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'fullBleedPhoto',
      title: 'Full-Bleed Photo',
      type: 'image',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Homepage' }),
  },
})
