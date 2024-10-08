import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';
function ret(){
  var cl = document.getElementById("full");
  if(cl.className == "show_in_laptop"){
      cl.className = "show_in_mobile";
  }
  else if(cl.className == "show_in_mobile"){
      cl.className = "show_in_laptop";
  }
  
}
export default function Sidebarhtml() {
  return (
    <div id='full' className='show_in_laptop'>
      <ul>
        <li className='heading'>
          <Link onClick={ret}  to="/html/introduction">Introduction to HTML</Link>
        </li>
        <li className='heading'>
          <Link onClick={ret}  to="/html/what-is-html">HTML Basics</Link>
          <ul className='subheading'>
            <li><Link onClick={ret} to="/html/what-is-html">What is HTML?</Link></li>
            <li><Link onClick={ret}  to="/html/how-html-works">How HTML Works</Link></li>
            <li><Link onClick={ret}  to="/html/installing-html">Installing and Setting Up HTML</Link></li>
            <li><Link onClick={ret}  to="/html/executing-html">Executing HTML Documents</Link></li>
            <li><Link onClick={ret}  to="/html/page-structure">Basic HTML Page Structure</Link></li>
            <li><Link onClick={ret}  to="/html/key-tags">Key HTML Tags</Link></li>
            <li><Link onClick={ret}  to="/html/elements">Understanding HTML Elements</Link></li>
            <li><Link onClick={ret}  to="/html/attributes">HTML Attributes</Link></li>
            <li><Link onClick={ret}  to="/html/comments">Adding Comments in HTML</Link></li>
            <li><Link onClick={ret}  to="/html/ids-classes">Using IDs and Classes</Link></li>
          </ul>
        </li>
        <li className='heading'>
          <Link to="#">HTML Basic Tags</Link>
          <ul className='subheading'>
            <li><Link onClick={ret}  to="/html/skeletal-tags">Skeletal Tags</Link></li>
            <li><Link onClick={ret}  to="/html/heading-tags">Heading Tags</Link></li>
            <li><Link onClick={ret}  to="/html/paragraph-tag">Paragraph Tag</Link></li>
            <li><Link onClick={ret}  to="/html/horizontal-line-tag">Horizontal Line Tag</Link></li>
            <li><Link onClick={ret}  to="/html/line-break-tag">Line Break Tag</Link></li>
            <li><Link onClick={ret}  to="/html/anchor-tag">Anchor Tag</Link></li>
            <li><Link onClick={ret}  to="/html/image-tag">Image Tag</Link></li>
            <li><Link onClick={ret}  to="/html/preformatted-text-tag">Preformatted Text Tag</Link></li>
          </ul>
        </li>
        <li className='heading'>
          <Link to="#">Inline & Block Elements</Link>
          <ul className='subheading'>
            <li><Link onClick={ret}  to="/html/inline-elements">HTML Inline Elements</Link></li>
            <li><Link onClick={ret}  to="/html/block-elements">HTML Block Elements</Link></li>
          </ul>
        </li>
        <li className='heading'>
          <Link to="#">HTML Lists</Link>
          <ul className='subheading'>
            <li><Link onClick={ret}  to="/html/lists">HTML Lists</Link></li>
            <li><Link onClick={ret}  to="/html/unordered-list">HTML Unordered List</Link></li>
            <li><Link onClick={ret}  to="/html/ordered-list">HTML Ordered List</Link></li>
            <li><Link onClick={ret}  to="/html/definition-lists">HTML Definition Lists</Link></li>
          </ul>
        </li>
        <li className='heading'>
          <Link to="#">HTML Tables</Link>
          <ul className='subheading'>
            <li><Link onClick={ret}  to="/html/tables">HTML Tables</Link></li>
            <li><Link onClick={ret}  to="/html/more-on-tables">More on Tables</Link></li>
          </ul>
        </li>
        <li className='heading'>
          <Link to="#">HTML Forms</Link>
          <ul className='subheading'>
            <li><Link onClick={ret}  to="/html/forms">Introduction to HTML Forms</Link></li>
            <li><Link onClick={ret}  to="/html/input-types">HTML Input Types</Link></li>
            <li><Link onClick={ret}  to="/html/textarea-select">Textarea & Select</Link></li>
            <li><Link onClick={ret}  to="/html/more-on-forms">More on Forms</Link></li>
          </ul>
        </li>
        <li className='heading'>
          <Link to="#">Head Elements</Link>
          <ul className='subheading'>
            <li><Link onClick={ret}  to="/html/meta-tags">HTML Meta Tags</Link></li>
            <li><Link onClick={ret}  to="/html/link-script-tags">Link & Script Tags</Link></li>
          </ul>
        </li>
        <li className='heading'>
          <Link to="#">HTML Media</Link>
          <ul className='subheading'>
            <li><Link onClick={ret}  to="/html/video-audio-tags">Video & Audio Tags</Link></li>
            <li><Link onClick={ret}  to="/html/svg">SVG in HTML</Link></li>
            <li><Link onClick={ret}  to="/html/iframes">iFrames in HTML</Link></li>
          </ul>
        </li>
        <li className='heading'>
          <Link to="#">Miscellaneous Tags</Link>
          <ul className='subheading'>
            <li><Link onClick={ret}  to="/html/code-tag">HTML Code Tag</Link></li>
            <li><Link onClick={ret}  to="/html/semantic-tags">HTML Semantic Tags</Link></li>
            <li><Link onClick={ret}  to="/html/canvas">HTML Canvas</Link></li>
            <li><Link onClick={ret}  to="/html/global-attributes">HTML Global Attributes</Link></li>
            <li><Link onClick={ret}  to="/html/entities">HTML Entities</Link></li>
            <li><Link onClick={ret}  to="/html/quotation-tag">HTML Quotation Tag</Link></li>
            <li><Link onClick={ret}  to="/html/obsolete-tags">Obsolete HTML Tags</Link></li>
            <li><Link onClick={ret}  to="/html/character-sets">Character Sets</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
