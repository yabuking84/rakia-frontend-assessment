import {
  createContext,
  ReactNode,
  RefObject,
  useContext,
  useRef,
} from "react";
import { Toast } from "primereact/toast";

const ToastContext = createContext<RefObject<Toast> | undefined>(undefined);

export function ToastContextProvider({ children }: { children: ReactNode }) {
  const toast = useRef<Toast>(null);
  return (
    <div>
      <ToastContext.Provider value={toast}>{children}</ToastContext.Provider>
      <Toast ref={toast} />
    </div>
  );
}

export function useToastContext() {
  const toast = useContext(ToastContext);
  if (!toast) {
    throw new Error(
      "useToastContext must be used within a ToastContextProvider!"
    );
  }
  return toast;
}
