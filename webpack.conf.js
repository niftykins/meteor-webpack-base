module.exports = {
	externals: {
		_: '_',
		react: 'React',
		'react-router': 'ReactRouter',
		'react-router-ssr': 'ReactRouterSSR',
		'react-meteor-data': 'ReactMeteorData'
	},
	devServer: {
		host: 'localhost'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.js', '.jsx']
	}
};
