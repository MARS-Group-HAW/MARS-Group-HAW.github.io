import React, { useState } from 'react';
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
  webSite
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Prüfen, ob mindestens ein Link vorhanden ist
  const hasLinks = hawEmail || github || linkedIn || researchGate || googleScholar || mastodon || twitter || webSite;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
          
          {year && <div className="m-teamprofilecard-year">{year}</div>}

          {description && <p className="m-teamprofilecard-description">{description}</p>}

          {/* Dropdown nur anzeigen, wenn Links vorhanden sind */}
          {hasLinks && (
            <div className="dropdown">
              <button 
                onClick={toggleDropdown} 
                className="button button--outline button--secondary"
              >
                Links anzeigen
              </button>
              {isDropdownOpen && (
                <ul className="dropdown-content">
                  {hawEmail && <li><a href={`mailto:${hawEmail}`} target="_blank" rel="noopener noreferrer">Email</a></li>}
                  {github && <li><a href={github} target="_blank" rel="noopener noreferrer">GitHub</a></li>}
                  {linkedIn && <li><a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}
                  {researchGate && <li><a href={researchGate} target="_blank" rel="noopener noreferrer">ResearchGate</a></li>}
                  {googleScholar && <li><a href={googleScholar} target="_blank" rel="noopener noreferrer">Google Scholar</a></li>}
                  {mastodon && <li><a href={mastodon} target="_blank" rel="noopener noreferrer">Mastodon</a></li>}
                  {twitter && <li><a href={twitter} target="_blank" rel="noopener noreferrer">Twitter</a></li>}
                  {webSite && <li><a href={webSite} target="_blank" rel="noopener noreferrer">Website</a></li>}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
