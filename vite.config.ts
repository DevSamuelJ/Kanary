import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Comentei o base abaixo pois na Discloud você roda na raiz do domínio.
  // Se deixar "/Kanary/", o site vai quebrar na Discloud.
  // base: "/Kanary/", 

  plugins: [react(), tailwindcss()],
  
  build: {
    outDir: "docs", // Mantive sua config de saída
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  
  server: {
    port: 8080,
    host: "0.0.0.0",
    // AQUI ESTÁ A CORREÇÃO DO ERRO DA TELA PRETA:
    allowedHosts: [
      "kanaryfrontend.discloud.app"
    ],
    hmr: {
      overlay: false,
    },
  },
  
  // Adicionei também no preview por precaução, caso seu comando de start use 'vite preview'
  preview: {
    port: 8080,
    host: "0.0.0.0",
    allowedHosts: [
      "kanaryfrontend.discloud.app"
    ],
  },

  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif", "**/*.svg"],
});