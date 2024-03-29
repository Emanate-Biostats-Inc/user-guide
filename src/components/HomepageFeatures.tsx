import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Program Templates",
    image: "img/templates.png",
    description: (
      <>
        Program templates using our standard processes and newest department
        macros.
      </>
    ),
  },
  {
    title: "Macro Documentation",
    image: "img/macros.png",
    description: (
      <>
        Macro documenation aimed to provide clear and succinct information such
        as syntax, examples, and expected outcomes.
      </>
    ),
  },
  {
    title: "Customize your SAS Environment",
    image: "img/custom.png",
    description: (
      <>
        Documentation on how to change any type of setting in SAS, from
        appearance, colors, to shortcuts.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
