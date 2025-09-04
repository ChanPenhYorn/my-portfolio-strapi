/**
 * landing controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::landing.landing', ({ strapi }) => ({
  async find(ctx) {
    // Add populate and locale to the query
    ctx.query = {
      ...ctx.query,
      populate: {
        navigation: true,
        title: true,
        image: true,
      },
      locale: ctx.query.locale || 'en',
    };

    // Call the default core action to fetch the data
    const { data, meta } = await super.find(ctx);

    // Handle cases where data is null, an object, or an array
    let sanitizedData = data;

    if (Array.isArray(data)) {
      // If data is an array (collection type with multiple records)
      sanitizedData = data.map((item) => {
        const { documentId, createdAt, updatedAt, publishedAt, image, ...rest } = item;

        // Sanitize the image object if it exists
        let sanitizedImage = image;
        if (image) {
          const { documentId: imageDocumentId, createdAt: imageCreatedAt, updatedAt: imageUpdatedAt, publishedAt: imagePublishedAt, ...imageRest } = image;
          sanitizedImage = imageRest;
        }

        return { ...rest, image: sanitizedImage };
      });
    } else if (data && typeof data === 'object') {
      // If data is a single object (single type or single record)
      const { documentId, createdAt, updatedAt, publishedAt, image, ...rest } = data;

      // Sanitize the image object if it exists
      let sanitizedImage = image;
      if (image) {
        const { documentId: imageDocumentId, createdAt: imageCreatedAt, updatedAt: imageUpdatedAt, publishedAt: imagePublishedAt, ...imageRest } = image;
        sanitizedImage = imageRest;
      }

      sanitizedData = { ...rest, image: sanitizedImage };
    } else {
      // If data is null or undefined, return it as is or handle as needed
      sanitizedData = null;
    }

    return { data: sanitizedData, meta };
  },
}));