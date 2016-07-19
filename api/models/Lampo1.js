/**
 * Lampo1.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {
    id: { type: 'integer',
              required: true},
    node: { type: 'string',
              required: true},
    lampo: { type: 'integer',
              required: true},
    timestamp: { type: 'date'}
  }
};

