import { resolve } from 'path'

export default {
  base: '/triumph-tech-assignment/',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    emptyOutDir: true // Automatically clear /dist before building
  },
  server: {
    port: 8080
  }
}