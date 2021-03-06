import User from './user'
import Client from './client'
import Auth from './auth'
import * as util from './util'

export default function( appId, token, options ) {
	return new Client( appId, token, options );
}

export { Auth, User, Client, util }
