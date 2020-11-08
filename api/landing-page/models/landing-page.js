'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require('axios');

module.exports = {
  lifecycles: {
    async afterUpdate() {
      process.env.NETLIFY_WEBHOOK && axios.post(process.env.NETLIFY_WEBHOOK);
    },
  },
};
