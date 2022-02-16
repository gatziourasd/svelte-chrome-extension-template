import svelte from "rollup-plugin-svelte";
import css from "rollup-plugin-css-only";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";

const isProduction = !process.env.ROLLUP_WATCH;

export default [
  {
    input: "./src/background/background.js",
    output: {
      format: "iife",
      sourcemap: false,
      file: "./dist/build/background/background-bundle.js",
    },
    plugins: [
      replace({
        isProduction: isProduction,
        preventAssignment: true,
      }),
    ],
  },
  {
    input: "./src/foreground/foreground.js",
    output: {
      format: "iife",
      sourcemap: false,
      file: "./dist/build/foreground/foreground-bundle.js",
    },
    plugins: [
      replace({
        isProduction: isProduction,
        preventAssignment: true,
      }),
    ],
  },
  {
    input: "./src/popup/popup.js",
    output: {
      format: "iife",
      sourcemap: false,
      name: "app",
      file: "./dist/build/popup/popup-bundle.js",
    },
    plugins: [
      replace({
        isProduction: isProduction,
        preventAssignment: true,
      }),
      svelte({
        compilerOptions: {
          dev: !isProduction,
        },
      }),
      css({ output: "bundle.css" }),
      resolve({
        browser: true,
        dedupe: ["svelte"],
      }),
      commonjs(),
      !isProduction && serve(),
      !isProduction && livereload("./dist"),
      isProduction && terser(),
    ],
  },
];

function serve() {
  let server;

  const toExit = () => {
    if (server) server.kill(0);
  };

  return {
    writeBundle() {
      if (server) return;
      server = require("child_process").spawn(
        "npm",
        ["run", "serve", "--", "--dev"],
        {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        }
      );

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}
