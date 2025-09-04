/**
 * navigation-bar controller
 */

import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::navigation-bar.navigation-bar');



module.exports = factories.createCoreController('api::navigation-bar.navigation-bar', ({ strapi }) => ({
  async find(ctx) {
    // Add populate: '*' to the query to include all relations, media, components, and dynamic zones
    ctx.query = { ...ctx.query, populate: {navigation: true, logo: true, language: {
      populate: {
        image: true 
      }
    }}, locale: ctx.query.locale || 'en', };

    // Call the default core action to fetch the data
    const { data, meta } = await super.find(ctx);

    // Optional: Add custom metadata
    meta.locale = ctx.query.locale || 'en';

    // Optional: Add custom logic to modify the response
    meta.date = Date.now();

    // Transform the data to exclude unwanted fields
    const sanitizedData =data;
    const { documentId, createdAt, updatedAt, publishedAt, ...rest } = sanitizedData;

    return { data: rest, meta };
  },
}));
