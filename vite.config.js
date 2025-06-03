import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/trauma-informed-ui/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        atoms: resolve(__dirname, "src/components/atoms/index.html"),
        atomicStructure: resolve(
          __dirname,
          "src/components/atomic-structure.html"
        ),
        atomicComponents: resolve(
          __dirname,
          "src/components/atoms/atomic-components.html"
        ),
        typography: resolve(__dirname, "src/components/atoms/typography.html"),
        colorSystem: resolve(
          __dirname,
          "src/components/atoms/color-system.html"
        ),
        layout: resolve(__dirname, "src/components/atoms/layout.html"),
        buttonSystem: resolve(
          __dirname,
          "src/components/atoms/buttons/button-system.html"
        ),
        primaryButton: resolve(
          __dirname,
          "src/components/atoms/buttons/primary-button.html"
        ),
        secondaryButton: resolve(
          __dirname,
          "src/components/atoms/buttons/secondary-button.html"
        ),
        tertiaryButton: resolve(
          __dirname,
          "src/components/atoms/buttons/tertiary-button.html"
        ),
        emergencyExitButton: resolve(
          __dirname,
          "src/components/atoms/buttons/emergency-exit-button.html"
        ),
        // Status indicators
        progressBar: resolve(
          __dirname,
          "src/components/atoms/status-indicators/progress-bar.html"
        ),
        statusBadge: resolve(
          __dirname,
          "src/components/atoms/status-indicators/status-badge.html"
        ),
        loadingStates: resolve(
          __dirname,
          "src/components/atoms/status-indicators/loading-states.html"
        ),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
