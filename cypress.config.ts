// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: "pnyuzr",
    baseUrl: "http://localhost:8080",
    supportFile: false,
    fixturesFolder: false,
    downloadsFolder: "./cypress/downloads",
    screenshotsFolder: "./cypress/screenshots",
    videosFolder: "./cypress/video",
    specPattern: "./cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    video: false,
  },
});
