const allItems = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

let filteredItems;
let filteredItemsSearch;
let cart = [];

const sectionCenter = document.querySelector(".section-center");

const button = document.querySelectorAll(".filter-btn");
// document.querySelector('.section-center').innerHTML("Hi there")
// console.log(button);

// const sortBy = document.querySelectorAll(".sortByOption");

const sortBy2 = document.getElementById("sortBy");
// sortBy.addEventListener("change",function(e){
//   console.log(e.currentTarget);
// })

let category = "all";
// sortBy.forEach(function(sort){
//   console.log(sort.innerHTML)
// })

sortBy2.addEventListener("change", function (e) {
  let options = sortBy2.querySelectorAll("option");

  //  Check whether there is anything in search
  var word = document.getElementById("searchMenu").value;
  if (word.length !== 0) {
    options.forEach(function (option) {
      if (option.selected) {
        // console.log(option.value);
        // if (option.value == "sortbyprice_lth") {
        //   // dropdown.value = "default";
        //   sortFunction(option.value);
        // } else if (option.value == "sortbyprice_htl") {
        //   // dropdown.value = "default";
        //   sortFunction(option.value);
        // } else if (option.value == "sortbyname_asc") {
        //   // dropdown.value = "default";
        //   sortFunction(option.value);
        // } else if (option.value == "sortbyname_desc") {
        //   // dropdown.value = "default";
        //   sortFunction(option.value);
        // }
        sortFunction(option.value, filteredItemsSearch);
      }
    });
  } else {
    options.forEach(function (option) {
      if (option.selected) {
        // console.log(option.value);
        // if (option.value == "sortbyprice_lth") {
        //   // dropdown.value = "default";
        //   sortFunction(option.value);
        // } else if (option.value == "sortbyprice_htl") {
        //   // dropdown.value = "default";
        //   sortFunction(option.value);
        // } else if (option.value == "sortbyname_asc") {
        //   // dropdown.value = "default";
        //   sortFunction(option.value);
        // } else if (option.value == "sortbyname_desc") {
        //   // dropdown.value = "default";
        //   sortFunction(option.value);
        // }
        sortFunction(option.value, filteredItems);
      }
    });
  }
});

function sortFunction(sortByFilter, menuItems) {
  // const menu2 = structuredClone(menu);
  // 1st step - filter the menu according to the category
  // if (category == "all") {
  //   menuToSort = menu2;
  // } else {
  //   let menuItem = menu2.filter(function (item) {
  //     if (item.category === category) {
  //       return item;
  //     }
  //   });
  //   menuToSort = menuItem;
  // }

  console.log(menuItems);
  switch (sortByFilter) {
    case "sortbyprice_lth":
      displayItems(menuItems.sort(byPrice));
      break;
    case "sortbyprice_htl":
      var sortedMenu = menuItems.sort(byPrice);
      displayItems(sortedMenu);
      break;
    case "sortbyname_asc":
      displayItems(menuItems.sort(byName));
      break;
    case "sortbyname_desc":
      displayItems(menuItems.sort(byName));
      break;
    default:
      alert("Something Went wrong");
  }

  //  Function to sort by price
  function byPrice(a, b) {
    if (sortByFilter == "sortbyprice_lth") {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortByFilter == "sortbyprice_htl") {
      return parseFloat(b.price) - parseFloat(a.price);
    }
  }

  //  Function to sort by title/name
  function byName(a, b) {
    if (sortByFilter == "sortbyname_asc") {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      }
      return 0;
    } else if (sortByFilter == "sortbyname_desc") {
      if (a.title < b.title) {
        return 1;
      } else if (a.title > b.title) {
        return -1;
      }
      return 0;
    }
  }
}

// // Function for sorting by price from low to high
// function lowToHigh() {
//   // console.log("In low to high function");
//   const menu2 = structuredClone(menu);
//   //  Filter the menu according to the category
//   if (category == "all") {
//     sortFunction(menu2);
//   } else {
//     let menuItem = menu2.filter(function (item) {
//       if (item.category === category) {
//         return item;
//       }
//     });
//     sortFunction(menuItem);
//   }

//   function sortFunction(menuToSort) {
//     //   let sortedMenu = menuToSort.filter(function(item){
//     //     console.log(item);

//     //   })
//     //   const flatObj = Object.keys(menuToSort).reduce((acc, key) => {
//     //     acc[key] = menuToSort[key].price; // Assuming you want to sort by the 'name' property
//     //     return acc;
//     //   }, {});
//     //   console.log(flatObj,typeof flatObj);

//     //   const filteredData = menuToSort.filter((item, index) => item.price>15 )
//     //   console.log(filteredData);

