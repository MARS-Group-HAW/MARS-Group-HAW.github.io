import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Multi-Agent Modelling & AI',
    Svg: require('@site/static/img/undraw_firmware_re_fgdy.svg').default,
    description: (
      <>
        The MARS Group develops its <a href="/docs/tutorial/intro">own C# framework</a> for multi-agent simulations, called MARS LIFE.
      </>
    ),
  },
  {
    title: 'Interdisciplinarity',
    Svg: require('@site/static/img/undraw_pair_programming_re_or4x.svg').default,
    description: (
      <>
        The MARS Group focuses on interdisciplinary teams. Different and diverse mindsets bring out the best results.
      </>
    ),
  },
  {
    title: 'Teaching & Short Courses',
    Svg: require('@site/static/img/undraw_teaching_re_g7e3.svg').default,
    description: (
      <>
        The MARS Group teaches at the <a href="https://www.haw-hamburg.de/">HAW Hamburg</a>. Also, we <a href="/blog/tags/shortcourse">offer onsite modelling workshops</a> on the topic of Agent-based Modelling (ABM). 
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

        <div style={{ marginTop: '8em'}} className="row">
          <div className="col">
            <div className="row">
              <div className="col col--6">
                <h2>About Us</h2>
                <p>
          The MARS (Multi-Agent Research and Simulation) group is an academic research group in the Department of Computer Science at the Hamburg University of Applied Sciences (HAW Hamburg), Germany. Our research currently focuses mainly on the following topics:
                </p>
                <ul>
                  <li>Multi-agent systems and multi-agent reinforcement learning,</li>
                  <li>Agentic AI and LLM-based agents,</li>
                  <li>Agent-based modelling and simulation,</li>
                  <li>Digital twins, and</li>
                  <li>Environmental informatics and geoinformatics.</li>
                </ul>
              </div>
              <div className="col col--4">

                <img  style={{ float: 'right'}} src="/img/mars-group.svg" width="200" />
                <h2>Contact</h2>
                  <p>
                    For any question or inquiries, please reach out!
                  </p>
                  <address>
                  Prof. Dr. Thomas Clemen<br />
                  Hamburg University of Applied Sciences<br />
                  Department of Computer Science<br />
                  Berliner Tor 7, 20099 Hamburg, Germany<br />
                  Telephone: +49 40 42875 8411<br />
                  E-mail: <a href="mailto:thomas.clemen@haw-hamburg.de">thomas.clemen@haw-hamburg.de</a><br />
                  </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
