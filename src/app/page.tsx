import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href={'/first-level'}>1 уровень</Link>
    </div>
  );
}
