import React from 'react'
import "./Sidebar.css";
import { Link } from 'react-router-dom';
export default function Sidebar() {
  return (
    <div id='full'>
     <ul>
      <li className='heading'><Link to="#">Introduction to HTML</Link></li>
      <li className='heading'><Link to="#">HTML Basics</Link>
        <ul>
          <li><Link to="#">What is HTML?</Link></li>
          <li><Link to="#">How HTML Works</Link></li>
          <li><Link to="#">Installing and Setting Up HTML</Link></li>
          <li><Link to="#">Executing HTML Documents</Link></li>
          <li><Link to="#">Basic HTML Page Structure</Link></li>
          <li><Link to="#">Key HTML Tags</Link></li>
          <li><Link to="#">Understanding HTML Elements</Link></li>
          <li><Link to="#">HTML Attributes</Link></li>
          <li><Link to="#">Adding Comments in HTML</Link></li>
          <li><Link to="#">Using IDs and Classes</Link></li>
        </ul>
      </li>
      <li className='heading'><Link to="#">HTML Basic Tags</Link>
        <ul>
          <li><Link to="#">Skeletal Tags</Link></li>
          <li><Link to="#">Heading Tags</Link></li>
          <li><Link to="#">Paragraph Tag</Link></li>
          <li><Link to="#">Horizontal Line Tag</Link></li>
          <li><Link to="#">Line Break Tag</Link></li>
          <li><Link to="#">Anchor Tag</Link></li>
          <li><Link to="#">Image Tag</Link></li>
          <li><Link to="#">Preformatted Text Tag</Link></li>
        </ul>
      </li>
      <li className='heading'><Link to="#">Inline & Block Elements</Link>
        <ul>
          <li><Link to="#">HTML Inline Elements</Link></li>
          <li><Link to="#">HTML Block Elements</Link></li>
        </ul>
      </li>
      <li className='heading'><Link to="#">HTML Lists</Link>
        <ul>
          <li><Link to="#">HTML Lists</Link></li>
          <li><Link to="#">HTML Unordered List</Link></li>
          <li><Link to="#">HTML Ordered List</Link></li>
          <li><Link to="#">HTML Definition Lists</Link></li>
        </ul>
      </li>
      <li className='heading'><Link to="#">HTML Tables</Link>
        <ul>
          <li><Link to="#">HTML Tables</Link></li>
          <li><Link to="#">More on Tables</Link></li>
        </ul>
      </li>
      <li className='heading'><Link to="#">HTML Forms</Link>
        <ul>
          <li><Link to="#">Introduction to HTML Forms</Link></li>
          <li><Link to="#">HTML Input Types</Link></li>
          <li><Link to="#">Textarea & Select</Link></li>
          <li><Link to="#">More on Forms</Link></li>
        </ul>
      </li>
      <li className='heading'><Link to="#">Head Elements</Link>
        <ul>
          <li><Link to="#">HTML Meta Tags</Link></li>
          <li><Link to="#">Link & Script Tags</Link></li>
        </ul>
      </li>
      <li className='heading'><Link to="#">HTML Media</Link>
        <ul>
          <li><Link to="#">Video & Audio Tags</Link></li>
          <li><Link to="#">SVG in HTML</Link></li>
          <li><Link to="#">iFrames in HTML</Link></li>
        </ul>
      </li>
      <li className='heading'><Link to="#">Miscellaneous Tags</Link>
        <ul>
          <li><Link to="#">HTML Code Tag</Link></li>
          <li><Link to="#">HTML Semantic Tags</Link></li>
          <li><Link to="#">HTML Canvas</Link></li>
          <li><Link to="#">HTML Global Attributes</Link></li>
          <li><Link to="#">HTML Entities</Link></li>
          <li><Link to="#">HTML Quotation Tag</Link></li>
          <li><Link to="#">Obsolete HTML Tags</Link></li>
          <li><Link to="#">Character Sets</Link></li>
        </ul>
      </li>
    </ul>
    </div>
  )
}
