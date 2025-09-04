/**
 * service controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::service.service', ({strapi})=>({
    async find(ctx){
        ctx.query = { ...ctx.query, populate: {logo: true} };
        const { data, meta } = await super.find(ctx);

        // // Transform the data to exclude unwanted fields
        // const sanitizedData = data.map((item) => {
        //   const { documentId, createdAt, updatedAt, publishedAt, ...rest } = item;
        //   return rest;
        // });

          // Transform the data to exclude unwanted fields from both service and logo
    const sanitizedData = data.map((item) => {
      // Exclude unwanted fields from the main service object
      const { documentId, createdAt, updatedAt, publishedAt, logo, ...rest } = item;

      // Sanitize the logo object if it exists
      let sanitizedLogo = logo;
      if (logo) {
        const { documentId: logoDocumentId, createdAt: logoCreatedAt, updatedAt: logoUpdatedAt, publishedAt: logoPublishedAt, ...logoRest } = logo;
        sanitizedLogo = logoRest;
      }

      // Return the sanitized item with the sanitized logo
      return { ...rest, logo: sanitizedLogo };
    });
        return { data: sanitizedData, meta };
    },
}));
