import type { Rule } from "eslint";

export const noTypeofWindowUndefined: Rule.RuleModule = {
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description:
        'Use `typeof document !== "undefined"` instead of `typeof window !== "undefined"`',
      recommended: true,
      url: "https://github.com/nirtamir2/eslint-plugin-no-typeof-window-undefined",
    },
    schema: [],
  },
  create: (context) => ({
    BinaryExpression: (node) => {
      const { left, right } = node;
      const isLeftTypeofWindow =
        left.type === "UnaryExpression" &&
        left.operator === "typeof" &&
        left.argument.type === "Identifier" &&
        left.argument.name === "window";
      const isRightUndefined =
        right.type === "Literal" && right.value === "undefined";
      if (isLeftTypeofWindow && isRightUndefined) {
        context.report({
          message:
            "When checking for SSR/browser environment use document over window because server runtimes like Deno have a global window available",
          node,
          fix: (fixer) => {
            return fixer.replaceText(left, "typeof document");
          },
        });
      }
    },
  }),
};
