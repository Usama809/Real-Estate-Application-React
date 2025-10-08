// import { defineConfig } from "vite";
// import tsconfigPaths from "vite-tsconfig-paths";
// import tailwindcss from "@tailwindcss/vite";
// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": {
//         target: "http://localhost:3000",
//         secure: false,
//       },
//     },
//   },
//   plugins: [tailwindcss(), tsconfigPaths()],
// });

import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },

  plugins: [tailwindcss(), tsconfigPaths()],

  // ✅ Add this block to help Vite resolve dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "redux-persist",
      "redux-persist/integration/react"
    ]
  }
});
