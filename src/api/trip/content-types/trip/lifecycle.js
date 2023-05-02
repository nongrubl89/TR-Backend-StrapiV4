const uuid = require('uuid');
module.exports = {
    async beforeCreate(event) {
        event.params.data.uuid = await strapi.service('plugin::content-manager.uid').generateUIDField({
          contentTypeUID: "api:trip.trip",
          field: "slug",
          data: uuidv4()
        })
      }
    }