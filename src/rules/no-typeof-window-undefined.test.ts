import { RuleTester } from "eslint";
import { noTypeofWindowUndefined } from "./no-typeof-window-undefined";

const tester = new RuleTester({
  parserOptions: { ecmaVersion: 2015, sourceType: "module" },
});

tester.run("no-typeof-window-undefined", noTypeofWindowUndefined, {
  valid: [
    {
      code: `typeof document === "undefined"`,
    },
    {
      code: `typeof document !== "undefined"`,
    },
  ],
  invalid: [
    {
      code: `typeof window === "undefined"`,
      errors: [
        {
          message:
            "When checking for SSR/browser environment use document over window because server runtimes like Deno have a global window available",
        },
      ],
      output: `typeof document === "undefined"`,
    },
    {
      code: `typeof window !== "undefined"`,
      errors: [
        {
          message:
            "When checking for SSR/browser environment use document over window because server runtimes like Deno have a global window available",
        },
      ],
      output: `typeof document !== "undefined"`,
    },
  ],
});
