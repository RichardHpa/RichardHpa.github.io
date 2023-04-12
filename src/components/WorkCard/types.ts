import type { ReactNode } from 'react'

export type direction = 'row' | 'row-reverse'

export interface WorkCardProps {
  title: string
  subtitle: string
  description: string
  image?: string
  actions?: ReactNode
  direction: direction
}
