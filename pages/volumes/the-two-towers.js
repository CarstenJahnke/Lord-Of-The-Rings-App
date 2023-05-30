import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data/data";

export default function theTwoTowers() {
  return (
    <>
      <h1>The Two Towers</h1>
      <li>
        <Link href="../../">Back to Volumes</Link>
      </li>
    </>
  );
}
