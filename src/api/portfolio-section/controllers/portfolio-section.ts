/**
 * portfolio-section controller
 */

import { factories } from '@strapi/strapi'
import { platform } from 'os';

export default factories.createCoreController('api::portfolio-section.portfolio-section', ({strapi})=>({
    async find(ctx){    
        ctx.query = { ...ctx.query, populate: {portfolios: {
            populate: {
                image: true,
                platform: {
                    populate: {
                        logo: true,
                    }
                },
            },
        }}, locale: ctx.query.locale || 'en', };
        const { data, meta } = await super.find(ctx);
        const sanitizedData = data;
        const { documentId, createdAt, updatedAt, publishedAt, ...rest } = sanitizedData;
        const sanitizedPortfolios = rest.portfolios.map((portfolio) => {
            const { documentId, createdAt, updatedAt, publishedAt, ...rest } = portfolio;
            return rest;
        });
        return { data: { ...rest, portfolios: sanitizedPortfolios }, meta };
    },
}));