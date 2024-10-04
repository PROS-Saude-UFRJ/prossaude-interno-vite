import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";
export default defineConfig({
  plugins: [
    react(),
    process.env.NODE_ENV !== "production" &&
      eslint({
        cache: false,
        include: ["src/**/*.ts", "src/**/*.tsx"],
        exclude: ["node_modules"],
      }),
  ],
  server: {
    port: 3005,
  },
});
