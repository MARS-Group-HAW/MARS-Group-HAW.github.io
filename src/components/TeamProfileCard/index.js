import React from 'react';
import clsx from 'clsx';

export default function TeamProfileCard({
  name,
  description,
  img,
  year,
  github,
  mastodon,
  twitter,
  linkedIn,
  researchGate,
  googleScholar,
  hawEmail,
  webSite,
}) {
  return (
    <div className={clsx('col col--4')}>
      <div
        className={clsx('m-teamprofilecard')}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between', // Inhalte gleichmäßig verteilen
        }}
      >
        {img && (
          <div className="text--center">
            <img
              className="m-teamprofilecard-img"
              src={img}
              width={100}
              alt={`${name}'s profile`}
            />
          </div>
        )}
        <div className="text--center padding-horiz--md">
          <h4 className="m-teamprofilecard-name">{name}</h4>
          {year && <div className="m-teamprofilecard-year">{year}</div>}
          {description && <p className="m-teamprofilecard-description">{description}</p>}
        </div>
        <div
          style={{
            marginBottom: '1rem', // Abstand nach unten für Klarheit
            display: 'flex',
            flexDirection: 'row', // Icons horizontal anordnen
            flexWrap: 'wrap', // Zeilenumbruch bei Platzmangel
            justifyContent: 'center', // Icons horizontal zentrieren
            alignItems: 'top', // Vertikale Zentrierung der Icons
            gap: '1rem', // Abstand zwischen den Icons
          }}
        >
          {hawEmail && (
            <a href={`mailto:${hawEmail}`} target="_blank" rel="noopener noreferrer">
              <img src="/icons/email.svg" alt="Email" width={24} height={24} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <img src="/icons/github.svg" alt="GitHub" width={24} height={24} />
            </a>
          )}
          {linkedIn && (
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
          )}
          {researchGate && (
            <a href={researchGate} target="_blank" rel="noopener noreferrer">
              <img src="/icons/researchgate.svg" alt="ResearchGate" width={24} height={24} />
            </a>
          )}
          {googleScholar && (
            <a href={googleScholar} target="_blank" rel="noopener noreferrer">
              <img src="/icons/google-scholar.svg" alt="Google Scholar" width={24} height={24} />
            </a>
          )}
          {mastodon && (
            <a href={mastodon} target="_blank" rel="noopener noreferrer">
              <img src="/icons/mastodon.svg" alt="Mastodon" width={24} height={24} />
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
            </a>
          )}
          {webSite && (
            <a href={webSite} target="_blank" rel="noopener noreferrer">
              <img src="/icons/website.svg" alt="Website" width={24} height={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
