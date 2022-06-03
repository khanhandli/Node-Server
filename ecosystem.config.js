module.export = {
  apps: [
    {
      name: "app",
      script: "./server.js",

      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
