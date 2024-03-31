// vite.config.js
import { defineConfig } from "file:///C:/Users/gamal/Desktop/moi-app/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/gamal/Desktop/moi-app/node_modules/@vitejs/plugin-react/dist/index.mjs";
import legacy from "file:///C:/Users/gamal/Desktop/moi-app/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import autoprefixer from "file:///C:/Users/gamal/Desktop/moi-app/node_modules/autoprefixer/lib/autoprefixer.js";
import { createSvgIconsPlugin } from "file:///C:/Users/gamal/Desktop/moi-app/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import { resolve } from "path";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")]
    }),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"]
    })
  ],
  server: {
    hmr: {
      host: "localhost"
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer()
      ]
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/vendors/_bootstrap.scss";`
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxnYW1hbFxcXFxEZXNrdG9wXFxcXG1vaS1hcHBcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGdhbWFsXFxcXERlc2t0b3BcXFxcbW9pLWFwcFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvZ2FtYWwvRGVza3RvcC9tb2ktYXBwL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgbGVnYWN5IGZyb20gJ0B2aXRlanMvcGx1Z2luLWxlZ2FjeSc7XG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcic7XG5cbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcbiAgICAgIGljb25EaXJzOiBbcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcInNyYy9hc3NldHMvaWNvbnNcIildLFxuICAgIH0pLFxuICAgIGxlZ2FjeSh7XG4gICAgICB0YXJnZXRzOiBbJ2llID49IDExJ10sXG4gICAgICBhZGRpdGlvbmFsTGVnYWN5UG9seWZpbGxzOiBbJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSddLFxuICAgIH0pLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBobXI6IHtcbiAgICAgIGhvc3Q6IFwibG9jYWxob3N0XCJcbiAgICB9LFxuICB9LFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIGF1dG9wcmVmaXhlcigpLFxuICAgICAgXSxcbiAgICB9LFxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL3Njc3MvdmVuZG9ycy9fYm9vdHN0cmFwLnNjc3NcIjtgXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1IsU0FBUyxvQkFBb0I7QUFDblQsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGtCQUFrQjtBQUV6QixTQUFTLDRCQUE0QjtBQUNyQyxTQUFTLGVBQWU7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04scUJBQXFCO0FBQUEsTUFDbkIsVUFBVSxDQUFDLFFBQVEsUUFBUSxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFBQSxJQUN2RCxDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsVUFBVTtBQUFBLE1BQ3BCLDJCQUEyQixDQUFDLDZCQUE2QjtBQUFBLElBQzNELENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLGFBQWE7QUFBQSxNQUNmO0FBQUEsSUFDRjtBQUFBLElBQ0EscUJBQXFCO0FBQUEsTUFDbkIsTUFBTTtBQUFBLFFBQ0osZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
