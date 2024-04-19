const menu = [
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

const sectionCenter = document.querySelector(".section-center");

const button = document.querySelectorAll(".filter-btn");
// document.querySelector('.section-center').innerHTML("Hi there")

const sortBy = document.querySelectorAll(".sortByOption");

const sortBy2 = document.getElementById("sortBy");
// sortBy.addEventListener("change",function(e){
//   console.log(e.currentTarget);
// })

let category="all";
sortBy.forEach(function(sort){
  console.log(sort.innerHTML)
})

sortBy2.addEventListener("change",function(e){
  let options = sortBy2.querySelectorAll("option");
  var count = options.length;
  options.forEach(function(option){
    if (option.selected){
      console.log(option.value);
      if (option.value == "sortbyprice_lth"){
        lowToHigh();
      }
      else if (option.value == "sortbyprice_htl"){
        highToLow();
      }
    };
  });
});

// Function for sorting by price from low to high
function lowToHigh(){
  console.log("In low to high function");
  const sectionCenter = document.querySelector(".section-center");
  //  Filter the menu according to the category
  if (category == "all"){
    sortFunction(menu);
  }
  else{
    let menuItem = menu.filter(function(item){
      if (item.category===category){
        return item;
      }
    });
    sortFunction(menuItem);
  }
  
  function sortFunction(menuToSort){
    let sortedMenu = menuToSort.filter(function(item){
      console.log(item);
      
      
    })
    const flatObj = Object.keys(menuToSort).reduce((acc, key) => {
      acc[key] = menuToSort[key].price; // Assuming you want to sort by the 'name' property
      return acc;
    }, {});
    console.log(flatObj,typeof flatObj);

    const filteredData = menuToSort.filter((item, index) => item.price>15 ) 
    console.log(filteredData);
    
    const sortedKeys = Object.keys(menuToSort).sort((a, b) => {
      // return menuToSort[a].title.localeCompare(menuToSort[b].title);
      // console.log(menuToSort[a].price, menuToSort[b].price);
      if (menuToSort[a].price>menuToSort[b].price){
        return menuToSort[a];
      }
      else{
        return menuToSort[b];
      }
    });
    console.log(sortedKeys);
    // console.log(sortedMenu);
  }
  
  // console.log(flatObj);

}

// function for sorting by price from high to low
function highToLow(){

}


window.addEventListener("DOMContentLoaded", function () {
  displayItems(menu);
});

button.forEach(function(btn){
  btn.addEventListener("click",function(e){
    category = e.currentTarget.dataset["filter"];
    console.log(category);
    let menuItem = menu.filter(function(item){
      if (item.category===category){
        return item;
      }
    })
    console.log(menuItem);
    if (category === 'all'){
      displayItems(menu)
    }
    else{
      displayItems(menuItem)
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
    </div>
  </article>`;
  });

  // let itemImages = menu.filter((item, index) => item.price > 10 && item.id > 5);

  // console.log("itemImages :", itemImages);

  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}
