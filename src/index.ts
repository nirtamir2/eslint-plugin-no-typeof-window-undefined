import { recommended } from "./config/recommended";
import { noTypeofWindowUndefined } from "./rules/no-typeof-window-undefined";

// eslint-disable-next-line import/no-anonymous-default-export,import/no-unused-modules
export default {
  rules: {
    "no-typeof-window-undefined": noTypeofWindowUndefined,
  },
  configs: {
    recommended,
  },
};
