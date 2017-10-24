const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry : {
        'js/out.js': './js/app.js',
	'css/main.css~': './scss/main.scss'
    },
    output : {
        path: __dirname+'/',
        filename: '[name]'
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }

    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: { presets: ['es2015', 'stage-2'] }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'resolve-url-loader' ,'sass-loader?sourceMap=true', ]
                })

            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            emitFile: true,
                            name: 'assets/[name].[ext]',
                            context: '',
                            publicPath: '/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/style.css')
    ]
}