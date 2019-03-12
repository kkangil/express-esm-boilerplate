module.exports = {
  apps: [
    {
      name: "express-esm-boilerplate",
      script: "./src/app.js",
      watch: true,
      node_args: '-r esm',
      "env_public-develop": {
        NODE_ENV: "public-develop",
        PORT: 18099,
      },
      // env_production: {
      //   NODE_ENV: "production",
      //   PORT: ,
      // }
    }
  ]
};