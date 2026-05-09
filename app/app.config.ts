export default defineAppConfig({
  seo: {
    title: 'LaraClaw',
    description: 'An AI assistant for your Laravel application. Speaks Telegram, Slack, Email, HTTP, and the terminal.',
    url: 'https://laraclaw.dev',
    socials: {
      github: 'laraclaw/laraclaw',
    },
  },
  docs: {
    github: 'laraclaw/laraclaw',
  },

  title: 'LaraClaw',
  description: 'An AI assistant for your Laravel application. Speaks Telegram, Slack, Email, HTTP, and the terminal.',
  url: 'https://laraclaw.dev',

  ui: {
    colors: {
      primary: 'orange',
      neutral: 'zinc',
    },
  },

  docus: {
    footer: {
      credits: {
        text: 'Made with LaraClaw',
        href: 'https://github.com/laraclaw/laraclaw',
      },
    },
  },

  aside: {
    level: 1,
    collapsed: false,
    exclude: [],
  },

  header: {
    title: 'LaraClaw',
  },
})
