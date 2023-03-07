module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'unobokujyou'),
			user: env('DATABASE_USERNAME', 'unobokujyou'),
			password: env('DATABASE_PASSWORD', 'password'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
