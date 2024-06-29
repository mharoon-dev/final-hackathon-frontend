export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      onwarn: (warning, warn) => {
        // Skip certain warnings
        if (warning.code === 'THIS_IS_UNDEFINED') return;
        // Use default for everything else
        warn(warning);
      }
    }
  }
});
