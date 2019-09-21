
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
  if (htmlElement.children) { 
    const children = Array.from(htmlElement.children);
    children.forEach( ele => htmlElement.removeChild(ele));
  }

  const p = document.createElement("p");
  p.textContent = string;
  htmlElement.appendChild(p);
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator('I <3 Vanilla DOM manipulation', partyHeader);