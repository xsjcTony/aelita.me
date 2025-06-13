import 'react'


declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: number | string
  }

  interface HTMLAttributes {
    [key: `data-${string}`]: string | undefined
  }
}
