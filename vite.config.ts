import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    optimizeDeps: {
        exclude: ["mark-api-react"],
    },
    resolve: {
        dedupe: ["react", "react-dom", "react-router-dom"],
        alias: {
            react: path.resolve(__dirname, "./node_modules/react"),
            "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
            "react-router-dom": path.resolve(__dirname, "./node_modules/react-router-dom"),
        },
    },
    base: "render-test",
})
