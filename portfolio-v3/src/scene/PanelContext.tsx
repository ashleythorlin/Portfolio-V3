import React, { createContext, useContext, useRef, MutableRefObject } from 'react';

const PanelContext = createContext<MutableRefObject<HTMLElement | null>>({ current: null });

export function PanelPortalProvider({ children }: { children: React.ReactNode }) {
  const portalRef = useRef<HTMLElement | null>(
    typeof document !== 'undefined' ? document.getElementById('r3f-html-root') : null
  );
  return <PanelContext.Provider value={portalRef}>{children}</PanelContext.Provider>;
}

export function usePanelPortal() {
  return useContext(PanelContext);
}