//     //   const sortedKeys = Object.keys(menuToSort).sort((a, b) => {
//     //     // return menuToSort[a].title.localeCompare(menuToSort[b].title);
//     //     // console.log(menuToSort[a].price, menuToSort[b].price);
//     //     if (menuToSort[a].price>menuToSort[b].price){
//     //       return menuToSort[a];
//     //     }
//     //     else{
//     //       return menuToSort[b];
//     //     }
//     //   });
//     //   console.log(sortedKeys);
//     //   // console.log(sortedMenu);
//     // }
//     // // console.log(flatObj);

//     // console.log(menuToSort.sort(byPrice));
//     const sortedMenu = menuToSort.sort(byPrice);
//     displayItems(sortedMenu);

//     function byPrice(a, b) {
//       return parseFloat(a.price) - parseFloat(b.price);
//     }
//   }
// }

// // function for sorting by price from high to low
// function highToLow() {
//   const menu2 = structuredClone(menu);
//   //  Filter the menu according to the category
//   if (category == "all") {
//     sortFunction(menu2);
//   } else {
//     let menuItem = menu.filter(function (item) {
//       if (item.category === category) {
//         return item;
//       }
//     });
//     sortFunction(menuItem);
//   }

//   function sortFunction(menuToSort) {
//     const sortedMenu = menuToSort.sort(byPrice_htl);
//     displayItems(sortedMenu);

//     function byPrice_htl(a, b) {
//       return parseFloat(b.price) - parseFloat(a.price);
//     }
//   }
// }

//Function to sort by name/title
// function name_asc() {
//   const menu2 = structuredClone(menu);

//   if (category == "all") {
//     sortFunction(menu2);
//   } else {
//     let menuItem = menu.filter(function (item) {
//       if (item.category === category) {
//         return item;
//       }
//     });
//     sortFunction(menuItem);
//   }

//   function sortFunction(menuToSort) {
//     const sortedMenu = menuToSort.sort(byName_asc);
//     displayItems(sortedMenu);

//     function byName_asc(a, b) {
//       if (a.title < b.title) {
//         return -1;
//       } else if (a.title > b.title) {
//         return 1;
//       }
//       return 0;
//     }
//   }
// }

// function name_desc() {
//   const menu2 = structuredClone(menu);

//   if (category == "all") {
//     sortFunction(menu2);
//   } else {
//     let menuItem = menu.filter(function (item) {
//       if (item.category === category) {
//         return item;
//       }
//     });
//     sortFunction(menuItem);
//   }

//   function sortFunction(menuToSort) {
//     const sortedMenu = menuToSort.sort(byName_desc);
//     displayItems(sortedMenu);

//     function byName_desc(a, b) {
//       if (a.title < b.title) {
//         return 1;
//       } else if (a.title > b.title) {
//         return -1;
//       }
//       return 0;

//       //  Cannot use this because it compares only the 1st letter
//       //  return b.title.charCodeAt(0) - a.title.charCodeAt(0);
//     }

//     // Cannot use this because it only passes the key instead of the whole pair

//     // const sortedKeys = Object.keys(menuToSort).sort((a, b) => {
//     //   return menuToSort[a].title.localeCompare(menuToSort[b].title);
//     // });
//     // console.log(sortedKeys);
//   }
// }

window.addEventListener("DOMContentLoaded", function () {
  displayItems(allItems);
  filteredItems = allItems;
  cartDisplay();

  //  Reset the dropdown value to Sort By
  let dropdown = document.getElementById("sortBy");
  dropdown.value = "default";
});

button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    category = e.currentTarget.dataset["filter"];
    // console.log(category);
    // console.log(menu);

    //Set the value of dropdown to default
    let dropdown = document.getElementById("sortBy");
    dropdown.value = "default";

    // Set the search-bar to empty
    let searchBar = document.getElementById("searchMenu");
    searchBar.value = "";

    // const menu2 = structuredClone(menu);
    filteredItems = allItems.filter(function (item) {
      if (item.category === category) {
        return item;
      }
    });
    // console.log(menuItem);
    if (category === "all") {
      filteredItems = allItems; //filteredItems needs to updated
      displayItems(allItems);
    } else {
      displayItems(filteredItems);
    }
  });
});

