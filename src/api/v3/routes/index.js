const express = require("express");
const config = require("../../../config");

const authRoute = require("../auth/Auth.Route");
const userRoute = require("../user/User.Route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: "/docs",
    // route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === "development") {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

module.exports = router;
