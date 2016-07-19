/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  '/': {
    view: 'lampo1/page'
  },

  '/lampo1/new': {
    view: 'lampo1/new'
  },

  '/lampo1/show': {
    view: 'lampo1/show'
  },

  '/lampo1/all': {
    view: 'lampo1/all'
  },

  '/lampo1/page': {
    view: 'lampo1/page'
  },

  '/lampo1/latest': {
    view: 'lampo1/latest'
  },

   '/lampo1/maxlampo1': {
    view: 'lampo1/maxlampo1'
  },

    '/lampo1/minlampo1': {
    view: 'lampo1/minlampo1'
  },

  '/rele1/latestr1': {
    view: 'rele1/latestr1'
  },

  '/rele1/changer1state': {
    view: 'rele1/changer1state'
  }
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
