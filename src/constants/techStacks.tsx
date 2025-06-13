import type { TechStackItem } from '@components/TechStackCards'
import {
  SiAstroHex,
  SiCssHex,
  SiDrizzleHex,
  SiHtml5Hex,
  SiJavascriptHex,
  SiLaravelHex,
  SiMysqlHex,
  SiNestjsHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiNuxtHex,
  SiPhpHex,
  SiPostgresqlHex,
  SiPythonHex,
  SiReactHex,
  SiRedis,
  SiRedisHex,
  SiSequelizeHex,
  SiSolidHex,
  SiSvelteHex,
  SiTailwindcssHex,
  SiTypescriptHex,
  SiViteHex,
  SiVitestHex,
  SiVuedotjsHex,
} from '@icons-pack/react-simple-icons'
import {
  AstroDark,
  AstroUrl,
  Bun,
  BunUrl,
  CSSNew,
  CSSNewUrl,
  DrizzleORMDark,
  DrizzleORMUrl,
  HTML5,
  HTML5Url,
  JavaScript,
  JavaScriptUrl,
  Laravel,
  LaravelUrl,
  MarkdownDark,
  MarkdownUrl,
  MySQL,
  MySQLUrl,
  NestJS,
  NestJSUrl,
  NextjsUrl,
  NodejsUrl,
  Nuxt,
  NuxtUrl,
  PhpDark,
  PhpUrl,
  Playwright,
  PlaywrightUrl,
  PostgreSQL,
  PostgreSQLUrl,
  Python,
  PythonUrl,
  ReactDark,
  RedisUrl,
  Sequelize,
  SequelizeUrl,
  SolidjsUrl,
  Svelte,
  SvelteUrl,
  TailwindCSS,
  TailwindCSSUrl,
  TypeScript,
  TypeScriptUrl,
  UnoCSS,
  UnoCSSUrl,
  ViteUrl,
  Vitest,
  VitestUrl,
  Vue,
} from '@ridemountainpig/svgl-react'
import { cn } from '@utils/className.ts'


const CLASSNAMES = 'select-none max-h-[1em] max-w-[1em] drop-shadow-[0_0_0.8rem_color-mix(in_srgb,_var(--glow-color)_40%,_transparent)]'


export const TECH_STACK_LANGUAGES: TechStackItem[] = [
  {
    name: 'TypeScript',
    logo: <TypeScript className={CLASSNAMES} />,
    glowColor: SiTypescriptHex,
    url: TypeScriptUrl,
  },
  {
    name: 'JavaScript',
    logo: <JavaScript className={CLASSNAMES} />,
    glowColor: SiJavascriptHex,
    url: JavaScriptUrl,
  },
  {
    name: 'PHP',
    logo: <PhpDark className={CLASSNAMES} />,
    glowColor: SiPhpHex,
    url: PhpUrl,
  },
  {
    name: 'HTML 5',
    logo: <HTML5 className={CLASSNAMES} />,
    glowColor: SiHtml5Hex,
    url: HTML5Url,
  },
  {
    name: 'CSS 3',
    logo: <CSSNew className={CLASSNAMES} />,
    glowColor: SiCssHex,
    url: CSSNewUrl,
  },
  {
    name: 'Python',
    logo: <Python className={CLASSNAMES} />,
    glowColor: SiPythonHex,
    url: PythonUrl,
  },
  {
    name: 'Markdown',
    logo: <MarkdownDark className={CLASSNAMES} />,
    glowColor: '#ffffff',
    url: MarkdownUrl,
  },
]


