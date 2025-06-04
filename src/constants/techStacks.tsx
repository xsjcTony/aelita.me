import type { TechStackItem } from '@components/TechStackCards'
import {
  SiAstroHex,
  SiBunHex,
  SiDrizzle,
  SiDrizzleHex,
  SiJavascript,
  SiJavascriptHex,
  SiLaravel,
  SiLaravelHex,
  SiMarkdown,
  SiMarkdownHex,
  SiMysqlHex,
  SiNestjs,
  SiNestjsHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNuxt,
  SiNuxtHex,
  SiPhp,
  SiPhpHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiReact,
  SiReactHex,
  SiRedis,
  SiRedisHex,
  SiSequelizeHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
  SiViteHex,
  SiVitestHex,
  SiVuedotjsHex,
} from '@icons-pack/react-simple-icons'


export const TECH_STACK_LANGUAGES: TechStackItem[] = [
  {
    name: 'TypeScript',
    logo: <SiTypescript color="default" size="1em" />,
    glowColor: SiTypescriptHex,
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'JavaScript',
    logo: <SiJavascript color="default" size="1em" />,
    glowColor: SiJavascriptHex,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'PHP',
    logo: <SiPhp color="default" size="1em" />,
    glowColor: SiPhpHex,
    url: 'https://www.php.net/',
  },
  {
    name: 'Markdown',
    logo: <SiMarkdown color="default" size="1em" />,
    glowColor: SiMarkdownHex,
    url: 'https://www.markdownguide.org/',
  },
]


export const TECH_STACK_FRONTEND: TechStackItem[] = [
  {
    name: 'React',
    logo: <SiReact color="default" size="1em" />,
    glowColor: SiReactHex,
    url: 'https://react.dev/?uwu=true',
  },
  {
    name: 'Vue.js',
    logo: '/assets/images/vue-logo.svg',
    glowColor: SiVuedotjsHex,
    url: 'https://vuejs.org/?uwu=true',
  },
  {
    name: 'Astro',
    logo: '/assets/images/astro-logo.svg',
    glowColor: SiAstroHex,
    url: 'https://astro.build/',
  },
  {
    name: 'Tailwind CSS',
    logo: <SiTailwindcss color="default" size="1em" />,
    glowColor: SiTailwindcssHex,
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'UnoCSS',
    logo: 'https://unocss.dev/logo.svg',
    glowColor: '#666666',
    url: 'https://unocss.dev/',
  },
  {
    name: 'Vite',
    logo: 'https://vite.dev/logo.svg',
    glowColor: SiViteHex,
    url: 'https://vite.dev/',
  },
  {
    name: 'Next.js',
    logo: '/assets/images/next-logo.svg',
    glowColor: '#ffffff',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Nuxt',
    logo: <SiNuxt color="default" size="1em" />,
    glowColor: SiNuxtHex,
    url: 'https://nuxt.com/',
  },
  {
    name: 'React Native',
    logo: '/assets/images/react-native-logo.svg',
    glowColor: SiReactHex,
    url: 'https://reactnative.dev/',
    style: { height: '1.2em' },
  },
  {
    name: 'Vitest',
    logo: 'https://vitest.dev/logo.svg',
    glowColor: SiVitestHex,
    url: 'https://vitest.dev/',
  },
  {
    name: 'Playwright',
    logo: 'https://playwright.dev/img/playwright-logo.svg',
    glowColor: '#d45247',
    url: 'https://playwright.dev/',
  },
]


export const TECH_STACK_BACKEND: TechStackItem[] = [
  {
    name: 'Node.js',
    logo: <SiNodedotjs color="default" size="1em" />,
    glowColor: SiNodedotjsHex,
    url: 'https://nodejs.org/',
  },
  {
    name: 'Bun',
    logo: 'https://bun.sh/logo.svg',
    glowColor: SiBunHex,
    url: 'https://bun.sh/',
  },
  {
    name: 'Laravel',
    logo: <SiLaravel color="default" size="1em" />,
    glowColor: SiLaravelHex,
    url: 'https://laravel.com/',
  },
  {
    name: 'NestJS',
    logo: <SiNestjs color="default" size="1em" />,
    glowColor: SiNestjsHex,
    url: 'https://nestjs.com/',
  },
  {
    name: 'MySQL',
    logo: '/assets/images/mysql-logo.svg',
    glowColor: SiMysqlHex,
    url: 'https://www.mysql.com/',
  },
  {
    name: 'PostgreSQL',
    logo: <SiPostgresql color="default" size="1em" />,
    glowColor: SiPostgresqlHex,
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'Redis',
    logo: <SiRedis color="default" size="1em" />,
    glowColor: SiRedisHex,
    url: 'https://redis.io/',
  },
  {
    name: 'Drizzle ORM',
    logo: <SiDrizzle color="default" size="1em" />,
    glowColor: SiDrizzleHex,
    url: 'https://orm.drizzle.team/',
  },
  {
    name: 'Sequelize',
    logo: 'https://sequelize.org/img/logo.svg',
    glowColor: SiSequelizeHex,
    url: 'https://sequelize.org/',
  },
]
