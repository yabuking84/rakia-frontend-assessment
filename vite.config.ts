import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'
import million from "million/compiler";
import svgr from "vite-plugin-svgr";
const projPath = path.resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    million.vite({
      auto: true,
    }),
    svgr({
      svgrOptions: {
        svgProps: {
          fill: "currentColor",
          width: "1em",
          height: "1em",
        },
      },
      include: "**/*.svg",
    }),
  ],
  resolve: {
    alias: {
        '@': `${projPath}/src`,
        '@PUBLIC': `${projPath}/public`,
    },
},  
});
