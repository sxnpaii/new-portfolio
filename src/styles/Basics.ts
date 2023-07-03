export const styles:string = `
h1, h2, h3, h4, h5, h6  {
  margin-bottom: 20px;
}
h1 {
  display: block;
  font-weight: bold;
  font-size: 2em;
  margin-top: 30px
}
h2 {
  display: block;
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 30px
}
h3 {
  display: block;
  font-weight: bold;
  font-size: 1.17em;
  margin-top: 30px
}
h4 {
  display: block;
  font-weight: bold;
  font-size: 1em;
  margin-top: 30px
}
h5 {
  display: block;
  font-weight: bold;
  font-size: 0.83em;
  margin-top: 30px
}
h6 {
  display: block;
  font-weight: bold;
  font-size: 0.67em;
  margin-top: 30px
}
:not( div) > a {
  color: #567b9e;
  text-decoration: underline;
  cursor: pointer;
}
pre {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  font-family: monospace;
  white-space: pre;
}
code {
  display: inline-block;
  font-family: monospace;
  background: #00000030;
  padding: 10px 20px;
  border-radius: 5px
}
 ul,  ol {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
  list-style-type: disc;
}
ol {
  list-style-type: decimal;
}

blockquote {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
  padding: 10px 20px;

  background: #00000030;
  border-radius: 10px
}
table {
  display: inline-block;
  box-sizing: border-box;
  border-spacing: 2px;
  border-collapse: separate;
  text-indent: initial;
  border: 3px solid white;
  margin : 10px 0;
}
tbody {
  border: 1px solid white;
}
tr {
  //padding: 5px;
  display: block;
  border-bottom: 1px solid white ;

}
th, td {
  min-width: 100px;
  // display: block;
  padding: 5px;
  border-right: 1px solid white;
}
hr {
    display: block;
    color: gray;
    border-style: inset;
    border-width: 1px;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    margin: 20px 0;
    overflow: hidden;
}
`
