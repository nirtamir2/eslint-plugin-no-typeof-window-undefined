import { recommended } from "./config/recommended";
import { noTypeofWindowUndefined } from "./rules/no-typeof-window-undefined";

// eslint-disable-next-line unicorn/prefer-module,import/no-commonjs
module.exports = {
  rules: {
    "no-typeof-window-undefined": noTypeofWindowUndefined,
  },
  configs: {
    recommended,
  },
};