function displayItems(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    getItemFromCart(item.id);
    // console.log(item);

    const cartButtonDisplay = function () {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return "none";
      } else {
        return "block";
      }
    };

    const quantityDisplay = function () {
      const existingItem = cart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return { display: "flex", quantity: existingItem.quantity };
      } else {
        return { display: "none" };
      }
    };

    const { display, quantity } = quantityDisplay();

    cartDisplay();

    return `<article class="menu-item" id="item-${item.id}">
    <img src=${item.img} class="photo" alt="menu item">
    <div class="item-info">
      <header>
        <h4 id="item-title">${item.title}</h4>
        <h4 class="price">$${item.price}</h4>
      </header>
      <p>${item.desc}</p>
      <div class="cartButtonContainer">
      <button class="cartButton" onclick="manageCart(${
        item.id
      },'add')" style="display: ${cartButtonDisplay()}" id="btn-${item.id}">add to cart</button>
      <div class="quantity-controls" style="display: ${display};" id="quantity-controls-${item.id}">
          <button class="minus" id="minus-btn-${
            item.id
          }" onclick="manageCart(${item.id},'remove')">-</button>
          <p class="quantity" id="quantity-${item.id}">${quantity}</p>
          <button class="plus" id="plus-btn-${
            item.id
          }" onclick="manageCart(${item.id},'add')">+</button>
        </div>
      </div>
    </div>
  </article>`;
  });

  // let itemImages = menu.filter((item, index) => item.price > 10 && item.id > 5);

  // console.log("itemImages :", itemImages);

  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
  // cartButtonFunction();
}

//  Search function
// function searchFunction() {
//   var word = document.getElementById("searchMenu").value;
//   console.log(word);

//   if (word.length){
//     const updatedItems = filteredItems.filter(function(item){
//       console.log(item.title);
//       if (item.title.toUpperCase().indexOf(word.toUpperCase()) !== -1) {
//         return item;
//       }
//     })

//       filteredItems = updatedItems.length ? updatedItems : filteredItems
//     // console.log(filteredMenu);

//     displayItems(filteredItems);
//   }
//   else
//   {
//     displayItems(filteredItems);
//   }
// }

function searchFunction() {
  var word = document.getElementById("searchMenu").value;
  console.log(word);
  // filteredItemsSearch = structuredClone(filteredItems);

  if (word.length) {
    const updatedItems = filteredItems.filter(function (item) {
      console.log(item.title);
      if (item.title.toUpperCase().indexOf(word.toUpperCase()) !== -1) {
        return item;
      }
    });

    filteredItemsSearch = updatedItems.length ? updatedItems : filteredItems;
    // console.log(filteredMenu);

    displayItems(filteredItemsSearch);
  } else {
    displayItems(filteredItems);
  }
}

// function cartButtonFunction() {
//   const cartButton = document.getElementsByClassName("cartButton");
//   let itemQuantity = 1;
//   for (let i = 0; i < cartButton.length; i++) {
//     cartButton[i].addEventListener("click", function (e) {
//       // let item = cartButton[i].parentElement;
//       // item.innerHTML = "Hi"
//       if (itemQuantity == 1) {
//         let item = e.currentTarget.parentElement;
//         item.innerHTML = `
//             <button id="decreaseQuantity">-</button>
//             <p>${itemQuantity}</p>
//             <button id="increaseQuantity">+</button>
//       `;
//         updateCart();
//         changeQuantity();
//       }
//     });
//   }

//   function changeQuantity() {
//     const increaseQtyBtn = document.getElementById("increaseQuantity");
//     const decreaseQtyBtn = document.getElementById("decreaseQuantity");
//     increaseQtyBtn.addEventListener("click", function () {
//       itemQuantity++;
//       increaseQtyBtn.previousElementSibling.innerHTML = itemQuantity;
//     });
//     decreaseQtyBtn.addEventListener("click", function () {
//       itemQuantity--;
//       if (itemQuantity == 0) {
//         decreaseQtyBtn.parentElement.innerHTML = `<button class="cartButton">add to cart</button>`;
//         cartButtonFunction();
//       } else {
//         decreaseQtyBtn.nextElementSibling.innerHTML = itemQuantity;
//       }
//     });
//   }
// }

// function cartButtonFunction() {

//   // let cartButton = document.getElementsByClassName("cartButton")
//   document.querySelectorAll(".menu-item").forEach((item) => {
//     const addButton = item.querySelector(".cartButton");
//     console.log(item);
//     const minusButton = item.querySelector(".minus");
//     const plusButton = item.querySelector(".plus");
//     const quantityDisplay = item.querySelector(".quantity");
//     const quantityControl = item.querySelector(".quantity-controls");

//     addButton.addEventListener("click", function () {
//       // console.log(item);
//       // console.log(item.getAttribute);
//       const itemName = item.querySelector("#item-title").textContent;
//       const itemPrice = parseFloat(item.querySelector(".price").textContent);
//       // console.log("Add button clicked", itemName, itemPrice);
//       manageCart(itemName, itemPrice, 1);
//     });

