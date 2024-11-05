import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import vercel from "vite-plugin-vercel";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: process.env.PORT as unknown as number,
    strictPort: true,
    watch: {
      usePolling: true,
    },
    // proxy: {
    //   "/api": "http://0.0.0.0:8000",
    // },
  },
  plugins: [
    react(),
    vercel(),
    svgr({
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  vercel: {
    rewrites: [
      {
        source: "/(.*)",
        destination: "/index.html",
      },
    ],
  },
});
