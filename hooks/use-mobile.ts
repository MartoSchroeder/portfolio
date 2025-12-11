// ============================================================================
// USE MOBILE HOOK
// ============================================================================
// This is a utility hook that detects if the user is on a mobile device.
// It checks the screen width and returns true if it's below the breakpoint.
//
// HOW IT WORKS:
// - Monitors the window width
// - Returns true if width is less than 768px (mobile)
// - Returns false if width is 768px or more (desktop/tablet)
// - Updates automatically when window is resized
//
// TO CHANGE MOBILE BREAKPOINT:
// - Modify the MOBILE_BREAKPOINT constant below (currently 768px)
// - This is the width at which the site switches from mobile to desktop layout
// ============================================================================

import * as React from 'react'

// MOBILE BREAKPOINT: Width in pixels that separates mobile from desktop
// Screens narrower than this are considered "mobile"
// You can change this value if you want a different breakpoint
const MOBILE_BREAKPOINT = 768

// ============================================================================
// HOOK FUNCTION
// ============================================================================
// This hook can be used in any component to check if the user is on mobile.
// Usage: const isMobile = useIsMobile()
// ============================================================================
export function useIsMobile() {
  // STATE: Track whether we're on mobile (undefined initially, then true/false)
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  // EFFECT: Set up window resize listener
  // This runs when the component first loads and whenever the window is resized.
  // It checks the window width and updates isMobile accordingly.
  React.useEffect(() => {
    // Create a media query listener for the mobile breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // FUNCTION: Called when window size changes
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Set up the listener
    mql.addEventListener('change', onChange)
    
    // Check initial size
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Cleanup: Remove listener when component unmounts
    return () => mql.removeEventListener('change', onChange)
  }, [])

  // RETURN: Convert undefined to false (safer for boolean checks)
  return !!isMobile
}

