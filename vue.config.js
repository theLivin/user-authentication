module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Authentication App";
      return args;
    });
  },
  pwa: {
    name: "Authentication App",
    themeColor: "#000000",
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
      exclude: [/_redirects/],
    },
  },
};