//     minusButton.addEventListener("click", function () {
//       const itemName = item.querySelector("#item-title").textContent;
//       manageCart(itemName, null, -1);
//     });

//     plusButton.addEventListener("click", function () {
//       const itemName = item.querySelector("#item-title").textContent;
//       manageCart(itemName, null, 1);
//     });

//     // function manageCart(name, price, change) {
//     //   if (cart.hasOwnProperty(name)) {
//     //     cart[name].quantity += change;
//     //     if (cart[name].quantity <= 0) {
//     //       delete cart[name];
//     //       addButton.style.display = "block";
//     //       quantityControl.style.display = "none";
//     //       calculateCartTotal();
//     //     } else {
//     //       quantityDisplay.innerHTML = cart[name].quantity;
//     //       calculateCartTotal();
//     //     }
//     //   } else {
//     //     cart[name] = { price, quantity: 1 };
//     //     addButton.style.display = "none";
//     //     quantityControl.style.display = "flex";
//     //     quantityDisplay.textContent = "1";
//     //     calculateCartTotal();
//     //   }

//     function calculateCartTotal() {
//     //   cart.map(function(item) {
//     //     console.log
//     //     console.log(item);
//     //   })
//     let grandTotal = 0;
//     for (const [key, value] of Object.entries(cart)) {
//       // total = cart[key].value.price;
//       // console.log(cart);
//       value.total = value.price * value.quantity;
//       grandTotal += value.total;
//     }

//     console.log(cart, grandTotal);
//     }
//   });
// }

function getItemFromCart(itemId) {
  const existingItem = cart.find((item) => item.id === itemId);
  // console.log(existingItem);
}

function manageCart(id, action) {
  // console.log(id);
  const selectedItem = allItems.find((item) => item.id === id);
  const addToCartBtn = document.getElementById(`btn-${id}`);
  const quantityControls = document.getElementById(`quantity-controls-${id}`);
  const quantityDisplay = document.getElementById(`quantity-${id}`);
  // console.log(selectedItem);

  const existingItem = cart.find((item) => item.id === id);

  if (action == "add") {
    if (existingItem) {
      existingItem.quantity++;
      quantityDisplay.innerText = existingItem.quantity;
      // existingItem
    } else {
      const selectedItemsCopy = { ...selectedItem };
      selectedItemsCopy.quantity = 1;
      quantityDisplay.innerText = selectedItemsCopy.quantity;
      addToCartBtn.style.display = "none";
      quantityControls.style.display = "flex";
      cart.push(selectedItemsCopy);
    }
  } else if (action == "remove") {
    if (existingItem) {
      if (existingItem.quantity > 0 && existingItem.quantity == 1) {
        cart = cart.filter((item) => item.id !== existingItem.id);
        // console.log(cart, id);
        addToCartBtn.style.display = "block";
        quantityControls.style.display = "none";
      } else {
        existingItem.quantity--;
        quantityDisplay.innerText = existingItem.quantity;
      }
    }
  }
  // console.log(action);
  cartDisplay();

  // if (cart.hasOwnProperty(name)) {
  //   cart[name].quantity += change;
  //   if (cart[name].quantity <= 0) {
  //     delete cart[name];
  //     addButton.style.display = "block";
  //     quantityControl.style.display = "none";
  //     calculateCartTotal();
  //   } else {
  //     quantityDisplay.innerHTML = cart[name].quantity;
  //     calculateCartTotal();
  //   }
  // } else {
  //   cart[name] = { price, quantity: 1 };
  //   addButton.style.display = "none";
  //   quantityControl.style.display = "flex";
  //   quantityDisplay.textContent = "1";
  //   calculateCartTotal();
  // }

  // console.log(typeof cart); // For debugging, to see the current state of the cart
}

function cartDisplay() {
  const cartSection = document.getElementById("cart");
  let itemCounter=0;
  let itemQuantity=0;
  if (cart.length) {
    cartSection.style.display = "block";
    function calculateCartTotal() {
      // //   cart.map(function(item) {
      // //     console.log
      // //     console.log(item);
      // //   })
      let grandTotal = 0;
      cart.forEach((item)=> {
        // console.log(item.price, item.quantity);
        itemCounter++;
        itemQuantity += item.quantity;
        grandTotal += item.price * item.quantity;
      })
      let pTag = cartSection.getElementsByTagName("p");
      // console.log(pTag);
      // paraTag.appendChild(document.createTextNode(`The grand total is ${grandTotal}`));
      document.getElementById("cartTotal").innerHTML = `Total Items: ${itemCounter} | Total Quantity: ${itemQuantity} | Amount: $${grandTotal.toFixed(2)} `;
    }

    calculateCartTotal();
  } else {
    cartSection.style.display = "none";
  }
}
