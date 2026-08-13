export default defineNuxtConfig({
  extends: ['docus'],

  site: {
    url: 'https://laraclaw.ai',
    name: 'Laraclaw',
  },

  llms: {
    domain: 'https://laraclaw.ai',
  },
})
