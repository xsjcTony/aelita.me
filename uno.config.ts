import { presetRemToPx } from '@unocss/preset-rem-to-px'
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import type { Theme } from '@unocss/preset-uno'


export default defineConfig<Theme>({
  presets: [
    presetUno(),
    presetIcons(),
    presetRemToPx({ baseFontSize: 4 }),
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives(),
  ],
  theme: {
    animation: {
      keyframes: {
        'aurora-bg': '{0% {background-position: 50% 50%, 50% 50%;} 100% {background-position: 350% 50%, 350% 50%;}}',
      },
      durations: {
        'aurora-bg': '60s',
      },
      timingFns: {
        'aurora-bg': 'linear',
      },
      counts: {
        'aurora-bg': 'infinite',
      },
    },
  },
})
