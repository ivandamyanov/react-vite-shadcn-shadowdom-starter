import { createContext, StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import shadowStyles from './styles/globals.css?inline';

type ShadowRootContextType = ShadowRoot | null;
const ShadowRootContext = createContext<ShadowRootContextType>(null);

export function useShadowRoot(): ShadowRoot | null {
  return useContext(ShadowRootContext);
}

const host = document.getElementById("root")!;
document.body.appendChild(host);

const shadowRoot = host.attachShadow({ mode: "closed" });

const style = document.createElement('style');
style.textContent = shadowStyles;
shadowRoot.appendChild(style);
const shadowContainer = document.createElement('div');
shadowContainer.id = 'app-container';
shadowRoot.appendChild(shadowContainer);

createRoot(shadowContainer).render(
  <StrictMode>
    <ShadowRootContext.Provider value={shadowRoot}>
      <App />
    </ShadowRootContext.Provider>,
  </StrictMode>
);

/* 
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
 */