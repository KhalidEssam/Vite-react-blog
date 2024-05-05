import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
    // Other plugins...
  ],
  define: {
    'process.env.AUTH0_DOMAIN': JSON.stringify(process.env.AUTH0_DOMAIN),
    'process.env.AUTH0_CLIENT_ID': JSON.stringify(process.env.AUTH0_CLIENT_ID),
  },
});