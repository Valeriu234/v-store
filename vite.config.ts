import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
          @import "./src/constants";

          /* Apply the imports globally */
          :global {
            @import "src/constants";
          }`,
			},
		},
	},

	plugins: [react(), svgr()],
});
