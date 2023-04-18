'use strict';

/**
 * tail-number router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tail-number.tail-number');
