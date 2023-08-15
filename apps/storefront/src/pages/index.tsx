import { Button } from "@project-mono/ui";
import { Navigation } from "./navigation";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500">You are on: Home page</h1>
      <Navigation />
      <Button />
    </div>
  );
}