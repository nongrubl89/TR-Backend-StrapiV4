'use strict';

/**
 * tail-number service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tail-number.tail-number');
