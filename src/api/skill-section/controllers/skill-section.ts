/**
 * skill-section controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::skill-section.skill-section',
    ({strapi})=>({
        async find(ctx){
            ctx.query = { ...ctx.query, populate:{skills: {
          populate: {
            image: true, // Populate the image field within skills
          },
        },},locale: ctx.query.locale || 'en', };
            const { data, meta } = await super.find(ctx);
            const sanitizedData = data;
            const { documentId, createdAt, updatedAt, publishedAt, ...rest } = sanitizedData;
            const sanitizedSkills = rest.skills.map((skill) => {
                const { documentId, createdAt, updatedAt, publishedAt, ...rest } = skill;
                return rest;
            });
            return { data: { ...rest, skills: sanitizedSkills }, meta };
        },
    })
);
