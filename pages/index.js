// Static page to click "Run tests"

import Link from 'next/link';
import { Header } from '../components/header';

export default function HomePage() {
  function handleClick() {
    console.log("clicked!");
  }

  return (
    <div>
      <Header title="LNER E2E Tests" />
      <Link href="/results" passHref>
        <button onClick={handleClick}>Run Tests</button>
      </Link>
    </div>
  );
}
