import "./App.css";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center text-3xl font-bold">
      <span className="mr-2">
        React Official for <span className="text-[#9F4FFC]">Dev</span>
      </span>

      <Button variant="outline">Explore More</Button>
    </div>
  );
}
