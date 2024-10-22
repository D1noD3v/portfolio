/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
    config.module.rules.push({
      test: /\.(ttf|otf|eot|woff|woff2)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: '@public/fonts/', // or wherever you'd like to store the font files
          publicPath: '/_next/static/fonts/', // or adapt as per your project
        },
       }
      }
    )
    return config;
  }
}

export default nextConfig;
