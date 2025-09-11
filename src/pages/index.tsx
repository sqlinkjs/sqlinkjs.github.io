import { useEffect, useMemo, useState, type ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import TerminalView from "../components/terminalview";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

const [installCommand, setInstallCommand] = useState("npm install -g sqlink");

useEffect(() => {
  if (navigator.platform.indexOf("Win") !== -1) {
    setInstallCommand("npm install -g sqlink");
  } else {
    setInstallCommand("sudo npm install -g sqlink");
  }
}, []);
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <p className={styles.gettingStarted}>Get started by installing</p>
          <div className={styles.terminalContainer}>
            <TerminalView text={installCommand} />
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            📚 &nbsp;&nbsp; Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`SQLink Documentation`}
      description="Documentation for SQLink, a Node.js ORM for SQL databases."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
