import React from 'react'
const codeString = `
<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>
  <h1>This is a Heading</h1>
  <p>This is a paragraph.</p>
</body>
</html>
  `;
export default function Howhtmlworks() {
  return (
    <div>
      <h1 className="mb-3">Working of HTML</h1> 

HTML (HyperText Markup Language) is the standard language used to create and structure documents on the web. Unlike programming languages such as Java or C++, HTML is not compiled. Instead, it is parsed and rendered by web browsers. Here's a brief overview of how HTML works:
<br/>
<li type="none"><strong> 1. Structure of HTML: </strong>
 HTML consists of a series of elements, each defined by tags. These elements structure the content of the webpage. For example:</li>
<br/>
<div className="code_container">
      <pre className="code">
        <code className="language-html">
        {codeString}
        </code>
      </pre>
    </div>


<li type="none">
<strong> 2. Requesting the HTML Document: </strong>
 When you enter a URL in the web browser or click a link, the browser sends an HTTP request to the server where the website is hosted. The server responds by sending the requested HTML document back to the browser.
</li>
<br/>
<li type="none">
 <strong>3. Parsing HTML: </strong>
 Once the browser receives the HTML document, it begins parsing it from top to bottom. The parsing process involves reading the HTML markup and constructing the Document Object Model (DOM) tree, which represents the structure and content of the web page.
</li>
<br/>
<li type="none">
 <strong>
     4. Rendering the Page: 
 </strong>
 After parsing, the browser uses the DOM tree to render the web page. <br/> This involves several steps:
<br/>
<strong>Calculating Styles:</strong> The browser combines the HTML with CSS (Cascading Style Sheets) to determine the appearance of each element.
Layout: The browser calculates the position and size of each element based on the styles and the HTML structure.
Painting: The browser then paints the pixels on the screen to display the page.
</li><br/>
<li type="none">
 <strong>
     5. JavaScript Interaction: 
 </strong>
 If the HTML document includes JavaScript, the browser also processes and executes the script. JavaScript can manipulate the DOM, allowing for dynamic content changes without needing to reload the entire page.
</li><br/>
<h4>Key Points:</h4>
<ul>
 <li>
 <strong>No Compilation:</strong> HTML is not compiled. It is parsed and rendered by the browser.
 </li>
 <li><strong>Browser Role: </strong>The browser is responsible for interpreting HTML, applying styles, constructing the DOM, and rendering the web page.</li>
 <li> <strong>Dynamic Interaction: </strong>JavaScript can interact with the HTML and DOM to create dynamic and interactive web pages.</li>
</ul>
     This process ensures that the content and structure defined by the HTML are displayed correctly to the user, creating a seamless browsing experience.

    </div>
   
  )
}
