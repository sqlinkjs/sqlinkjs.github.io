import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Dynamic MySQL REST APIs",
    Svg: require("@site/static/img/undraw_server-cluster_7ugi.svg").default,
    description: (
      <>
        Instant REST APIs for MySQL tables. Complete CRUD operations, upserts,
        and advanced queries made simple
      </>
    ),
  },
  {
    title: "Built-In Authentication",
    Svg: require("@site/static/img/undraw_secure-login_m11a.svg").default,
    description: (
      <>
        JWT-authenticated endpoints with built-in user registration and login
        APIs. Focus on building your app while we handle the security
        essentials
      </>
    ),
  },
  {
    title: "Streamlined File Uploads",
    Svg: require("@site/static/img/undraw_upload-image_tpmp.svg").default,
    description: (
      <>
        Say goodbye to complex file handling. Upload, store, and retrieve files
        across formats with direct URL access – perfect for modern
        backends
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
