import { Button } from '@mono/ui';
import { Navigation } from '@mono/components';

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500">You are on: Home page</h1>
      <Navigation />
      <Button />
    </div>
  );
}
