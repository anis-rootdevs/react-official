// 1. build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
// 2. ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// 3. docs: Documentation only changes
// 4. feat: A new feature
// 5. fix: A bug fix
// 6. refactor: A code change that neither fixes a bug nor adds a feature
// 7. style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// 8. test: Adding missing tests or correcting existing tests

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [2, "always", 100],
    "header-max-length": [2, "always", 100],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "type-enum": [2, "always", ["ci", "build", "docs", "feat", "fix", "refactor", "style", "test"]],
  },
};
