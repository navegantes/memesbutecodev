export async function getLinks() {
  const resp = await fetch("http://localhost:8000", {
    mode: "no-cors",
  });

  // const data = await resp.text();
  return resp;
}

// const parser = new DOMParser();

// const doc = parser.parseFromString(data, "text/html");

// console.log(doc.querySelectorAll("a"));

//  const html = await resp.text();

//  // Initialize the DOM parser

//  // Parse the text

//  return doc.querySelectorAll("a");
