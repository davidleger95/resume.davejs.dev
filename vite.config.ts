/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import linaria from "@linaria/vite";
// import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    linaria({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
    // AutoImport({
    //   imports: ["vitest"],
    //   dts: true, // generate TypeScript declaration
    // }),
  ],
  server: {
    host: "resume.localtest.me",
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
