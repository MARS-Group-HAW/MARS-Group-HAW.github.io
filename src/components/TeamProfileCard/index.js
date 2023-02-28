import React from 'react';
import clsx from 'clsx';

export default function TeamProfileCard({
  name, 
  description,
  img,
  year,
  githubUrl,
  mastodonUrl,
  twitterUrl
}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('m-teamprofilecard')}>
        {img && 
          <div className="text--center">
            <img className="m-teamprofilecard-img" src={img} width={100} />
          </div>
        }
        <div className="text--center padding-horiz--md">
          <h4 className="m-teamprofilecard-name">{name}</h4>
          
          {description && <div className="m-teamprofilecard-year">{year}</div>}

          {description && <p class="m-teamprofilecard-description">{description}</p>}
          {githubUrl && <a className="button button--outline button--secondary" href={githubUrl}>GitHub</a>}
          {mastodonUrl && <a className="button button--outline button--secondary" href={mastodonUrl}>Mastodon</a>}
          {twitterUrl && <a className="button button--outline button--secondary" href={twitterUrl}>Twitter</a>}
        </div>
      </div>
    </div>
  );
}