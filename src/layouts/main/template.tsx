import { ToastContextProvider } from "@/providers/toast-provider";
import { Navigation } from "./nav";
import { ConfirmDialog } from 'primereact/confirmdialog';

export function MainTemplate(props: Props) {
  return (
    <>
      <main id="main-template">
        <header
          className={`relative z-10 flex w-full items-center justify-between`}
        >
          <Navigation />
        </header>
        <ToastContextProvider>
          {props.children}
        </ToastContextProvider>
        <ConfirmDialog />
      </main>
    </>
  );
}
