/**
 * contact-section controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::contact-section.contact-section', ({ strapi }) => ({
  async find(ctx) {
    // Set query to populate nested fields and apply locale
    ctx.query = {
      ...ctx.query,
      populate: {
        contact: {
          populate: {
            contacts: true,
          },
        },
        social: {
          populate: {
            socials: {
              populate: {
                logo: true,
              },
            },
          },
        },
        form: true,
      },
      locale: ctx.query.locale || 'en',
    };

    // Fetch data using Strapi's default find method
    const { data, meta } = await super.find(ctx);

    // Sanitize the top-level data
    const { documentId, createdAt, updatedAt, publishedAt, ...rest } = data;

    // Sanitize nested contacts array
    const sanitizedContacts = rest.contact.contacts.map((contact) => {
      const { documentId, createdAt, updatedAt, publishedAt, ...restContact } = contact;
      return restContact;
    });

    // Sanitize nested socials array
    const sanitizedSocials = rest.social.socials.map((social) => {
      const { documentId, createdAt, updatedAt, publishedAt, ...restSocial } = social;
      return restSocial;
    });

    // Construct the sanitized response
    const sanitizedData = {
      ...rest,
      contact: {
        ...rest.contact,
        contacts: sanitizedContacts, // Replace the original contacts array
      },
      social: {
        ...rest.social,
        socials: sanitizedSocials, // Replace the original socials array
      },
      contacts: sanitizedContacts, // Keep the root-level contacts array
      socials: sanitizedSocials, // Keep the root-level socials array
    };

    return { data: sanitizedData, meta };
  },
}));