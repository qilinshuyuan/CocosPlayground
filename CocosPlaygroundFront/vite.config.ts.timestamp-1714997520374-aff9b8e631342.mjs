// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/%E9%A1%B9%E7%9B%AE/%E5%89%8D%E7%AB%AF/demo/vue-project/node_modules/.pnpm/vite@5.2.11_@types+node@20.12.8_less@4.2.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E9%A1%B9%E7%9B%AE/%E5%89%8D%E7%AB%AF/demo/vue-project/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.11_@types+node@20.12.8_less@4.2.0__vue@3.4.26_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/%E9%A1%B9%E7%9B%AE/%E5%89%8D%E7%AB%AF/demo/vue-project/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.2.11_@types+node@20.12.8_less@4.2.0__vue@3.4.26_typescript@5.4.5_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import VueDevTools from "file:///D:/%E9%A1%B9%E7%9B%AE/%E5%89%8D%E7%AB%AF/demo/vue-project/node_modules/.pnpm/vite-plugin-vue-devtools@7.1.3_rollup@4.17.2_vite@5.2.11_@types+node@20.12.8_less@4.2.0__vue@3.4.26_typescript@5.4.5_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import Components from "file:///D:/%E9%A1%B9%E7%9B%AE/%E5%89%8D%E7%AB%AF/demo/vue-project/node_modules/.pnpm/unplugin-vue-components@0.27.0_@babel+parser@7.24.5_rollup@4.17.2_vue@3.4.26_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/vite.js";
import { AntDesignVueResolver } from "file:///D:/%E9%A1%B9%E7%9B%AE/%E5%89%8D%E7%AB%AF/demo/vue-project/node_modules/.pnpm/unplugin-vue-components@0.27.0_@babel+parser@7.24.5_rollup@4.17.2_vue@3.4.26_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/resolvers.js";
import AutoImport from "file:///D:/%E9%A1%B9%E7%9B%AE/%E5%89%8D%E7%AB%AF/demo/vue-project/node_modules/.pnpm/unplugin-auto-import@0.17.5_rollup@4.17.2/node_modules/unplugin-auto-import/dist/vite.js";
var __vite_injected_original_import_meta_url = "file:///D:/%E9%A1%B9%E7%9B%AE/%E5%89%8D%E7%AB%AF/demo/vue-project/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VueDevTools(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-import.d.ts",
      resolvers: [AntDesignVueResolver()]
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          resolveIcons: true,
          importStyle: "css-in-js"
          // 导入样式文件
          // importStyle: false, // css in js
        })
      ]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTk4NzlcdTc2RUVcXFxcXHU1MjREXHU3QUVGXFxcXGRlbW9cXFxcdnVlLXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1OTg3OVx1NzZFRVxcXFxcdTUyNERcdTdBRUZcXFxcZGVtb1xcXFx2dWUtcHJvamVjdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUU5JUExJUI5JUU3JTlCJUFFLyVFNSU4OSU4RCVFNyVBQiVBRi9kZW1vL3Z1ZS1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IEFudERlc2lnblZ1ZVJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcblxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSBcInVucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGVcIjtcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG4gICAgdnVlSnN4KCksXG4gICAgVnVlRGV2VG9vbHMoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcInZ1ZVwiLCAndnVlLXJvdXRlciddLFxuICAgICAgZHRzOiBcInNyYy9hdXRvLWltcG9ydC5kLnRzXCIsXG4gICAgICByZXNvbHZlcnM6IFtBbnREZXNpZ25WdWVSZXNvbHZlcigpXVxuICAgIH0pLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEFudERlc2lnblZ1ZVJlc29sdmVyKHtcbiAgICAgICAgICByZXNvbHZlSWNvbnM6IHRydWUsXG4gICAgICAgICAgaW1wb3J0U3R5bGU6ICdjc3MtaW4tanMnLCAvLyBcdTVCRkNcdTUxNjVcdTY4MzdcdTVGMEZcdTY1ODdcdTRFRjZcbiAgICAgICAgICAvLyBpbXBvcnRTdHlsZTogZmFsc2UsIC8vIGNzcyBpbiBqc1xuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSksXG5cbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVMsU0FBUyxlQUFlLFdBQVc7QUFFMVUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDRCQUE0QjtBQUVyQyxPQUFPLGdCQUFnQjtBQVQ0SSxJQUFNLDJDQUEyQztBQVdwTixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsTUFDVCxTQUFTLENBQUMsT0FBTyxZQUFZO0FBQUEsTUFDN0IsS0FBSztBQUFBLE1BQ0wsV0FBVyxDQUFDLHFCQUFxQixDQUFDO0FBQUEsSUFDcEMsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsV0FBVztBQUFBLFFBQ1QscUJBQXFCO0FBQUEsVUFDbkIsY0FBYztBQUFBLFVBQ2QsYUFBYTtBQUFBO0FBQUE7QUFBQSxRQUVmLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFFSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
