import { RefObject, useEffect, useMemo, useState } from "react"

export const useOnScreen = (ref: RefObject<HTMLElement>) => {

  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])


  useEffect(() => {
    if (ref.current == null) return
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return isIntersecting
}