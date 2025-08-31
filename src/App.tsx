import CountBtn from "@/components/count-btn";
import ReactSVG from "@/assets/react.svg";
import { Badge } from "@/components/ui/badge";
import CommandDialogMenu from "./components/CommandMenu";
import { DialogDemo } from "./components/DialogDemo";

function App() {
  return (
    // Since this is the first element within our Shadow DOM, to apply dark theme using a class, add the 'dark' class to the <main> element below, it does not work in the <html> element
    <main className="flex flex-col items-center justify-center h-screen bg-background">
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-3xl text-primary">Shadow DOM demo</h1>
        <div className="inline-flex items-center gap-x-4">
          <img src={ReactSVG} alt="React Logo" className="w-32" />
          <span className="text-6xl text-primary">+</span>
          <img src={"/vite.svg"} alt="Vite Logo" className="w-32" />
        </div>
        <a
          href="https://ui.shadcn.com"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          <Badge variant="outline">shadcn/ui</Badge>
        </a>
        <CountBtn />
        <DialogDemo />
        <CommandDialogMenu />
      </div>
    </main>
  );
}

export default App;
