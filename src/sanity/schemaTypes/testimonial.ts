import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quote',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
    }),
    defineField({
      name: 'rotation',
      title: 'Card Rotation (degrees)',
      description: 'Tilt angle for the desktop card (e.g. 2.9 or -6.85)',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'positionLeft',
      title: 'Desktop Left (px at 1440px canvas)',
      type: 'number',
    }),
    defineField({
      name: 'positionTop',
      title: 'Desktop Top (px at 1440px canvas)',
      type: 'number',
    }),
    defineField({
      name: 'behindText',
      title: 'Behind Heading',
      description: 'Place this card below the Testimonials heading in the stacking order',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'clientName', media: 'logo' },
  },
})
