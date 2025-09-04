/**
 * skill controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::skill.skill', ({strapi})=>({    
    async find(ctx){
        ctx.query = { ...ctx.query, populate:{image:true}, locale: ctx.query.locale || 'en'};
        const { data, meta } = await super.find(ctx);
     return { data, meta };
    },
}));
