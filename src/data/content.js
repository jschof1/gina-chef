import { images } from "./assets.js";

export const testimonials = [
  {
    quote:
      "Absolutely five stars. Ginna was amazing from start to finish. She organised a last minute dinner for eight guests and everything was seamless.",
    detail:
      "The food was delicious, beautifully presented, and each course was paired expertly. Everyone was impressed by her professionalism and talent.",
  },
  {
    quote:
      "Ginna was epic. A high quality chef who served up an absolute feast for us and made everyone feel comfortable and looked after.",
    detail:
      "She catered for all our needs and I would not hesitate to book her again.",
  },
];

export const menuCollections = [
  {
    name: "Italian",
    label: "How I might cook Italian",
    image: images.menuA,
    items: [
      "Seasonal burrata with grilled peaches and basil oil",
      "Handmade pasta with brown butter, sage, and crispy pangrattato",
      "Slow-cooked beef ragu with parmesan and herb crumb",
      "Lemon olive oil cake with mascarpone cream",
    ],
  },
  {
    name: "Modern European",
    label: "How I might cook Modern European",
    image: images.menuB,
    items: [
      "Oysters with citrus mignonette",
      "Citrus salmon gravlax with avocado puree",
      "Beef Wellington with sweet potato and horseradish",
      "Crispy panko prawn with pickled cucumber and aioli",
    ],
  },
];

export const serviceCards = [
  {
    title: "Private Dining",
    body:
      "I cook in your home or venue and build the evening around you: intimate dinners, celebrations, and those nights when you want something that feels properly special.",
    icon: "restaurant",
  },
  {
    title: "Seasonal Menus",
    body:
      "I write menus around what’s in season and what you’re in the mood for, using fresh produce and ingredients I’ve chosen with care.",
    icon: "grocery",
  },
  {
    title: "Shared Occasions",
    body:
      "Whether it’s a big birthday or a relaxed family-style feast, I want every detail to feel personal, warm, and worth remembering.",
    icon: "celebration",
  },
];

export const aboutPillars = [
  {
    title: "Local Farmers",
    text: "I choose ingredients for quality, freshness, and where they came from.",
    icon: "eco",
  },
  {
    title: "Seasonal Menus",
    text: "I change what I cook with the season instead of repeating the same dishes all year.",
    icon: "event_available",
  },
  {
    title: "Thoughtful Hosting",
    text: "I want your evening to feel calm, generous, and beautifully put together.",
    icon: "favorite",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About me" },
  { to: "/menus", label: "Menus" },
  { to: "/contact", label: "Get in touch" },
];
