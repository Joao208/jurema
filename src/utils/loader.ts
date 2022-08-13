import type { ImageLoaderProps } from 'next/image'

export const loader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
