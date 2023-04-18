'use strict';

/**
 * tail-number controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::tail-number.tail-number');
