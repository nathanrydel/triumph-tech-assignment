import { resolve } from 'path'

export default {
  base: '/triumph-tech-assignment/',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}