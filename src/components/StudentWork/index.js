import React from 'react';

export default function StudentWork({title, author, type, description, semesterYear, pathPdf, pathImage}) {
  let typeLong = ''  // The long version of the type of the student work
  
  switch(type) {
    case 'ba':
      typeLong = 'Bachelor\'s thesis'
      break;
    case 'ma':
      typeLong = 'Master\'s thesis'
      break;
    case 'phd':
      typeLong = 'PhD'
      break;
    default:
      typeLong = 'Unspecified'
  }
  
  const semester = semesterYear.substring(0, 2)  // The two-letter semester abbreviation
  const year = semesterYear.substring(2, 6)  // The four-digit year
  
  let semesterLong = ''  // The long version of the semester in which the student work was submitted
  
  switch(semester) {
    case 'ws':
      semesterLong = 'Winter semester'
      break;
    case 'ss':
      semesterLong = 'Summer semester'
      break;
    default:
      semesterLong = 'Unspecified semester'
  }
  
  return (
    <div className="card margin-bottom--lg">
      <div class="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body m-studentwork">
        <div className="m-studentwork-text text--left">
          <p>
            <b>Author: </b>{author}<br />
            {type && <span><b>Type: </b> {typeLong}<br /></span>}
            <b>Semester: </b>{semesterLong.concat(' ', year)}<br />
            <b>Description: </b>{description}<br />
          </p>
          <a className="button button--outline button--primary" href={pathPdf}>Download</a>
        </div>
        {pathImage && 
          <div className="m-studentwork-preview">
            <a href={pathPdf}>
              <img src={pathImage}/>
            </a>
          </div>
        }
      </div>
    </div>
  );
}
