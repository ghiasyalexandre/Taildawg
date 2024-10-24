import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), "@react-three"],
  server: {
    port: 8097,
  }
  // resolve: {
  //   alias: {
  //       'react-dom': path.resolve(
  //           __dirname,
  //           'node_modules/react-dom/profiling'
  //       ),
  //       'scheduler/tracing': path.resolve(
  //           __dirname,
  //           'node_modules/scheduler/tracing-profiling'
  //       ),
  //   },
  // }

})
