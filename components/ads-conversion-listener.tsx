'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

interface AdsConversionListenerProps {
  selector?: string
  sendTo?: string
}

export function AdsConversionListener({ selector = '[data-ads-conversion="free-trial"]', sendTo }: AdsConversionListenerProps) {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null
      if (!target) return

      const clickable = target.closest(selector) as HTMLElement | null
      if (!clickable) return

      // Prevent immediate navigation so the conversion can fire
      event.preventDefault()

      const plan = clickable.getAttribute('data-plan') ?? ''
      const href = clickable.getAttribute('data-href') ?? ''

      // Build send_to string from env or prop
      const conversionId = process.env.NEXT_PUBLIC_GADS_ID || 'AW-17372857270'
      const conversionLabel = process.env.NEXT_PUBLIC_GADS_LABEL_FREE_TRIAL
      const sendToFinal = sendTo || (conversionLabel ? `${conversionId}/${conversionLabel}` : undefined)

      let navigated = false
      const navigate = () => {
        if (navigated) return
        navigated = true
        if (href) window.location.assign(href)
      }

      try {
        if (typeof window.gtag === 'function') {
          if (sendToFinal) {
            window.gtag('event', 'conversion', {
              send_to: sendToFinal,
              value: 0,
              currency: 'EUR',
              plan,
              event_callback: navigate,
            })
            // Fallback in case callback doesn't fire
            setTimeout(navigate, 500)
          } else {
            // Fallback generic event if label isn't configured yet
            window.gtag('event', 'free_trial_click', { plan })
            setTimeout(navigate, 50)
          }
        } else {
          // gtag not ready; just navigate
          navigate()
        }
      } catch {
        navigate()
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [selector, sendTo])

  return null
}


