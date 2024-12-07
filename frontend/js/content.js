console.clear();

if(document.cookie.indexOf(',counter=')>=0)
{
    let counter = document.cookie.split(',')[1].split('=')[1]
    document.getElementById("badge").innerHTML = counter
}


let cartContainer = document.getElementById('cartContainer')

let boxContainerDiv = document.createElement('div')
boxContainerDiv.id = 'boxContainer'

// DYNAMIC CODE TO SHOW THE SELECTED ITEMS IN YOUR CART
function dynamicCartSection(ob,itemCounter)
{
    let boxDiv = document.createElement('div')
    boxDiv.id = 'box'
    boxContainerDiv.appendChild(boxDiv)

    let boxImg = document.createElement('img')
    boxImg.src = ob.preview
    boxDiv.appendChild(boxImg)

    let boxh3 = document.createElement('h3')
    let h3Text = document.createTextNode(ob.name + ' × ' + itemCounter)
    // let h3Text = document.createTextNode(ob.name)
    boxh3.appendChild(h3Text)
    boxDiv.appendChild(boxh3)

    let boxh4 = document.createElement('h4')
    let h4Text = document.createTextNode('Amount: Rs' + ob.price)
    boxh4.appendChild(h4Text)
    boxDiv.appendChild(boxh4)

    // console.log(boxContainerDiv);

    buttonLink.appendChild(buttonText)
    cartContainer.appendChild(boxContainerDiv)
    cartContainer.appendChild(totalContainerDiv)
    // let cartMain = document.createElement('div')
    // cartmain.id = 'cartMainContainer'
    // cartMain.appendChild(totalContainerDiv)

    return cartContainer
}

let totalContainerDiv = document.createElement('div')
totalContainerDiv.id = 'totalContainer'

let totalDiv = document.createElement('div')
totalDiv.id = 'total'
totalContainerDiv.appendChild(totalDiv)

let totalh2 = document.createElement('h2')
let h2Text = document.createTextNode('Total Amount')
totalh2.appendChild(h2Text)
totalDiv.appendChild(totalh2)

// TO UPDATE THE TOTAL AMOUNT
function amountUpdate(amount)
{
    let totalh4 = document.createElement('h4')
    // let totalh4Text = document.createTextNode(amount)
    let totalh4Text = document.createTextNode('Amount: Rs ' + amount)
    totalh4Text.id = 'toth4'
    totalh4.appendChild(totalh4Text)
    totalDiv.appendChild(totalh4)
    totalDiv.appendChild(buttonDiv)
    console.log(totalh4);
}


let buttonDiv = document.createElement('div')
buttonDiv.id = 'button'
totalDiv.appendChild(buttonDiv)

let buttonTag = document.createElement('button')
buttonDiv.appendChild(buttonTag)
// console.clear();

let contentTitle;

console.log(document.cookie);
function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");
  // boxLink.href = '#'
  boxLink.href = "/contentDetails.html?" + ob.id;
  // console.log('link=>' + boxLink);

  let imgTag = document.createElement("img");
  // imgTag.id = 'image1'
  // imgTag.id = ob.photos
  imgTag.src = ob.preview;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.brand);
  h4.appendChild(h4Text);

  let h2 = document.createElement("h2");
  let h2Text = document.createTextNode("rs  " + ob.price);
  h2.appendChild(h2Text);

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(h2);

  return boxDiv;
}

//  TO SHOW THE RENDERED CODE IN CONSOLE
// console.log(dynamicClothingSection());

// console.log(boxDiv)

let mainContainer = document.getElementById("mainContainer");
let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");
// mainContainer.appendChild(dynamicClothingSection('hello world!!'))

// BACKEND CALLING

let httpRequest = new XMLHttpRequest();

httpRequest.onreadystatechange = function() {
  if (this.readyState === 4) {
    if (this.status == 200) {
      // console.log('call successful');
      contentTitle = JSON.parse(this.responseText);
      if (document.cookie.indexOf(",counter=") >= 0) {
        var counter = document.cookie.split(",")[1].split("=")[1];
        document.getElementById("badge").innerHTML = counter;
      }
      for (let i = 0; i < contentTitle.length; i++) {
        if (contentTitle[i].isAccessory) {
          console.log(contentTitle[i]);
          containerAccessories.appendChild(
            dynamicClothingSection(contentTitle[i])
          );
        } else {
          console.log(contentTitle[i]);
          containerClothing.appendChild(
            dynamicClothingSection(contentTitle[i])
          );
        }
      }
    } else {
      console.log("call failed!");
    }
  }
};
httpRequest.open(
  "GET",
  "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
  true
);
httpRequest.send();