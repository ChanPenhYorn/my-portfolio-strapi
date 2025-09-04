/**
 * contact-form controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
  async create(ctx) {
    const { data } = await super.create(ctx);
    return data;
  },

  async find(ctx) {
    ctx.query = { ...ctx.query, locale: ctx.query.locale || 'en' };
    const { data, meta } = await super.find(ctx);

    const sanitizedData = data.map(({ documentId, createdAt, updatedAt, publishedAt, ...rest }) => rest);

    return { data: sanitizedData, meta };
  },
}));
