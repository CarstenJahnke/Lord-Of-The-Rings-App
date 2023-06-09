import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data/data";

export default function theFellowOfTheRing() {
  return (
    <>
      <Link href="../../">← All Volumes</Link>
      <h1>
        {
          volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
            .title
        }
      </h1>
      <p>
        {
          volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
            .description
        }
      </p>
      <ul>
        {volumes
          .find(({ slug }) => slug === "the-fellowship-of-the-ring")
          .books.map((book) => (
            <li key={book.ordinal}>
              <p>
                {book.ordinal}: {book.title}
              </p>
            </li>
          ))}
      </ul>
      <Image
        src={
          volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
            .cover
        }
        alt="the-fellowship-of-the-ring"
        width={140}
        height={230}
      />
    </>
  );
}
