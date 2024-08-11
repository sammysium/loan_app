module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["@babel/plugin-transform-private-methods", { "loose": true }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
         
          '@models': './src/models',
          '@views': './src/views',
          '@config': './src/config',
          '@themes': './src/themes',
          '@hooks': './src/hooks',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@gql': './src/graphql',
        },
      },
    ],
  ],
};
