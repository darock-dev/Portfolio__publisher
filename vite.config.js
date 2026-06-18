import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: true // 소스맵 생성 활성화
  },
  base: "https://darock-dev.github.io/Portfolio__publisher/",
});
