import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true // 소스맵 생성 활성화
  },
  base: "https://darock-dev.github.io/Portfolio__publisher/",
});
