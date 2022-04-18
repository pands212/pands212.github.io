var ul = document.querySelector("ul");
// get the date//
async function getShoes() {
  let response = await fetch(
    "https://api.airtable.com/v0/apppCmCEXnY57et85/Table%201?api_key=keyuD1kyyHmhwrdpU"
  );
  let data = response.json();
  return data;
}

getShoes().then((data) => {
  makeList(data.records);
});

function makeList(records) {
    console.log(records);
  for (let i = 0; i < records.length; i++) {
    let name = records[i].fields.decade;
    let listItem = document.createElement("h2");
    listItem.appendChild(document.createTextNode(name));
    let materialcolor = records[i].fields.materialcolor;
    let listItemColor = document.createElement("li");
    listItemColor.appendChild(document.createTextNode(materialcolor));
    let url = records[i].fields.url;
    let listItemUrl = document.createElement("li");
    listItemUrl.appendChild(document.createTextNode(url));
    let heelSize = records[i].fields.heelsize;
    let listItemHeelsize = document.createElement("li");
    listItemHeelsize.appendChild(document.createTextNode(heelSize));
    let brand = records[i].fields.brand;
    let listItemBrand = document.createElement("li");
    listItemBrand.appendChild(document.createTextNode(brand));
    let atachment = records[i].fields.atachment;
    let listItemImage = document.createElement("img");
    listItemImage.src = atachment[0].url;
    //listItemImage.appendChild(document.createTextNode(atachment));
    ul.appendChild(listItem);
    ul.appendChild(listItemColor);
    ul.appendChild(listItemUrl);
    ul.appendChild(listItemHeelsize);
    ul.appendChild(listItemBrand);
    ul.appendChild(listItemImage);
  }
}