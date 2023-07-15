import React from 'react';

export default function Thesis({header, author, type, title, abstract, path}) {
  let type_long = ''
  switch(type) {
    case 'ba':
      type_long = 'Bachelor\'s thesis'
      break;
    case 'ma':
      type_long = 'Master\'s thesis'
      break;
    case 'phd':
      type_long = 'PhD'
      break;
    default:
      type_long = 'Unspecified'
  } 
  
  return (
    <div className="margin-bottom--md text--left">
      <h3>{header}</h3>
      <p>
        <b>Author: </b>{author}<br />
        <b>Type: </b>{type_long}<br />
        <b>Title: </b>{title}<br />
        <b>Abstract: </b>{abstract}<br />
      </p>
      <a className="button button--outline button--primary" href={path}>Download</a>
    </div>
  );
}
