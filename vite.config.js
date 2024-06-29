import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn: (warning, warn) => {
        // Ignore specific warnings
        if (warning.code === 'THIS_IS_UNDEFINED') return;
        
        // Continue with default behavior
        warn(warning);
      }
    }
  }
});
