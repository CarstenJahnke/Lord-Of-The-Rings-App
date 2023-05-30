import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data/data";

export default function theReturnOfTheKing() {
  return (
    <>
      <h1>The Return Of The King</h1>
      <li>
        <Link href="../../">Back to Volumes</Link>
      </li>
    </>
  );
}
