import React from 'react';
import clsx from 'clsx';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';


import styles from './styles.module.css';



export default function Teaser({title, description, img, link}) {
  return (
    <div className={clsx('col col--4 margin-bottom--md')}>
      <div className="text--center">

      <a href={link}>
        <ThemedImage
          alt={title}
          sources={{
            light: useBaseUrl(img),
            dark: useBaseUrl(img),
          }}
        />
      </a>

      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <a className="button button--outline button--primary" href={link}>Details</a>
      </div>
    </div>
  );
}