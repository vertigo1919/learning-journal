import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/learning-journal/jukebox/', 

  build: {
    // 2. SET THE OUTPUT DIRECTORY
    // We use a relative path to go UP 4 levels to the repo root, 
    // then into a "docs" folder.
    outDir: '../../../../docs/jukebox',
    
    // 3. CLEANUP
    // This clears the folder before building so old files don't pile up
    emptyOutDir: true, 
  }
});
