import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "WebletKit",
      formats: ["es", "umd"],
      fileName: (format) => format === "umd" ? "weblet-kit.min.js" : `weblet-kit.${format}.js`,
    },
  },
});
