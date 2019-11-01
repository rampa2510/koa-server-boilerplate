//========================================================================================
/*                                                                                      *
 *                             require the node dependencies                            *
 *                                                                                      */
//========================================================================================

const Router = require('koa-router')

//########################################################################################

//========================================================================================
/*                                                                                      *
 *                                 require the services                                 *
 *                                                                                      */
//========================================================================================

const Database = require('../../services/Database')

const Utils = require('../../services/Utils')

//########################################################################################

//========================================================================================
/*                                                                                      *
 *                                   require the keys                                   *
 *                                                                                      */
//========================================================================================

const keys = require('../../config/keys')

//########################################################################################

// initialise all the services

let db = new Database(keys.host,keys.username,keys.password,keys.database)

let fetch = new Router({ prefix: '/fetch' })

let utils = new Utils()



module.exports = fetch