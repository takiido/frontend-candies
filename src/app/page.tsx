import Image from "next/image";
import styles from "./page.module.css";
import { Portal } from "./components/Portal";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Portal Orbit Component:</h2>
        <Portal direction="v">
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>
        </Portal>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://takiido.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to takiido.dev →
        </a>
      </footer>
    </div>
  );
}
