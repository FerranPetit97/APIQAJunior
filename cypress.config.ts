import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '2wa6o4',
  watchForFileChanges: false,
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
