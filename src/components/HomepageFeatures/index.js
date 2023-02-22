import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Multi-agent Modelling',
    Svg: require('@site/static/img/mars-group.svg').default,
    description: (
      <>
        The MARS Groups develops it's own C#-framework for multi-agent simulations, called LIFE.
      </>
    ),
  },
  {
    title: 'Interdisciplinarity',
    Svg: require('@site/static/img/undraw_pair_programming_re_or4x.svg').default,
    description: (
      <>
        The MARS Groups focuses on interdisciplinary teams. Through different and diverse mind sets best results <a href="/projects">come to live</a>.
      </>
    ),
  },
  {
    title: 'HAW Hamburg',
    Svg: require('@site/static/img/HAW_Marke_RGB.svg').default,
    description: (
      <>
        The MARS Group is based at the <a href="https://www.haw-hamburg.de/">HAW Hamburg</a> on the Computer Science Campus at Berliner Tor. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
