let selectedType = '';
let selectedCategory = '';

function selectType(type) {
  selectedType = type;
  document.getElementById("step-1").classList.add("hidden");
  document.getElementById("step-2").classList.remove("hidden");
}

function selectCategory(category) {
  selectedCategory = category;
  document.getElementById("step-2").classList.add("hidden");
  document.getElementById("step-3").classList.remove("hidden");
  showRecipes();
}

let currentDisplayedRecipes = [];

function showRecipes() {
  const recipeList = {
    vegetarian: {
      starters: [
        {
          name: "Paneer Tikka",
          img: "tikka.jpg",
          cuisine: "Indian",
          ingredients: ["Paneer cubes", "Yogurt", "Spices", "Capsicum"],
          steps: ["Mix yogurt with spices.", "Marinate paneer.", "Grill it."]
        },
        {
          name: "Veg Spring Rolls",
          img: "springrolls.jpeg",
          cuisine: "Chinese",
          ingredients: ["Sheets", "Cabbage", "Carrot", "Sauce"],
          steps: ["Cook filling.", "Wrap.", "Fry till crispy."]
        },
        {
          name: "Hara Bhara Kabab",
          img: "hara-bhara.jpg",
          cuisine: "Indian",
          ingredients: ["Spinach", "Peas", "Potatoes", "Spices"],
          steps: ["Boil vegetables.", "Mash & season.", "Shape and shallow fry."]
        },
        {
          name: "Veg Manchurian",
          img: "manchurian.jpg",
          cuisine: "Chinese",
          ingredients: ["Cabbage", "Carrot", "Flour", "Soy Sauce", "Garlic", "Chili Sauce"],
          steps: [
            "Grate and mix veggies with flour.",
            "Shape into balls and fry.",
            "Prepare spicy sauce and toss fried balls."
          ]
        },
        {
          name: "Hakka Noodles",
          img: "hakka.jpg",
          cuisine: "Chinese",
          ingredients: ["Noodles", "Bell peppers", "Cabbage", "Soy sauce", "Garlic", "Spring onions"],
          steps: [
            "Boil noodles and keep aside.",
            "Stir-fry vegetables in oil.",
            "Add noodles, soy sauce, and toss well."
          ]
        },
        {
          name: "Margherita Pizza",
          img: "pizza.jpeg",
          cuisine: "Italian",
          ingredients: ["Pizza base", "Tomato sauce", "Mozzarella cheese", "Basil leaves"],
          steps: [
            "Spread sauce on base.",
            "Top with cheese and basil.",
            "Bake until cheese melts and crust is golden."
          ]
        },
        {
          name: "Creamy Pasta",
          img: "pasta.jpg",
          cuisine: "Italian",
          ingredients: ["Pasta", "Cream", "Garlic", "Oregano", "Cheese", "Butter"],
          steps: [
            "Boil pasta and drain.",
            "Cook garlic in butter, add cream and herbs.",
            "Mix with pasta and top with cheese."
          ]
        },
        {
          name: "Garlic Bread",
          img: "garlicbread.jpg",
          cuisine: "Italian",
          ingredients: ["Bread slices", "Butter", "Garlic", "Parsley", "Cheese (optional)"],
          steps: [
            "Mix butter with minced garlic and parsley.",
            "Spread on bread and bake until crispy.",
            "Top with cheese if desired and re-bake."
          ]
        },
        {
          name: "Paneer Chilli",
          img: "paneer-chilli.jpg",
          cuisine: "Chinese",
          ingredients: ["Paneer cubes", "Capsicum", "Onion", "Soy sauce", "Garlic", "Green chili"],
          steps: [
            "Fry paneer and keep aside.",
            "Stir-fry veggies and sauces.",
            "Mix in paneer and toss well."
          ]
        },
        {
          name: "Cheese Corn Balls",
          img: "cheese-corn-balls.jpg",
          cuisine: "Indian",
          ingredients: ["Sweet corn", "Cheese", "Boiled potato", "Cornflour", "Spices"],
          steps: [
            "Mix mashed corn, cheese, potato, and spices.",
            "Shape into balls, coat with cornflour.",
            "Deep fry until golden."
          ]
        },
        {
          name: "Crispy Mushroom Bites",
          img: "mushroom-bites.jpeg",
          cuisine: "Continental",
          ingredients: ["Mushrooms", "Breadcrumbs", "Flour", "Garlic powder", "Salt", "Pepper"],
          steps: [
            "Dip mushrooms in flour batter.",
            "Coat with breadcrumbs.",
            "Fry until crispy and golden."
          ]
        },
        {
          name: "Crispy Chilli Potatoes",
          img: "chilli-potatoes.jpg",
          cuisine: "Chinese",
          ingredients: ["Potato fingers", "Cornflour", "Soy sauce", "Garlic", "Chili sauce"],
          steps: [
            "Coat potato fingers in cornflour and fry.",
            "Toss in a tangy sauce with garlic and chili.",
            "Garnish with spring onions."
          ]
        },

{
  name: "Veg Crispy",
  img: "veg-crispy.jpg",
  cuisine: "indo-chinese",
  ingredients: ["Mixed veggies", "Cornflour", "All-purpose flour", "Soy sauce", "Garlic", "Chili sauce"],
  steps: [
    "Coat veggies with flour batter and deep fry.",
    "Prepare tangy sauce with garlic and sauces.",
    "Toss fried veggies in sauce and serve hot."
  ]
},
{
  name: "Babycorn Chilli",
  img: "babycorn-chilli.jpg",
  cuisine: "indo-chinese",
  ingredients: ["Babycorn", "Cornflour", "Capsicum", "Soy sauce", "Garlic", "Chili flakes"],
  steps: [
    "Fry cornflour-coated babycorn till crispy.",
    "Sauté capsicum and garlic in sauce.",
    "Mix fried babycorn and toss well."
  ]
},
{
  name: "Tandoori Paneer (Green)",
  img: "tandoori-paneer-green.jpg",
  cuisine: "indian",
  ingredients: ["Paneer cubes", "Green chutney", "Curd", "Spices", "Mint", "Coriander"],
  steps: [
    "Marinate paneer in green chutney & curd mix.",
    "Let it rest for 30 mins.",
    "Grill or bake till slightly charred."
  ]
},
{
  name: "Veg Lollipop",
  img: "veg-lollipop.jpg",
  cuisine: "indo-chinese",
  ingredients: ["Boiled veggies", "Bread crumbs", "Spices", "Flour"],
  steps: [
    "Mash veggies and mix with spices & crumbs.",
    "Shape like lollipops and insert sticks.",
    "Coat with flour and fry till golden."
  ]
},
{
  name: "Bhindi Fry",
  img: "bhindi-fry.jpg",
  cuisine: "indian",
  ingredients: ["Okra", "Rice flour", "Chili powder", "Turmeric", "Salt", "Oil"],
  steps: [
    "Slice bhindi thinly.",
    "Toss with spices and rice flour.",
    "Deep fry till crisp and golden."
  ]
},

{
  name: "Stuffed Mushroom",
  img: "stuffed-mushroom.jpg",
  cuisine: "fusion",
  ingredients: ["Mushrooms", "Paneer", "Spices", "Cheese", "Garlic"],
  steps: [
    "Scoop mushroom caps and stuff with paneer-spice mix.",
    "Top with cheese.",
    "Bake or grill until mushrooms soften and cheese melts."
  ]
},

{
  name: "Masala Papad",
  img: "masala-papad.jpg",
  cuisine: "indian",
  ingredients: ["Papad", "Onion", "Tomato", "Coriander", "Chaat masala", "Lemon juice"],
  steps: [
    "Roast or fry papad.",
    "Top with chopped onion, tomato, coriander.",
    "Sprinkle chaat masala and lemon juice. Serve crisp."
  ]
},
{
  name: "Dill Leaves Pakoda",
  img: "dill-pakoda.jpg",
  cuisine: "indian",
  ingredients: ["Dill leaves", "Gram flour", "Onions", "Spices", "Green chili"],
  steps: [
    "Mix dill, onions, and spices in besan.",
    "Drop spoonfuls into hot oil.",
    "Fry until golden and crisp."
  ]
},
{
  name: "Paneer Pakoda",
  img: "paneer-pakoda.jpg",
  cuisine: "indian",
  ingredients: ["Paneer slices", "Gram flour", "Carom seeds", "Spices", "Oil"],
  steps: [
    "Dip paneer in spiced gram flour batter.",
    "Deep fry until golden and crispy.",
    "Serve with green chutney."
  ]
},
{
  name: "Khaman Dhokla",
  img: "khaman-dhokla.jpg",
  cuisine: "gujarati",
  ingredients: ["Gram flour", "Curd", "Eno", "Mustard seeds", "Curry leaves", "Sugar-water"],
  steps: [
    "Make batter and steam.",
    "Prepare tempering of mustard and curry leaves.",
    "Pour over spongy dhokla and serve."
  ]
},
{
  name: "Mini Paneer Samosa",
  img: "mini-paneer-samosa.jpg",
  cuisine: "indian",
  ingredients: ["Paneer", "Spices", "All-purpose flour", "Oil"],
  steps: [
    "Prepare spicy paneer filling.",
    "Make small samosas with dough.",
    "Fry until golden. Serve with chutneys."
  ]
},
{
  name: "Zucchini Chips",
  img: "zucchini-chips.jpg",
  cuisine: "fusion",
  ingredients: ["Zucchini", "Bread crumbs", "Parmesan", "Olive oil"],
  steps: [
    "Slice zucchini and coat with breadcrumbs + cheese.",
    "Bake or air-fry until crispy.",
    "Serve with dip or sauce."
  ]
},
{
  name: "Rava Dhokla",
  img: "rava-dhokla.jpg",
  cuisine: "gujarati",
  ingredients: ["Semolina", "Curd", "Eno", "Mustard seeds", "Green chili", "Curry leaves"],
  steps: [
    "Prepare batter and let it rest.",
    "Steam till cooked and soft.",
    "Add tempering and garnish with coriander."
  ]
},
{
  name: "Air Fryer Falafel",
  img: "falafel.jpg",
  cuisine: "mediterranean",
  ingredients: ["Chickpeas", "Garlic", "Parsley", "Onions", "Spices"],
  steps: [
    "Grind soaked chickpeas with herbs.",
    "Shape into balls and air-fry until crispy.",
    "Serve with tahini or hummus."
  ]
},
{
  name: "Dahi Vada",
  img: "dahi-vada.jpg",
  cuisine: "indian",
  ingredients: ["Urad dal", "Curd", "Tamarind chutney", "Spices", "Coriander", "Pomegranate"],
  steps: [
    "Fry soft vadas from urad dal batter.",
    "Soak and squeeze out water.",
    "Top with curd, chutneys, and spices."
  ]
},

{
  name: "Pani Puri",
  img: "panipuri.jpg",
  cuisine: "indian",
  ingredients: ["Puris", "Spiced mashed potatoes", "Tamarind water", "Mint water", "Boondi"],
  steps: [
    "Prepare tangy pani using mint, tamarind, and spices.",
    "Stuff puris with potato and boondi.",
    "Dip in chilled pani and serve immediately."
  ]
},
{
  name: "Sev Puri",
  img: "sevpuri.jpg",
  cuisine: "indian",
  ingredients: ["Puris", "Boiled potatoes", "Onions", "Chutneys", "Sev", "Coriander"],
  steps: [
    "Arrange flat puris on plate.",
    "Top with mashed potato, onion, and chutneys.",
    "Garnish with sev and coriander."
  ]
},
{
  name: "Cheese Nachos",
  img: "cheese-nachos.jpg",
  cuisine: "mexican",
  ingredients: ["Nacho chips", "Cheddar cheese", "Jalapenos", "Salsa", "Beans", "Olives"],
  steps: [
    "Spread chips on a tray.",
    "Top with cheese, beans, and jalapenos.",
    "Bake till cheese melts. Add salsa and olives before serving."
  ]
},
{
  name: "Kothimbir Vadi",
  img: "kothimbir-vadi.jpg",
  cuisine: "maharashtrian",
  ingredients: ["Coriander leaves", "Besan", "Spices", "Green chilies", "Oil"],
  steps: [
    "Mix coriander with besan and spices to make a thick batter.",
    "Steam, cool, slice and shallow fry till crisp.",
    "Serve hot with chutney."
  ]
},
{
  name: "Veg Kebab",
  img: "veg-kebab.jpg",
  cuisine: "indian",
  ingredients: ["Mixed veggies", "Paneer", "Bread crumbs", "Spices"],
  steps: [
    "Boil and mash veggies with paneer and spices.",
    "Shape into kebabs and coat in bread crumbs.",
    "Shallow fry or grill until golden."
  ]
},
{
  name: "Veg Momos",
  img: "veg-momos.jpg",
  cuisine: "tibetan",
  ingredients: ["Maida", "Cabbage", "Carrot", "Garlic", "Ginger", "Soy Sauce"],
  steps: [
    "Prepare dough and stuffing.",
    "Shape momos and fill with veggie mix.",
    "Steam for 10–12 minutes and serve with chili dip."
  ]
},

{
  name: "Manchow Soup",
  img: "manchow-soup.jpg",
  cuisine: "chinese",
  ingredients: ["Mixed vegetables", "Soy sauce", "Garlic", "Ginger", "Cornflour", "Fried noodles"],
  steps: [
    "Sauté veggies with garlic and ginger.",
    "Add water, sauces and bring to boil.",
    "Thicken with cornflour, top with crispy noodles, and serve hot."
  ]
},
{
  name: "Sweet Corn Soup",
  img: "sweet-corn-soup.jpg",
  cuisine: "chinese",
  ingredients: ["Sweet corn", "Carrot", "Beans", "Cornflour", "Black pepper", "Salt"],
  steps: [
    "Boil veggies and crushed corn.",
    "Add cornflour slurry to thicken.",
    "Season and serve warm with pepper."
  ]
},
{
  name: "Tomato Soup",
  img: "tomato-soup.jpg",
  cuisine: "indian",
  ingredients: ["Tomatoes", "Butter", "Garlic", "Pepper", "Sugar", "Cream"],
  steps: [
    "Boil and blend tomatoes.",
    "Cook with butter, garlic, sugar, and seasonings.",
    "Strain, garnish with cream, and serve hot."
  ]
},
{
  name: "Chutney Sandwich",
  img: "chutney-sandwich.jpg",
  cuisine: "indian",
  ingredients: ["Bread slices", "Green chutney", "Butter", "Cucumber", "Tomato", "Potato (optional)"],
  steps: [
    "Apply butter and chutney on bread.",
    "Layer with thin veggie slices.",
    "Close sandwich, trim edges, and serve chilled or grilled."
  ]
},
{
  name: "Khandvi",
  img: "khandvi.jpg",
  cuisine: "gujarati",
  ingredients: ["Besan", "Buttermilk", "Turmeric", "Green chili", "Curry leaves", "Mustard seeds"],
  steps: [
    "Cook besan with buttermilk to a thick paste.",
    "Spread thin on plates, roll after cooling.",
    "Garnish with mustard seeds and curry leaves tadka."
  ]
}










      ],
      main: [
        {
          name: "Paneer Butter Masala",
          img: "img/paneersabji.jpg",
          cuisine: "Indian",
          ingredients: ["Paneer", "Tomatoes", "Cream", "Butter", "Spices"],
          steps: [
            "Cook tomato puree with spices.",
            "Add cream and butter.",
            "Add paneer cubes and simmer."
          ]
        },


{
  name: "Chole Bhature",
  img: "img/chole.jpeg",
  cuisine: "Indian",
  ingredients: ["Chickpeas", "Onion", "Tomatoes", "Spices", "Flour", "Yogurt"],
  steps: [
    "Soak and boil chickpeas.",
    "Cook gravy with onion, tomatoes, and spices.",
    "Prepare dough with flour and yogurt.",
    "Fry bhature and serve with chole."
  ]
},

{
  name: "Vegetable Biryani",
  img: "img/biryani.jpg",
 cuisine: "Indian",
  ingredients: ["Rice", "Mixed vegetables", "Yogurt", "Spices", "Saffron", "Fried onions"],
  steps: [
    "Parboil rice and set aside.",
    "Cook vegetables with spices and yogurt.",
    "Layer rice and veggies, top with saffron water.",
    "Steam and serve hot."
  ]
},

{
  name: "Palak Paneer",
  img: "img/palak.jpg",
 cuisine: "Indian",
  ingredients: ["Spinach", "Paneer", "Garlic", "Green chilies", "Cream"],
  steps: [
    "Boil and puree spinach.",
    "Sauté garlic and chilies, add spinach.",
    "Add paneer and simmer.",
    "Finish with a spoon of cream."
  ]
},
{
  name: "Rajma Chawal",
  img: "img/rajma.jpg",
 cuisine: "Indian",
  ingredients: ["Kidney beans", "Onion", "Tomatoes", "Spices", "Rice"],
  steps: [
    "Soak and boil rajma.",
    "Prepare onion-tomato masala.",
    "Add rajma and simmer.",
    "Serve hot with steamed rice."
  ]
},
{
  name: "Aloo Gobi",
  img: "img/aloogobi.jpg",
 cuisine: "Indian",
  ingredients: ["Potatoes", "Cauliflower", "Tomatoes", "Spices", "Coriander"],
  steps: [
    "Chop and sauté aloo and gobi.",
    "Add spices and cook till tender.",
    "Add tomatoes and finish with coriander."
  ]
},

{
  name: "Matar Paneer",
  img: "img/matar-paneer.jpg",
  ingredients: ["Paneer", "Green peas", "Tomatoes", "Onions", "Spices", "Ginger-garlic paste"],
  steps: [
    "Sauté onions, add tomatoes and spices to make a gravy.",
    "Add green peas and cook until soft.",
    "Add paneer cubes and simmer till cooked through."
  ]
},
{
  name: "Okra Curry (Bhindi Curry)",
  img: "img/okra-curry.jpg",
  ingredients: ["Okra (Bhindi)", "Onions", "Tomatoes", "Yogurt", "Spices"],
  steps: [
    "Wash and sauté okra until non-sticky.",
    "Prepare gravy with onions, tomatoes, yogurt, and spices.",
    "Mix okra into the curry and simmer for 5–7 minutes."
  ]
},
{
  name: "Paneer Bhurji",
  img: "img/paneer-bhurji.jpg",
  ingredients: ["Paneer", "Onions", "Tomatoes", "Green chilies", "Spices", "Coriander"],
  steps: [
    "Heat oil and sauté onions and green chilies.",
    "Add tomatoes and spices and cook till soft.",
    "Crumble paneer and add it to the masala.",
    "Garnish with coriander and serve hot."
  ]
},
{
  name: "Punjabi Chole",
  img: "img/punjabi-chole.jpg",
  ingredients: ["Chickpeas", "Onions", "Tomatoes", "Chole masala", "Ginger-garlic paste"],
  steps: [
    "Soak and cook chickpeas until soft.",
    "Prepare onion-tomato gravy with spices and chole masala.",
    "Add chickpeas and simmer until thick and flavorful."
  ]
},
{
  name: "Shahi Paneer (Punjabi Style)",
  img: "img/shahi-paneer.jpg",
  ingredients: ["Paneer", "Cashews", "Cream", "Onions", "Tomatoes", "Spices", "Milk"],
  steps: [
    "Soak and blend cashews for paste.",
    "Cook onions and tomatoes with spices and blend.",
    "Add paneer, cream, and cashew paste and simmer until creamy."
  ]
},
{
  name: "Chana Palak",
  img: "img/chana-palak.jpg",
  ingredients: ["Chickpeas", "Spinach", "Onions", "Tomatoes", "Spices"],
  steps: [
    "Boil chickpeas until tender.",
    "Blanch and puree spinach.",
    "Prepare onion-tomato gravy and add spinach puree.",
    "Mix in chickpeas and simmer together."
  ]
},
{
  name: "Methi Matar Malai",
  img: "img/methi-matar-malai.jpg",
  ingredients: ["Fenugreek leaves", "Green peas", "Fresh cream", "Onions", "Cashew paste", "Spices"],
  steps: [
    "Sauté onions and blend with cashews.",
    "Cook methi and green peas with the paste.",
    "Add cream and simmer till rich and thick."
  ]
},

{
  name: "Sarson ka Saag",
  img: "img/sarson-ka-saag.jpg",
  ingredients: ["Mustard leaves (sarson)", "Spinach", "Bathua (optional)", "Onion", "Ginger", "Makki atta", "Ghee"],
  steps: [
    "Clean and boil mustard, spinach, and bathua leaves.",
    "Blend to a coarse paste with ginger and green chilies.",
    "Cook with makki atta and sautéed onions in ghee.",
    "Simmer until thick and serve with makki roti."
  ]
},
{
  name: "Paneer Lababdar",
  img: "img/paneer-lababdar.jpg",
  ingredients: ["Paneer", "Tomatoes", "Onions", "Cashews", "Cream", "Butter", "Spices"],
  steps: [
    "Cook and blend tomatoes, onions, and cashews into a smooth gravy.",
    "Add butter, cream, and spices and simmer.",
    "Add paneer cubes and cook until flavors combine."
  ]
},
{
  name: "Capsicum Curry",
  img: "img/capsicum-curry.jpg",
  ingredients: ["Capsicum", "Onions", "Tomatoes", "Peanuts", "Sesame seeds", "Spices"],
  steps: [
    "Dry roast peanuts and sesame seeds, grind to paste.",
    "Sauté onions, tomatoes, and capsicum with spices.",
    "Add the paste and cook until thick and aromatic."
  ]
},
{
  name: "Kadai Paneer",
  img: "img/kadai-paneer.jpg",
  ingredients: ["Paneer", "Bell peppers", "Tomatoes", "Onions", "Kadai masala (roasted spices)", "Ginger", "Garlic"],
  steps: [
    "Prepare kadai masala using dry roasted coriander and red chilies.",
    "Cook onions, tomatoes, and capsicum with the masala.",
    "Add paneer and simmer for a few minutes before serving hot."
  ]
},

{
  name: "Paneer Makhani",
  img: "img/paneer-makhani.jpg",
  ingredients: ["Paneer", "Tomato puree", "Cream", "Butter", "Spices", "Honey"],
  steps: [
    "Sauté tomato puree with spices in butter.",
    "Add cream and honey to balance flavor.",
    "Add paneer and simmer until rich and creamy."
  ]
},
{
  name: "Baingan Bharta",
  img: "img/baingan-bharta.jpg",
  ingredients: ["Eggplant (baingan)", "Onions", "Tomatoes", "Garlic", "Spices"],
  steps: [
    "Roast the eggplant over flame and peel the skin.",
    "Mash and sauté with garlic, onions, tomatoes, and spices.",
    "Cook until flavors blend well. Serve hot."
  ]
},
{
  name: "Malai Kofta",
  img: "img/malai-kofta.jpg",
  ingredients: ["Paneer", "Potatoes", "Cashews", "Cream", "Tomatoes", "Spices"],
  steps: [
    "Make koftas using mashed paneer and potatoes, deep fry.",
    "Prepare creamy tomato-based gravy.",
    "Add koftas into the gravy before serving."
  ]
},
{
  name: "Veg Kolhapuri",
  img: "img/veg-kolhapuri.jpg",
  ingredients: ["Mixed vegetables", "Kolhapuri masala", "Tomatoes", "Onions", "Ginger garlic paste"],
  steps: [
    "Cook vegetables until tender.",
    "Prepare spicy Kolhapuri masala base using onions, tomatoes, and dry coconut.",
    "Mix veggies and cook till thick and spicy."
  ]
},
{
  name: "Paneer Kofta Curry",
  img: "img/paneer-kofta-curry.jpg",
  ingredients: ["Paneer", "Potatoes", "Cream", "Tomatoes", "Cashew paste", "Spices"],
  steps: [
    "Prepare koftas with paneer and mashed potatoes, deep fry.",
    "Make rich gravy with tomato, cream, and cashew paste.",
    "Add koftas to curry just before serving."
  ]
},
{
  name: "Achari Paneer",
  img: "img/achari-paneer.jpg",
  ingredients: ["Paneer", "Pickling spices", "Yogurt", "Onions", "Garlic", "Mustard oil"],
  steps: [
    "Marinate paneer in yogurt and achari masala.",
    "Sauté onions and garlic in mustard oil.",
    "Add paneer and cook until infused with pickle flavors."
  ]
},
{
  name: "Veg Handi",
  img: "img/veg-handi.jpg",
  ingredients: ["Mixed vegetables", "Onions", "Tomatoes", "Cream", "Cashews", "Spices"],
  steps: [
    "Sauté vegetables until tender.",
    "Prepare creamy gravy with onions, tomatoes, cashew paste, and spices.",
    "Simmer vegetables in the gravy and serve hot."
  ]
},
{
  name: "Paneer Jalfrezi",
  img: "img/paneer-jalfrezi.jpg",
  ingredients: ["Paneer", "Bell peppers", "Onions", "Tomatoes", "Spices"],
  steps: [
    "Stir-fry onions, tomatoes, and bell peppers.",
    "Add paneer strips and spices.",
    "Cook quickly over high heat. Serve dry or semi-dry."
  ]
}








      ],


desserts: [
       {
  name: "Gulab Jamun",
  img: "img/gulabjamun.jpg",
cuisine: "Indian",
  ingredients: ["Khoya", "Flour", "Sugar", "Cardamom", "Ghee"],
  steps: [
    "Make dough with khoya and flour.",
    "Shape into balls and fry.",
    "Soak in sugar syrup flavored with cardamom."
  ]
},
{
  name: "Rasgulla",
  img: "img/rasgulla.jpg",
  ingredients: ["Chenna (paneer)", "Sugar", "Water", "Rose water"],
  steps: [
    "Knead chenna and make soft balls.",
    "Boil in sugar water until spongy.",
    "Add rose water and chill."
  ]
},
{
  name: "Kheer",
  img: "img/kheer.jpg",
  ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Dry fruits"],
  steps: [
    "Boil milk and add soaked rice.",
    "Cook until thickened.",
    "Add sugar, cardamom, and dry fruits."
  ]
},
{
  name: "Mango Shrikhand",
  img: "img/mangoshrikhand.jpg",
  ingredients: ["Hung curd", "Mango pulp", "Sugar", "Cardamom", "Saffron"],
  steps: [
    "Mix mango pulp with hung curd and sugar.",
    "Add cardamom and saffron.",
    "Chill and serve."
  ]
},
{
  name: "Besan Ladoo",
  img: "img/besanladoo.jpg",
  ingredients: ["Besan (gram flour)", "Ghee", "Sugar", "Cardamom", "Nuts"],
  steps: [
    "Roast besan in ghee until golden.",
    "Add sugar and cardamom.",
    "Cool slightly, shape into laddoos."
  ]
},
{
  name: "Fruit Custard",
  img: "img/fruitcustard.jpg",
  ingredients: ["Custard powder", "Milk", "Sugar", "Mixed fruits"],
  steps: [
    "Make custard using milk and sugar.",
    "Cool and mix chopped fruits.",
    "Serve chilled."
  ]
},

{
  name: "Strawberry Cheesecake",
  img: "img/strawberrycheesecake.jpg",
  ingredients: ["Digestive biscuits", "Butter", "Cream cheese", "Strawberry puree", "Sugar", "Agar-agar (or gelatin-free thickener)"],
  steps: [
    "Crush biscuits and mix with melted butter.",
    "Press into a pan to form the base.",
    "Whip cream cheese with sugar and fold in strawberry puree and thickener.",
    "Pour over base and chill until set."
  ]
},
{
  name: "Blueberry Cheesecake",
  img: "img/blueberrycheesecake.jpg",
  ingredients: ["Digestive biscuits", "Butter", "Cream cheese", "Blueberry compote", "Sugar", "Cornflour"],
  steps: [
    "Prepare base with crushed biscuits and butter.",
    "Mix cream cheese with sugar and blueberry compote.",
    "Set in a pan with cornflour to thicken and chill."
  ]
},
{
  name: "Gajar Halwa",
  img: "img/gajarhalwa.jpg",
  ingredients: ["Carrots", "Milk", "Sugar", "Ghee", "Cardamom", "Cashews"],
  steps: [
    "Grate carrots and cook in milk until soft.",
    "Add sugar and ghee.",
    "Stir until thick and garnish with cardamom and cashews."
  ]
},
{
  name: "Moong Dal Halwa",
  img: "img/moonghalwa.jpg",
  ingredients: ["Moong dal", "Ghee", "Sugar", "Milk", "Cardamom", "Dry fruits"],
  steps: [
    "Soak and grind dal.",
    "Cook in ghee until golden.",
    "Add milk, sugar, cardamom and cook till thick."
  ]
},
{
  name: "Chocolate Lava Cake (Eggless)",
  img: "img/lavacake.jpg",
  ingredients: ["All-purpose flour", "Cocoa powder", "Baking soda", "Butter", "Dark chocolate", "Milk", "Sugar"],
  steps: [
    "Prepare batter and pour into ramekins.",
    "Insert a chocolate cube in the center.",
    "Bake and serve warm for gooey center."
  ]
},
{
  name: "Rava Kesari",
  img: "img/kesari.jpg",
  ingredients: ["Rava (semolina)", "Sugar", "Ghee", "Cardamom", "Saffron", "Cashews"],
  steps: [
    "Roast rava in ghee.",
    "Boil water, add saffron, then rava and sugar.",
    "Cook until thick and garnish with cashews."
  ]
},

{
  name: "Eggless Lemon Cake",
  img: "img/eggless-lemon-cake.jpg",
  ingredients: ["All-purpose flour", "Baking soda", "Lemon juice", "Sugar", "Oil", "Yogurt", "Lemon zest"],
  steps: [
    "Preheat oven and grease baking tin.",
    "Mix dry ingredients together.",
    "Whisk wet ingredients with lemon zest.",
    "Combine and pour into tin.",
    "Bake at 180°C for 30–35 mins."
  ]
},
{
  name: "Eggless Mango Cake",
  img: "img/eggless-mango-cake.jpg",
  ingredients: ["All-purpose flour", "Baking powder", "Baking soda", "Mango pulp", "Sugar", "Oil", "Yogurt"],
  steps: [
    "Mix mango pulp, sugar, yogurt, and oil.",
    "Combine with sifted dry ingredients.",
    "Pour into a greased pan and bake at 180°C for 35–40 mins.",
    "Cool and garnish with mango slices."
  ]
},
{
  name: "Eggless Banana Cake",
  img: "img/eggless-banana-cake.jpg",
  ingredients: ["Bananas", "All-purpose flour", "Brown sugar", "Oil", "Baking soda", "Baking powder", "Vanilla extract"],
  steps: [
    "Mash bananas and mix with sugar and oil.",
    "Add vanilla and sifted dry ingredients.",
    "Pour in tin and bake at 180°C for 35 mins.",
    "Cool and enjoy moist banana cake."
  ]
},
{
  name: "Eggless Pound Cake",
  img: "img/eggless-pound-cake.jpg",
  ingredients: ["All-purpose flour", "Baking powder", "Butter", "Sugar", "Condensed milk", "Vanilla essence", "Milk"],
  steps: [
    "Cream butter and sugar, add condensed milk.",
    "Mix in flour and milk alternately.",
    "Pour into tin and bake at 180°C for 40 mins.",
    "Cool and serve slices."
  ]
},
{
  name: "Eggless Marble Cake",
  img: "img/eggless-marble-cake.jpg",
  ingredients: ["All-purpose flour", "Sugar", "Yogurt", "Baking powder", "Cocoa powder", "Milk", "Oil"],
  steps: [
    "Make vanilla and cocoa batters separately.",
    "Pour alternately in tin to create swirls.",
    "Bake at 180°C for 35 mins.",
    "Cool, slice and serve."
  ]
},
{
  name: "Chocolate Brownies",
  img: "img/brownies.jpg",
  ingredients: ["Flour", "Cocoa powder", "Sugar", "Butter", "Yogurt", "Vanilla extract", "Choco chips"],
  steps: [
    "Mix wet ingredients and whisk well.",
    "Fold in dry ingredients and choco chips.",
    "Pour in tray and bake at 180°C for 30–35 mins.",
    "Let cool and cut into squares."
  ]
},
{
  name: "Banana Muffins",
  img: "img/banana-muffins.jpg",
  ingredients: ["Bananas", "Flour", "Sugar", "Baking soda", "Oil", "Vanilla", "Milk"],
  steps: [
    "Mash bananas and mix with sugar and oil.",
    "Add dry ingredients and mix gently.",
    "Pour into muffin tray and bake at 180°C for 20–25 mins."
  ]
},
{
  name: "Eggless Cranberry Orange Muffins",
  img: "img/eggless-cranberry-orange-muffins.jpg",
  ingredients: ["Flour", "Orange zest", "Cranberries", "Baking powder", "Sugar", "Milk", "Oil"],
  steps: [
    "Combine dry ingredients with cranberries and zest.",
    "Add milk and oil to make batter.",
    "Pour into muffin cups and bake at 180°C for 20 mins."
  ]
},
{
  name: "Nutter Butter Ghost Cookies",
  img: "img/ghost-cookies.jpg",
  ingredients: ["Nutter Butter cookies", "White chocolate", "Black icing gel"],
  steps: [
    "Dip Nutter Butter cookies in melted white chocolate.",
    "Let set and draw ghost eyes with black icing.",
    "Let cool and serve spooky treats."
  ]
},
{
  name: "Eggless Pumpkin Pie",
  img: "img/eggless-pumpkin-pie.jpg",
  ingredients: ["Pumpkin puree", "Condensed milk", "Cornstarch", "Cinnamon", "Nutmeg", "Pie crust"],
  steps: [
    "Blend all ingredients and pour into pie crust.",
    "Bake at 180°C for 40–45 mins.",
    "Cool and serve with whipped cream."
  ]
},
{
  name: "Peach Crumble",
  img: "img/peach-crumble.jpg",
  ingredients: ["Peach slices", "Brown sugar", "Flour", "Butter", "Oats", "Cinnamon"],
  steps: [
    "Layer peaches in baking dish.",
    "Top with crumbly flour-butter-sugar-oats mix.",
    "Bake at 180°C for 35 mins until golden.",
    "Serve warm with vanilla ice cream."
  ]
},
{
  name: "Red Velvet Cheesecake Brownies",
  img: "img/red-velvet-cheesecake-brownies.jpg",
  ingredients: ["Flour", "Cocoa", "Sugar", "Butter", "Red color", "Cream cheese", "Vanilla extract"],
  steps: [
    "Prepare red velvet brownie base.",
    "Swirl in cream cheese mixture.",
    "Bake at 180°C for 30 mins.",
    "Cool and cut into squares."
  ]
}




],



    },

    "non-vegetarian": {
      starters: [
        {
          name: "Chicken Lollipop",
          img: "img/lollipop.jpg",
          ingredients: ["Chicken", "Spices", "Flour"],
          steps: ["Marinate.", "Fry.", "Serve hot."]
        },
        {
          name: "Fish Fry",
          img: "img/fish.jpg",
          ingredients: ["Fish fillets", "Turmeric", "Red chili", "Ginger garlic paste", "Oil"],
          steps: [
            "Marinate fish with spices.",
            "Let it rest for 30 mins.",
            "Shallow fry until crisp and golden."
          ]
        },
        {
          name: "Prawn Tempura",
          img: "img/prawns.jpg",
          ingredients: ["Prawns", "Tempura flour", "Ice water", "Oil"],
          steps: [
            "Dip prawns in tempura batter.",
            "Fry until light and crispy.",
            "Serve with dipping sauce."
          ]
        },
        {
          name: "Chicken Shawarma",
          img: "img/shawarma.jpeg",
          ingredients: [
            "Boneless chicken",
            "Yogurt",
            "Garlic",
            "Paprika",
            "Cumin",
            "Lemon juice",
            "Pita bread",
            "Tahini or mayo sauce"
          ],
          steps: [
            "Marinate chicken with yogurt, garlic, paprika, cumin, lemon juice.",
            "Cook on pan or grill till juicy and charred.",
            "Wrap in pita with onions, lettuce, and sauce.",
            "Serve hot with fries or salad."
          ]
        }
      ],
      main: [
        {
          name: "Butter Chicken",
          img: "img/butterchicken.jpg",
          ingredients: ["Chicken", "Butter", "Tomatoes", "Cream", "Spices"],
          steps: [
            "Cook chicken in spices.",
            "Add butter and tomato puree.",
            "Add cream and simmer."
          ]
        },

      

     {
      name: "Mutton Rogan Josh",
      img: "img/roganjosh.jpg",
      ingredients: ["Mutton", "Yogurt", "Onion", "Spices", "Garlic"],
      steps: [
        "Sear mutton with onions and garlic.",
        "Add whisked yogurt and cook on low flame.",
        "Add spices and simmer till tender.",
        "Serve hot with rice or naan."
      ]
    },
    {
      name: "Fish Curry",
      img: "img/fishcurry.jpg",
      ingredients: ["Fish", "Tamarind", "Coconut milk", "Mustard seeds", "Spices"],
      steps: [
        "Marinate fish in turmeric and salt.",
        "Prepare curry with tamarind, spices, and coconut milk.",
        "Add fish and simmer gently.",
        "Serve with steamed rice."
      ]
    },
    {
      name: "Egg Curry",
      img: "img/egg.jpg",
      ingredients: ["Boiled eggs", "Onions", "Tomatoes", "Ginger garlic paste", "Spices"],
      steps: [
        "Prepare onion-tomato masala.",
        "Add boiled eggs and simmer.",
        "Garnish with coriander and serve hot."
      ]
    },
    {
      name: "Chicken Biryani",
      img: "img/chickenbiryani.jpg",
      ingredients: ["Chicken", "Rice", "Yogurt", "Fried onions", "Spices", "Saffron"],
      steps: [
        "Marinate chicken with yogurt and spices.",
        "Layer half-cooked rice and marinated chicken.",
        "Add saffron water and fried onions.",
        "Cook on dum till fully done."
      ]
    }



      ],

desserts: [
       {
    name: "Egg Pudding",
    img: "img/eggpudding.jpg",
    ingredients: ["Milk", "Eggs", "Sugar", "Vanilla essence"],
    steps: [
      "Beat eggs with sugar and vanilla.",
      "Heat milk and mix into egg mixture.",
      "Pour into moulds and bake or steam.",
      "Chill before serving."
    ]
  },


{
  name: "Chocolate Mousse",
  img: "img/chocolatemousse.jpg",
  ingredients: ["Dark chocolate", "Eggs", "Sugar", "Whipped cream"],
  steps: [
    "Melt chocolate and let it cool slightly.",
    "Separate egg yolks and whites.",
    "Mix yolks into chocolate, whip whites with sugar.",
    "Fold whipped cream and egg whites into the chocolate.",
    "Chill before serving."
  ]
},

{
  name: "Tiramisu",
  img: "img/tiramisu.jpg",
  ingredients: ["Eggs", "Mascarpone", "Sugar", "Ladyfingers", "Coffee", "Cocoa powder"],
  steps: [
    "Beat egg yolks with sugar until creamy.",
    "Add mascarpone cheese and mix.",
    "Dip ladyfingers in coffee and layer with mascarpone mix.",
    "Dust with cocoa and refrigerate for hours."
  ]
}


]
    }
  };

currentDisplayedRecipes = recipeList[selectedType][selectedCategory] || [];

const recipeCards = document.getElementById("recipe-cards");
recipeCards.innerHTML = '';

currentDisplayedRecipes.forEach(recipe => {
  const card = document.createElement("div");
  card.className = "recipe-card";
  card.innerHTML = `
    <img src="${recipe.img}" alt="${recipe.name}">
    <h3>${recipe.name}</h3>
  `;
  card.onclick = () => openModal(recipe);
  recipeCards.appendChild(card);
});

}

function filterRecipes() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const recipeCards = document.getElementById("recipe-cards");
  recipeCards.innerHTML = '';

  const filtered = currentDisplayedRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query)
  );

  filtered.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.img}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
    `;
    card.onclick = () => openModal(recipe);
    recipeCards.appendChild(card);
  });
}




function openModal(recipe) {
  document.getElementById('modal-title').innerText = recipe.name;
  document.getElementById('modal-img').src = recipe.img;

  const ingredientsList = document.getElementById('modal-ingredients');
  ingredientsList.innerHTML = '';
  recipe.ingredients.forEach(item => {
    const li = document.createElement('li');
    li.innerText = item;
    ingredientsList.appendChild(li);
  });

  const stepsList = document.getElementById('modal-steps');
  stepsList.innerHTML = '';
  recipe.steps.forEach(step => {
    const li = document.createElement('li');
    li.innerText = step;
    stepsList.appendChild(li);
  });

  document.getElementById('recipeModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('recipeModal').classList.add('hidden');
}





