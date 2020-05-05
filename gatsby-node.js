exports.onCreateWebpackConfig = ({
  actions //, stage, getConfig, rules, loaders, 
}) => {
  actions.setWebpackConfig({
    externals: ['canvas'],
  });
}