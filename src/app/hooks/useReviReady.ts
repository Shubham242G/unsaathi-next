'use client'

import { useEffect } from 'react';

// Extend Window interface to include __REVI_READY__
declare global {
  interface Window {
    __REVI_READY__?: boolean;
  }
}

export const useReviReady = (isReady: boolean, timeout: number = 30000): void => {
  useEffect(() => {
    if (isReady) {
      // Small delay to ensure DOM is fully updated after state change
      const timer = setTimeout(() => {
        window.__REVI_READY__ = true;
        console.log('[useReviReady] ✅ Page ready for capture');
      }, 100);
      return () => clearTimeout(timer);
    }
    
    // Not ready yet - reset flag
    window.__REVI_READY__ = false;
    console.log('[useReviReady] ⏳ Waiting for data...');
    
    // Safety timeout - force ready after timeout
    const timeoutId = setTimeout(() => {
      console.warn('[useReviReady] ⚠️ Timeout reached, forcing ready');
      window.__REVI_READY__ = true;
    }, timeout);
    
    return () => {
      clearTimeout(timeoutId);
      // Don't force ready on cleanup unless it's still false
      if (window.__REVI_READY__ === false) {
        window.__REVI_READY__ = true;
      }
    };
  }, [isReady, timeout]);
};