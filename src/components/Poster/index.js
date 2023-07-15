import React from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

// import poster from '../../../static/img/student-work/posters/ahmady-moghaddam_fw2_poster.pdf';

// <Document file={poster}>
//   <Page pageNumber={1} width={850} renderTextLayer={false} renderAnnotationLayer={false} />
// </Document>

export default function Poster({title, author, description, path}) {
  const path_png = path + '.png'
  const path_pdf = path + '.pdf'
  
  return (
    <div className="margin-bottom--md">
      <div className="text--left">
        <p>
          <b>Title: </b>{title}<br />
          <b>Author: </b>{author}<br />
          <b>Description: </b>{description}<br />
        </p>
      </div>
      <div className="margin-bottom--md">
        <img src={path_png} />
      </div>
      <div className="margin-bottom--md">
        <a className="button button--outline button--primary" href={path_pdf}>Download</a>
      </div>
    </div>
  );
}