export const TECH_STACK_FRONTEND: TechStackItem[] = [
  {
    name: 'React',
    logo: <ReactDark className={CLASSNAMES} />,
    glowColor: SiReactHex,
    url: 'https://react.dev/?uwu=true',
  },
  {
    name: 'Vue.js',
    logo: <Vue className={CLASSNAMES} />,
    glowColor: SiVuedotjsHex,
    url: 'https://vuejs.org/?uwu=true',
  },
  {
    name: 'Astro',
    logo: <AstroDark className={CLASSNAMES} />,
    glowColor: SiAstroHex,
    url: AstroUrl,
  },
  {
    name: 'Svelte',
    logo: <Svelte className={CLASSNAMES} />,
    glowColor: SiSvelteHex,
    url: SvelteUrl,
  },
  {
    name: 'Solid.js',
    logo: <img alt="Solid.js logo" className={CLASSNAMES} src="/assets/images/solid-js-logo.svg" />,
    glowColor: SiSolidHex,
    url: SolidjsUrl,
  },
  {
    name: 'Tailwind CSS',
    logo: <TailwindCSS className={CLASSNAMES} />,
    glowColor: SiTailwindcssHex,
    url: TailwindCSSUrl,
  },
  {
    name: 'UnoCSS',
    logo: <UnoCSS className={CLASSNAMES} />,
    glowColor: '#666666',
    url: UnoCSSUrl,
  },
  {
    name: 'Vite',
    logo: <img alt="Vite logo" className={CLASSNAMES} src="https://vite.dev/logo.svg" />,
    glowColor: SiViteHex,
    url: ViteUrl,
  },
  {
    name: 'Next.js',
    logo: <img alt="Next.js logo" className={CLASSNAMES} src="/assets/images/next-js-logo.svg" />,
    glowColor: '#ffffff',
    url: NextjsUrl,
  },
  {
    name: 'Nuxt',
    logo: <Nuxt className={CLASSNAMES} />,
    glowColor: SiNuxtHex,
    url: NuxtUrl,
  },
  {
    name: 'React Native',
    logo: (
      <img
        alt="React Native logo"
        className={cn(CLASSNAMES, 'size-full')}
        src="/assets/images/react-native-logo.svg"
      />
    ),
    glowColor: SiReactHex,
    url: 'https://reactnative.dev/',
  },
  {
    name: 'Vitest',
    logo: <Vitest className={CLASSNAMES} />,
    glowColor: SiVitestHex,
    url: VitestUrl,
  },
  {
    name: 'Playwright',
    logo: <Playwright className={CLASSNAMES} />,
    glowColor: '#d45247',
    url: PlaywrightUrl,
  },
]


export const TECH_STACK_BACKEND: TechStackItem[] = [
  {
    name: 'Node.js',
    logo: <SiNodedotjs className={CLASSNAMES} color="default" size="100%" />,
    glowColor: SiNodedotjsHex,
    url: NodejsUrl,
  },
  {
    name: 'Bun',
    logo: <Bun className={CLASSNAMES} />,
    glowColor: '#fbf0df',
    url: BunUrl,
  },
  {
    name: 'Laravel',
    logo: <Laravel className={CLASSNAMES} />,
    glowColor: SiLaravelHex,
    url: LaravelUrl,
  },
  {
    name: 'NestJS',
    logo: <NestJS className={CLASSNAMES} />,
    glowColor: SiNestjsHex,
    url: NestJSUrl,
  },
  {
    name: 'MySQL',
    logo: <MySQL className={CLASSNAMES} />,
    glowColor: SiMysqlHex,
    url: MySQLUrl,
  },
  {
    name: 'PostgreSQL',
    logo: <PostgreSQL className={CLASSNAMES} />,
    glowColor: SiPostgresqlHex,
    url: PostgreSQLUrl,
  },
  {
    name: 'Redis',
    logo: <SiRedis className={CLASSNAMES} color="default" size="100%" />,
    glowColor: SiRedisHex,
    url: RedisUrl,
  },
  {
    name: 'Drizzle ORM',
    logo: <DrizzleORMDark className={CLASSNAMES} />,
    glowColor: SiDrizzleHex,
    url: DrizzleORMUrl,
  },
  {
    name: 'Sequelize',
    logo: <Sequelize className={CLASSNAMES} />,
    glowColor: SiSequelizeHex,
    url: SequelizeUrl,
  },
]
