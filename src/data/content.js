import { images } from "./assets.js";

export const site = {
  brand: "Chef Georgina", legalName: "Georgina Stinton",
  email: "georgestinton@hotmail.com", phoneDisplay: "07539 737111",
  phoneHref: "+447539737111", instagramHandle: "@chef.georgina",
  instagramUrl: "https://www.instagram.com/chef.georgina/",
};

export const navLinks = [
  { to: "/", label: "Home" }, { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" }, { to: "/menus", label: "Menus" },
  { to: "/reviews", label: "Reviews" }, { to: "/faq", label: "What to expect" },
  { to: "/contact", label: "Contact" },
];

export const serviceCards = [
  { title: "Bespoke private dining", body: "A crafted dining experience shaped around your tastes, occasion and guests, hosted in the comfort of your home or accommodation.", icon: "restaurant" },
  { title: "Seasonal menus", body: "Menus evolve with the seasons, celebrating British produce and fresh ingredients from independent farmers, producers and artisans where possible.", icon: "eco" },
  { title: "Celebrations together", body: "From intimate dinners to birthdays, hen weekends and family feasts, the evening is planned to create memories as well as dinner.", icon: "celebration" },
];

export const aboutPillars = [
  { title: "Local and seasonal", text: "Seasonal, regional ingredients are sourced from nearby independent providers and artisans wherever possible.", icon: "eco" },
  { title: "Lower-waste cooking", text: "Thoughtful buying, shorter supply chains and careful preparation help reduce waste while supporting the local community.", icon: "compost" },
  { title: "Generous hosting", text: "Every course is served with warmth and care, followed by a complete kitchen clear-down so you can stay with your guests.", icon: "favorite" },
];

export const testimonials = [
  { quote: "As soon as Georgina arrived we knew we were in good hands. The food and presentation were high quality, and the fresh local ingredients made our anniversary really special.", attribution: "Norah · August 2026 · 13 guests", source: "Yhangry" },
  { quote: "Her cooking was incredible, with so much homemade or sourced locally. It was the perfect dinner for my bridesmaids the night before my wedding.", attribution: "Ellie · July 2026 · 10 guests", source: "Yhangry" },
  { quote: "Georgina was amazing from first message to last bite. She accommodated allergies, laid everything out beautifully and left the kitchen spotless.", attribution: "Emily · June 2026 · 9 guests", source: "Yhangry" },
  { quote: "Everything was perfect. Georgina even helped lay the table, the food was beautifully presented, and she created a relaxed atmosphere for everyone.", attribution: "Ana · March 2026 · 11 guests", source: "Yhangry" },
  { quote: "All four courses were absolutely delicious. Georgina explained her ingredient choices, gave generous portions and left the kitchen spotless.", attribution: "Anna · January 2026 · 8 guests", source: "Yhangry" },
  { quote: "Georgina was charming, efficient and professional. Her menus were interesting, her food delicious, and she left my kitchen spotless.", attribution: "John B · 1 July 2025", source: "Take a Chef" },
  { quote: "The presentation was fantastic and everyone thought the food was excellent. You delivered a real sense of occasion with every course.", attribution: "Jenniefer · 10 June 2025", source: "Take a Chef" },
  { quote: "First time with a private chef and Georgina made it both special and relaxing. We felt completely comfortable, but spoiled.", attribution: "Tessa · August 2025 · 9 guests", source: "Yhangry" },
];

export const menuCollections = [
  {
    slug: "seasonal-british", name: "Seasonal British", label: "British produce, led by the season", image: images.menuA,
    intro: "A celebration of British food using local ingredients and seasonal produce. Choose one to four courses, with every menu adjusted to your tastes and dietary requirements.",
    courses: [
      { title: "Light bites", items: ["Cream of asparagus and pea soup shot with garden mint oil", "Beef Wellington bite with sweet potato and horseradish purée", "Courgette fritter with tarragon aioli", "Bloody Mary prawn cocktail"] },
      { title: "First course", items: ["Seared scallops with celeriac and apple purée, pancetta crisp and pickled apple", "Duck croquette with celeriac remoulade and poached duck egg", "Whipped goat’s cheese bonbons with poached pear and walnut salad", "Hot honey halloumi with carrot and orange salad"] },
      { title: "Main course", items: ["Roasted chicken breast, thigh croquette, pomme Anna and butterhead lettuce with jus", "Lamb fillet with caramelised feta, carrot purée and cumin-roasted broccoli", "Brown butter-baked haddock with braised fennel, fennel velouté and brown shrimp", "Roasted tomato tarte Tatin with tomato beurre blanc and baby leaves"] },
      { title: "Something sweet", items: ["Sticky toffee pudding with hot toffee sauce and vanilla ice cream", "Pistachio and raspberry Bakewell tart with raspberry sorbet", "Apple crumble tart with salted caramel and vanilla bean custard", "Honey and lavender poached pear with ginger crumb and honey ice cream"] },
    ],
  },
  {
    slug: "modern-european", name: "Modern European", label: "Classic technique, contemporary flavour", image: images.menuB,
    intro: "Classic European techniques meet seasonal British ingredients and international influences, with an emphasis on balanced flavours, textures and lighter, thoughtful cooking.",
    courses: [
      { title: "Canapés", items: ["Oysters with citrus mignonette", "Crispy panko prawn with pickled cucumber and aioli", "Ham and cheese croquettes with piccalilli", "Smoked trout roe on Parmesan shortbread"] },
      { title: "Starter", items: ["Citrus salmon gravlax with avocado purée", "Seared scallops with parsnip purée and lemon butter sauce", "Celeriac velouté with artichoke and herbs", "Cheese soufflé with fresh figs and honey"] },
      { title: "Main course", items: ["Fillet steak, black garlic and mushroom purée, dauphinois and beef jus", "Monkfish with prawn bisque, new potatoes and garden greens", "Chicken and spinach roulade with wild rice salad and green sauce", "Spiced cauliflower steak with white bean and spinach stew"] },
      { title: "Dessert", items: ["Dark chocolate marquise with salted caramel and honeycomb", "Lemon and passion fruit tart", "Vanilla crème brûlée with blueberry compote and almond sablé", "Pear tarte Tatin with crème anglaise"] },
    ],
  },
  {
    slug: "taste-of-italy", name: "A Taste of Italy", label: "Regional classics, made for sharing", image: images.menuC,
    intro: "Italian simplicity, bold flavour and regional technique, brought together with local and seasonal produce. Choose one to four courses or an antipasti grazing board.",
    courses: [
      { title: "To begin", items: ["Parmesan baskets with olives, sun-dried tomatoes and Parma ham", "Pea and asparagus arancini bites", "Fig and cheese bruschetta with hot honey", "Beef carpaccio roll with truffle oil and pecorino"] },
      { title: "Starter", items: ["Carbonara ravioli", "Burrata with roasted peach and tomato salad", "Mushroom tortellini with burnt butter and Parmesan", "Butternut tortellini with harissa and goat’s cheese"] },
      { title: "Main course", items: ["Tagliatelle with black truffle butter and pecorino", "Braised beef pappardelle in roasted tomato sauce", "Chicken Milanese with lemon butter, rocket and Parmesan salad", "Grilled sea bream with artichoke caponata"] },
      { title: "Dessert", items: ["Classic tiramisu", "Orange-baked polenta cake with lemon zabaglione", "Vanilla panna cotta with strawberry and basil", "Affogato with homemade gelato and Italian coffee"] },
    ],
  },
  {
    slug: "brunch", name: "Brunch", label: "A generous start to the day", image: images.menuD,
    intro: "Choose an individually served main with a shared side and drink, or create a relaxed table of sharing dishes using local, seasonal ingredients and artisan produce.",
    courses: [
      { title: "Main dishes", items: ["Full English with butcher’s bacon, sausage, black pudding and homemade baked beans", "Eggs Benedict, Royale or Florentine", "Turkish eggs with garlic yoghurt, spiced butter and flatbread", "Sweet potato rösti with caramelised onion, feta and poached eggs"] },
      { title: "Plant-led", items: ["Vegetarian or vegan Full English", "Vegan scrambled eggs with roast potatoes and mushrooms", "Mango and pineapple spiced smoothie bowl", "Shakshuka with tomato, pepper, onion and spices"] },
      { title: "To share", items: ["American pancakes with maple syrup", "Brioche French toast, sweet or savoury", "Seasonal fruit platter", "Greek yoghurt, honey, homemade granola and seasonal berries"] },
      { title: "Drinks", items: ["Green or blueberry and chai smoothie", "Orange and apple juice", "Bloody Mary", "Hugo Spritz or Bellini"] },
    ],
  },
];

export const menuStyles = ["Modern European", "British", "Sharing plates", "Brunch", "Italian", "Middle Eastern", "Asian", "French", "Roast", "Afternoon tea"];
export const extras = ["Wine pairings", "British or European cheese board", "Celebration cakes", "Cocktails", "Ready meals or a finish-at-home brunch or lunch for the following day", "Table decoration", "Flowers"];

export const faqs = [
  { question: "What is included?", answer: "Your experience includes a bespoke menu, locally sourced ingredients where possible, advance preparation, cooking in your kitchen, service and a full clear-down. Travel is included in the quoted cost. Additional dishes, servers and optional extras can be discussed separately." },
  { question: "How do I secure a date?", answer: "Start by sharing your preferred date, guest count, the kind of menu or experience you want and any dietary requirements. A 40% deposit secures the booking, after which we build your menu together." },
  { question: "What is the cancellation and payment schedule?", answer: "The 40% deposit is refundable up to two weeks before the event in an emergency. The remaining balance is due by one week before the event, or can be paid sooner. This wording is supplied by Georgina and remains subject to owner review before launch." },
  { question: "Do you cater for dietary requirements?", answer: "Yes. Menus can be adapted for dietary and allergen requirements, including plant-based options. Please provide full details during the enquiry so the menu and kitchen plan can be discussed carefully." },
  { question: "Do you offer children’s menus?", answer: "Yes. Children’s menus can be planned alongside the main menu, with dishes and portions adapted to the age and preferences of the children attending." },
  { question: "What do you need from my kitchen?", answer: "Georgina needs access to a working kitchen. If the kitchen is not fully equipped, she can bring some equipment by prior arrangement. Ingredients are sourced and some preparation is completed in advance, with the rest finished on site." },
  { question: "What qualifications do you hold?", answer: "Georgina’s supplied information states Level 5 Food Hygiene and Level 2 Health and Safety qualifications. Supporting certificate details should be checked by the owner before launch." },
  { question: "What if Georgina is already booked?", answer: "If your preferred date is unavailable, Georgina can direct you to chef platforms she works with so you can continue your search." },
];

export const chefPlatforms = [
  { label: "Yhangry", href: "https://yhangry.com/#a_aid=GeorginaS" },
  { label: "Chef Georgina Stinton", href: "https://www.chefgeorginastinton.com/" },
  { label: "Take a Chef", href: "https://www.takeachef.com/en-gb/our-chefs" },
];

export const galleryImages = [images.galleryA, images.galleryB, images.galleryC, images.galleryD, images.galleryE, images.galleryF, images.galleryG, images.galleryH, images.galleryI, images.galleryJ, images.galleryK, images.galleryL];
