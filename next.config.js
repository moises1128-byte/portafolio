module.exports = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.pdf$/,
        type: 'asset/resource', 
      },
      {
        test: /\.(mp4|webm|ogg|mov)$/, 
        use: 'file-loader',
      }
    );

    return config;
  },
};