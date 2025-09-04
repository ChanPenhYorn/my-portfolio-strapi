/**
 * service-section controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::service-section.service-section', ({strapi})=>({
    async find(ctx){    
        ctx.query = { ...ctx.query, populate: {services: {
            populate: {
                logo: true,
            },
        }}, locale: ctx.query.locale || 'en', };
        const { data, meta } = await super.find(ctx);
        const sanitizedData = data;
        const { documentId, createdAt, updatedAt, publishedAt, ...rest } = sanitizedData;
        const sanitizedServices = rest.services.map((service) => {
            const { documentId, createdAt, updatedAt, publishedAt, ...rest } = service;
            return rest;
        });
        return { data: { ...rest, services: sanitizedServices }, meta };
    },
}));
