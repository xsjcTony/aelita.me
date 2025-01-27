import type { CSSProperties, FC } from 'react'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@utils/className.ts'


type SquaresProps = {
  className?: string
  direction?: 'down' | 'left' | 'right' | 'up'
  speed?: number
  squareSize?: number
  borderColor?: CSSProperties['stroke']
  hoverFillColor?: CSSProperties['fill']
}

type Grid = { x: number; y: number }
type GridOffset = Grid


const SquaresOld: FC<SquaresProps> = ({
  className,
  direction = 'down',
  speed = 1,
  squareSize = 100,
  borderColor = 'rgba(153,153,153,0.20)',
  hoverFillColor = '#222',
}) => {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<ReturnType<typeof requestAnimationFrame>>(null)

  const numSquaresX = useRef<number>(null)
  const numSquaresY = useRef<number>(null)

  const gridOffsetRef = useRef<GridOffset>({ x: 0, y: 0 })
  const [hoveredSquare, setHoveredSquare] = useState<Grid | null>(null)


  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas)
      return


    const ctx = canvas.getContext('2d')

    if (!ctx)
      return


    const abortController = new AbortController()


    const resizeCanvas = (): void => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      numSquaresX.current = Math.ceil(canvas.width / squareSize) + 1
      numSquaresY.current = Math.ceil(canvas.height / squareSize) + 1
    }

    window.addEventListener('resize', resizeCanvas, { signal: abortController.signal })
    resizeCanvas()

    const drawGrid = (): void => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const startX = Math.floor(gridOffsetRef.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffsetRef.current.y / squareSize) * squareSize

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffsetRef.current.x % squareSize)
          const squareY = y - (gridOffsetRef.current.y % squareSize)

          if (
            hoveredSquare
            && Math.floor((x - startX) / squareSize) === hoveredSquare.x
            && Math.floor((y - startY) / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(squareX, squareY, squareSize, squareSize)
          }

          ctx.strokeStyle = borderColor
          ctx.strokeRect(squareX, squareY, squareSize, squareSize)
        }
      }

      ctx.fillStyle = 'transparent'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    const updateAnimation = (): void => {
      const effectiveSpeed = Math.max(speed, 0.1)
      switch (direction) {
        case 'right': {
          gridOffsetRef.current.x = (gridOffsetRef.current.x - effectiveSpeed + squareSize) % squareSize
          break
        }
        case 'left': {
          gridOffsetRef.current.x = (gridOffsetRef.current.x + effectiveSpeed + squareSize) % squareSize
          break
        }
        case 'up': {
          gridOffsetRef.current.y = (gridOffsetRef.current.y + effectiveSpeed + squareSize) % squareSize
          break
        }
        case 'down': {
          gridOffsetRef.current.y = (gridOffsetRef.current.y - effectiveSpeed + squareSize) % squareSize
          break
        }
      }

      drawGrid()
      rafRef.current = requestAnimationFrame(updateAnimation)
    }

    // Track mouse hover
    const handleMouseMove = (event: MouseEvent): void => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const startX = Math.floor(gridOffsetRef.current.x / squareSize) * squareSize
      const startY = Math.floor(gridOffsetRef.current.y / squareSize) * squareSize

      const hoveredSquareX = Math.floor((mouseX + gridOffsetRef.current.x - startX) / squareSize)
      const hoveredSquareY = Math.floor((mouseY + gridOffsetRef.current.y - startY) / squareSize)

      setHoveredSquare({ x: hoveredSquareX, y: hoveredSquareY })
    }

    const handleMouseLeave = () => void setHoveredSquare(null)


    canvas.addEventListener('mousemove', handleMouseMove, { signal: abortController.signal })
    canvas.addEventListener('mouseleave', handleMouseLeave, { signal: abortController.signal })

    rafRef.current = requestAnimationFrame(updateAnimation)


    return () => {
      abortController.abort()
      rafRef.current && cancelAnimationFrame(rafRef.current)
    }
  }, [direction, speed, borderColor, hoverFillColor, hoveredSquare, squareSize])


  return (
    <canvas
      ref={canvasRef}
      className={cn('absolute w-full h-full border-none block', className)}
    />
  )
}


export default SquaresOld
