import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Transform MySQL Tables into Dynamic REST APIs",
    img: require("@site/static/img/img1.jpg").default,
    description: (
      <>
        Unlock your data with instant REST access! Effortlessly query, modify,
        and manage MySQL tables. From CRUD operations to advanced upsert and
        distinct queries - all in one powerful tool
      </>
    ),
  },
  {
    title: "Built-In Authentication Ready for Scale",
    img: require("@site/static/img/img2.jpg").default,
    description: (
      <>
        Security made simple with JWT-authenticated endpoints. Kickstart your
        apps security with /register and /login APIs, letting you focus on what
        matters most - building your app
      </>
    ),
  },
  {
    title: "Streamlined File Uploads with Access Control",
    img: require("@site/static/img/img3.jpg").default,
    description: (
      <>
        Say goodbye to complex file handling. Effortlessly upload, store, and
        retrieve files across formats, and get direct URLs for easy access -
        ideal for any modern backend
      </>
    ),
  },
  {
    title: "Host and Serve Files Directly from Your API",
    img: require("@site/static/img/img4.jpg").default,
    description: (
      <>
        Your personal file server, now integrated with your API. Host entire
        directories, access content instantly, and streamline file management
        all through SQLink
      </>
    ),
  },
];

function Feature({
  title,
  img,
  description,
  isReverse,
}: FeatureItem & { isReverse?: boolean }) {
  return (
    <div
      className={`${styles.featuresContainer} ${
        isReverse ? styles.reverse : ""
      }`}
    >
      <div>
        <img src={img} alt={title} className={styles.featureImage} />
      </div>
      <div>
        <Heading as="h1" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} isReverse={idx % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
