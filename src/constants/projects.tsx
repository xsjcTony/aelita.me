import type { Project } from '~pages/_views/Projects'
import { SiEslint } from '@icons-pack/react-simple-icons'
import {
  AntDesign,
  AntDesignUrl,
  ReactDark,
  UnoCSS,
  UnoCSSUrl,
  Vite,
  Vitest,
  VitestUrl,
} from '@ridemountainpig/svgl-react'


export const PROJECTS_OSS: Project[] = [
  {
    logo: (
      <img
        alt="unocss-preset-animations logo"
        src="https://unocss-preset-animations.aelita.me/logo.svg"
      />
    ),
    name: 'unocss-preset-animations',
    description: '💅 Unleash powerful animations for UnoCSS',
    link: 'https://unocss-preset-animations.aelita.me/',
  },
  {
    logo: (
      <img
        alt="remark-magic-link logo"
        src="https://remark-magic-link.aelita.me/logo.svg"
      />
    ),
    name: 'remark-magic-link',
    description: '🔌 Turn `{text}` syntax into link with icon with ease',
    link: 'https://remark-magic-link.aelita.me/',
  },
  {
    logo: <Vite />,
    name: 'vite-plugin-inject-html',
    description: '💉 Inject element nodes to the entry HTML file for your Vite project',
    link: 'https://docs.aelita.me/docs/vite-plugin-inject-html.html',
  },
  {
    logo: <SiEslint color="default" />,
    name: 'ESLint Config',
    description: '⚙️ Progressive ESLint config made easy',
    link: 'https://github.com/xsjcTony/eslint-config',
  },
]


export const PROJECTS_WEBSITES_AND_TOOLS: Project[] = [
  {
    logo: (
      <img
        alt="youtube playlist randomizer logo"
        src="https://youtube-randomizer.aelita.me/favicon.png"
      />
    ),
    name: 'YouTube Playlist Randomizer',
    description: '🎲 Randomize your Youtube playlists with enhanced UI',
    link: 'https://youtube-randomizer.aelita.me/',
  },
  {
    logo: (
      <img
        alt="wordle logo"
        src="https://www.nytimes.com/games-assets/v2/assets/wordle/page-icons/wordle-icon.svg"
      />
    ),
    name: 'Wordle',
    description: '🧠 Play the classic Wordle game without limitations',
    link: 'https://wordle.aelita.me/',
  },
]


export const PROJECTS_CONTRIBUTION: Project[] = [
  {
    logo: <AntDesign />,
    name: 'Ant Design',
    description: '🧩 An enterprise-class UI design language and React UI library',
    link: AntDesignUrl,
  },
  {
    logo: <UnoCSS />,
    name: 'UnoCSS',
    description: '🎨 The instant on-demand atomic CSS engine',
    link: UnoCSSUrl,
  },
  {
    logo: <img alt="VitePress logo" src="https://vitepress.dev/vitepress-logo-large.svg" />,
    name: 'VitePress',
    description: '📖 Vite & Vue powered static site generator',
    link: 'https://vitepress.dev/',
  },
  {
    logo: <Vitest />,
    name: 'Vitest',
    description: '🧪 Next generation testing framework powered by Vite',
    link: VitestUrl,
  },
  {
    logo: <ReactDark />,
    name: 'React Native',
    description: '📱 A framework for building native applications using React',
    link: 'https://reactnative.dev/',
  },
  {
    logo: <img alt="DefinitelyTyped logo" src="https://github.com/DefinitelyTyped.png" />,
    name: 'DefinitelyTyped',
    description: '✨ The repository for high quality TypeScript type definitions',
    link: 'https://definitelytyped.org/',
  },
  {
    logo: <img alt="Egg.js logo" src="https://eggjs.org/logo.svg" />,
    name: 'Egg',
    description: '🥚 Born to build better enterprise frameworks and apps with Node.js & Koa',
    link: 'https://eggjs.org/',
  },
]
