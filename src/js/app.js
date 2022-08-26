/**
 * Elementos HTML
 */

// Container do Splash Screen
const splashContainer = document.querySelector(".splash");

// Elementos do filtro customizado
let customFilter = document.querySelectorAll('.form input');
let itemsList = document.querySelector('.items-list');
let foundItems = document.querySelector('.foundItems');
foundItems.innerText = 0;

// Elementos relacionados às categorias e subcategorias
let subcategoryTitles = document.querySelectorAll('.subcategory-title');
let subcategoryData = document.querySelectorAll('.subcategory-data');

let specialSubcategoryTitles = document.querySelectorAll('.special-subcategory-title');
let specialSubcategoryData = document.querySelectorAll('.special-subcategory-data');

let activitiesTitles = document.querySelectorAll('#activities .subcategory-title');
let activitiesData = document.querySelectorAll('#activities .subcategory-data');

/**
 * Chamada das funções
 */

// Timer do Splash screen
setTimeout(slideLeft, 3000);

// Botões de filtro
let btnContainer = document.querySelector(".categories-list-btns");
let btns = btnContainer.querySelectorAll('.btn');

// Categoria de informações fica visível por padrão
document.getElementById("info").classList.remove("invisible");

// Mostra a tab "Comidas" por padrão
document.getElementById("Food").classList.remove("invisible");

// Controla a renderização dos dados. Evita que seja renderizado repetidas vezes
// Favorecendo a performance
let isDataRendered = false;
if (isDataRendered == false) {
  renderMenu(menu);
  isDataRendered = true;
}

// Vetor com os dias da semana que ocorrem atividades de lazer
const days = [
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
  "Domingo"
];

// Chamada da função para renderizar a programação do lazer
renderActivitiesSchedule(activities, days);

// Vetor feito para que o filtro somente mostre categorias relacionadas ao cardápio
const categories = [
  'Comidas',
  'Bebidas',
  'Lanches',
  'Vinhos',
  '24 Horas'
];

// Ações relacionadas ao input de filtro/busca
customFilter[0].addEventListener('keyup', filterFunction);
customFilter[0].addEventListener('focus', hideAllElementsOnFilterFocus);

