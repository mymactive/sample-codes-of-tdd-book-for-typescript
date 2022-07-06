import type { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/">Go to index</Link>
    </main>
  );
};

export default Page;
