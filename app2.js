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

const sectionCenter = document.querySelector(".section-center");

const button = document.querySelectorAll(".filter-btn");
// document.querySelector('.section-center').innerHTML("Hi there")
console.log(button);

// const sortBy = document.querySelectorAll(".sortByOption");

const cart = {};

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
    // console.log(item);

    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt="menu item">
    <div class="item-info">
      <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p>${item.desc}</p>
      <div class="cartButtonContainer">
      <button class="cartButton">add to cart</button>
      </div>
    </div>
  </article>`;
  });

  // let itemImages = menu.filter((item, index) => item.price > 10 && item.id > 5);

  // console.log("itemImages :", itemImages);

  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
  cartButtonFunction();
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

function cartButtonFunction() {
  const cartButton = document.getElementsByClassName("cartButton");
  let itemQuantity = 1;
  for (let i = 0; i < cartButton.length; i++) {
    cartButton[i].addEventListener("click", function (e) {
      // let item = cartButton[i].parentElement;
      // item.innerHTML = "Hi"
      if (itemQuantity == 1) {
        let item = e.currentTarget.parentElement;
        item.innerHTML = `
            <button id="decreaseQuantity">-</button>
            <p>${itemQuantity}</p>
            <button id="increaseQuantity">+</button>
      `;
        updateCart();
        changeQuantity();
      }
    });
  }

  function changeQuantity() {
    const increaseQtyBtn = document.getElementById("increaseQuantity");
    const decreaseQtyBtn = document.getElementById("decreaseQuantity");
    increaseQtyBtn.addEventListener("click", function () {
      itemQuantity++;
      increaseQtyBtn.previousElementSibling.innerHTML = itemQuantity;
    });
    decreaseQtyBtn.addEventListener("click", function () {
      itemQuantity--;
      if (itemQuantity == 0) {
        decreaseQtyBtn.parentElement.innerHTML = `<button class="cartButton">add to cart</button>`;
        cartButtonFunction();
      } else {
        decreaseQtyBtn.nextElementSibling.innerHTML = itemQuantity;
      }
    });
  }
}

function updateCart() {}
