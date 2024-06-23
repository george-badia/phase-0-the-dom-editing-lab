function checkHTMLStructure() {
   const htmlElement = document.querySelector("html");
   const bodyElement = document.querySelector("body");
   const pElement = document.querySelector("p");

   if (
       htmlElement && bodyElement && pElement &&
       htmlElement.innerHTML.includes("<body>") &&
       htmlElement.innerHTML.includes("</body>") &&
       bodyElement.innerHTML.includes("<h1>") &&
       bodyElement.innerHTML.includes("<p>") &&
       bodyElement.innerHTML.includes("<table>") &&
       pElement.innerHTML.includes("<strong>") &&
       pElement.innerHTML.includes("<em>") &&
       pElement.innerHTML.includes('<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">')
   ) {
       return true;
   } else {
       return false;
   }
}
