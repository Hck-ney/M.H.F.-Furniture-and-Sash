'use client'

import { useEffect, useRef, useState } from 'react'

type Slide = {
  src: string
  alt: string
  eyebrow?: string
  title?: string
}

type ImageCarouselProps = {
  slides: Slide[]
  label: string
  className?: string
}

export function ImageCarousel({ slides, label, className = '' }: ImageCarouselProps) {
  const [active, setActive] = useState(0)
  const touchStart = useRef<number | null>(null)

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 6500)
    return () => window.clearInterval(timer)
  }, [slides.length])

  function move(direction: number) {
    setActive((current) => (current + direction + slides.length) % slides.length)
  }

  return (
    <div
      className={`group relative overflow-hidden bg-muted ${className}`}
      onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return
        const distance = (event.changedTouches[0]?.clientX ?? 0) - touchStart.current
        if (Math.abs(distance) > 45) move(distance < 0 ? 1 : -1)
        touchStart.current = null
      }}
    >
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt={slide.alt}
          aria-hidden={index !== active}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${index === active ? 'scale-100 opacity-100' : 'scale-105 opacity-0'}`}
        />
      ))}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-foreground/55 to-transparent px-5 pb-5 pt-16 text-primary-foreground">
        <div>
          {slides[active].eyebrow && <p className="mb-2 text-[10px] uppercase tracking-[0.2em] opacity-75">{slides[active].eyebrow}</p>}
          {slides[active].title && <p className="font-serif text-2xl leading-none">{slides[active].title}</p>}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={() => move(-1)} aria-label={`Previous ${label}`} className="flex h-9 w-9 items-center justify-center border border-primary-foreground/60 text-lg transition-colors hover:bg-primary-foreground hover:text-primary">←</button>
          <button type="button" onClick={() => move(1)} aria-label={`Next ${label}`} className="flex h-9 w-9 items-center justify-center border border-primary-foreground/60 text-lg transition-colors hover:bg-primary-foreground hover:text-primary">→</button>
        </div>
      </div>
      <div className="absolute left-5 top-5 flex gap-1.5" aria-label={`${label} slides`} role="tablist">
        {slides.map((slide, index) => <button type="button" key={index} role="tab" aria-selected={index === active} aria-label={`Show ${label} slide ${index + 1}`} onClick={() => setActive(index)} className={`h-1 transition-all ${index === active ? 'w-8 bg-primary-foreground' : 'w-3 bg-primary-foreground/50'}`} />)}
      </div>
    </div>
  )
}
