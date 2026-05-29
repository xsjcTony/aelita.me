import type { ISourceOptions } from '@tsparticles/engine'


export type SparklesOptions = {
  backgroundColor?: string
  particleSize?: number
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}


export function createSparklesOptions({
  backgroundColor,
  particleSize,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}: SparklesOptions = {}): ISourceOptions {
  return {
    background: {
      color: {
        value: backgroundColor || 'black',
      },
    },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    pauseOnOutsideViewport: false,

    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: false,
          mode: 'repulse',
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: particleColor || '#fff',
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          'default': 'out',
        },
        random: false,
        speed: {
          min: 0.1,
          max: 1,
        },
        straight: false,
      },
      number: {
        density: {
          enable: true,
          width: 400,
          height: 400,
        },
        limit: {
          mode: 'delete',
          value: 0,
        },
        value: particleDensity || 120,
      },
      opacity: {
        value: {
          min: 0.1,
          max: 1,
        },
        animation: {
          count: 0,
          enable: true,
          speed: speed || 4,
          decay: 0,
          delay: 0,
          sync: false,
          mode: 'auto',
          startValue: 'random',
          destroy: 'none',
        },
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: particleSize || {
          min: minSize || 1,
          max: maxSize || 3,
        },
        animation: {
          count: 0,
          enable: false,
          speed: 5,
          decay: 0,
          delay: 0,
          sync: false,
          mode: 'auto',
          startValue: 'random',
          destroy: 'none',
        },
      },
    },
    detectRetina: true,
  }
}
