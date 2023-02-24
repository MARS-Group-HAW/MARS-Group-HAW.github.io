import React from 'react';
import clsx from 'clsx';

export default function Teaser({title, description, img, link}) {
  return (
    <div className={clsx('col col--4 margin-bottom--md')}>
      <div className="text--center">

      <a href={link} className={'m-teaser-image'}>
        <img src={img} width={200} />
      </a>

      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {link && <a className="button button--outline button--primary" href={link}>Details</a>}
      </div>
    </div>
  );
}