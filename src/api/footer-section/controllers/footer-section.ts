/**
 * footer-section controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::footer-section.footer-section', ({strapi})=>({
    async find(ctx){
        ctx.query = { ...ctx.query, locale: ctx.query.locale || 'en'};
        const { data, meta } = await super.find(ctx);
        const sanitizedData = data;
        const { documentId, createdAt, updatedAt, publishedAt, ...rest } = sanitizedData;
        return { data: { ...rest}, meta };
    }
}));
