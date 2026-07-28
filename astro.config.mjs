import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.curtis-li.com",
  output: "static",
  build: {
    format: "directory"
  }
});
