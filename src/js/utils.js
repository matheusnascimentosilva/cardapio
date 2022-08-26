/**
 * @brief Função responsável por controlar o offset do Splash Screen
 */

function slideLeft() {
  splashContainer.style.left = "-100vw";
}

/**
 * @brief Função responsável por controlar a visibilidade das categorias
 * conforme o nome da categoria
 *
 * @param e        Event
 * @param name     String
 */

function openCategoryItems(e, category) {
  let categorycontent, categorylinks, tabcontent, menucontent, customSearch;

  menucontent = document.querySelector('.menu-data');

  // Esconde o container de resultados de filtragem caso ele esteja visível
  customSearch = document.querySelector(".custom-search");
  if (!customSearch.className.split(" ").includes('invisible')) {
    customSearch.classList.add('invisible');
    showAllElements();
  }

  // Quando a categoria for 'menu' mostra as categorias do cardápio
  tabcontent = document.querySelectorAll('.tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
    if (category == 'menu') {
      tabcontent[i].classList.remove("invisible");
    }
  }

  categorycontent = document.querySelectorAll('.categorycontent');
  for (let i = 0; i < categorycontent.length; i++) {
    if (!categorycontent[i].className.split(" ").includes("invisible")) {
      categorycontent[i].classList.add("invisible");
    }

    category == "menu"
      ? menucontent.classList.remove("invisible")
      : menucontent.classList.add("invisible");
  }

  // Pega todos os elementos com a class="tablinks" e remove a classe "active"
  categorylinks = document.querySelectorAll(".categorylinks");
  for (let i = 0; i < categorylinks.length; i++) {
    categorylinks[i].className = categorylinks[i].className.replace(" active", "");
  }

  // Mostra a tab atual, e adiciona uma classe "active" ao botão que abriu o tab
  document.getElementById(category).classList.remove("invisible");
  e.currentTarget.className += " active";

  // Sempre verifica se a categoria é "menu" para controlar a imagem de fundo
  changeBackgroundImage(category);
}

/**
 * @brief Função responsável por controlar quando mostrar a imagem de fundo de
 * comida
 *
 * @param category String
 */
function changeBackgroundImage(category) {
  let headercontent, filtercontent, body, menu;

  headercontent = document.querySelector('.content header');
  filtercontent = document.querySelector('.categories-filter');
  body = document.querySelector('#page');
  menu = document.querySelector('#menu');

  if (category == 'menu') {
    headercontent.classList.add('bg');
    filtercontent.classList.add('bg');
    menu.classList.add('bg');
    body.classList.add('bg');
  } else {
    body.classList.remove('bg');
    headercontent.classList.remove('bg');
    filtercontent.classList.remove('bg');
    menu.classList.remove('bg');
  }
}

/**
 * @brief Função responsável por controlar qual tab do cardápio abrir
 *
 * @param e          Event
 * @param menuOption String
 */
function openMenuOption(e, menuOption) {
  let tabcontent, tablinks, customSearch;

  // Esconde o container de resultados de filtragem caso ele esteja visível
  customSearch = document.querySelector(".custom-search");
  if (!customSearch.className.split(" ").includes('invisible')) {
    customSearch.classList.add('invisible');
    showAllElements();
  }

  // Pega todos os elementos com a classe 'tabcontent' são invisíveis por padrão
  tabcontent = document.querySelectorAll('.tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
    if (!tabcontent[i].className.split(" ").includes("invisible")) {
      tabcontent[i].classList.add("invisible");
    }
  }

  // Pega todos os elementos com a class="tablinks" e remove a classe "active"
  tablinks = document.querySelectorAll(".tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Mostra a tab atual, e adiciona uma classe "active" ao botão que abriu o tab
  document.getElementById(menuOption).classList.remove("invisible");
  e.currentTarget.className += " active";
}

/**
 * @brief Função responsável por renderizar o cardápio, as informações e os
 * serviços
 *
 * @param data      Object
 * @param category  String
 */

function renderMenu(data) {
  // Renderiza o cardápio comum e o restante dos dados
  for (let j = 0; j < subcategoryTitles.length; j++) {
    subcategoryData[j].innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      if (data[i].subcategory === subcategoryTitles[j].innerText &&
        data[i].category != "24 Horas"
      ) {

        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let div = document.createElement('div');
        let itemName = document.createElement('p');
        let itemDescription = document.createElement('strong');
        let itemPrice = document.createElement('span');

        div.className += " item";

        itemName.innerText = data[i].name;
        itemDescription.innerText = data[i].description;
        itemPrice.innerText = data[i].price;

        div.appendChild(itemName);
        div.appendChild(itemDescription);

        li.appendChild(div);
        li.appendChild(itemPrice);
        ul.appendChild(li);
        subcategoryData[j].appendChild(ul);
      }
    }

    // Renderiza somente o cardápio "24 Horas"
    if (specialSubcategoryData[j] != null) {
      specialSubcategoryData[j].innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        if (data[i].subcategory === specialSubcategoryTitles[j].innerText &&
          data[i].category == "24 Horas"
        ) {
          let ul = document.createElement('ul');
          let li = document.createElement('li');
          let div = document.createElement('div');
          let itemName = document.createElement('p');
          let itemDescription = document.createElement('strong');
          let itemPrice = document.createElement('span');

          div.className += " item";

          itemName.innerText = data[i].name;
          itemDescription.innerText = data[i].description;
          itemPrice.innerText = data[i].price;

          div.appendChild(itemName);
          div.appendChild(itemDescription);

          li.appendChild(div);
          li.appendChild(itemPrice);
          ul.appendChild(li);
          specialSubcategoryData[j].appendChild(ul);
        }
      }
    }
  }
}

/**
 * @brief Função responsável por renderizar a programação do lazer
 *
 * @param data Object
 * @param days Array
 */
function renderActivitiesSchedule(data, days) {
  for (let i = 0; i < activitiesTitles.length; i++) {
    for (let j = 0; j < days.length; j++) {
      if (data[i].category == activitiesTitles[i].innerHTML) {
        let ul = document.createElement('ul');
        let li = document.createElement('li');
        let div = document.createElement('div');
        let activityDay = document.createElement('h4');

        div.className += ' actv';

        activityDay.innerText = data[i].schedule[j].day;
        activitiesData[i].appendChild(activityDay);

        Object.entries(data[i].schedule[j].activities).forEach(e => {
          let activityName = document.createElement('p');
          let activityHour = document.createElement('p');
          let div = document.createElement('div');

          activityName.innerText = e[0];
          activityHour.innerText = e[1];

          div.appendChild(activityName);
          div.appendChild(activityHour);
          li.appendChild(div);
          ul.appendChild(li);
        })

        div.appendChild(ul);

        activitiesData[i].appendChild(div);
      }
    }
  }
}

/**
 * @brief Função responsável por iterar sobre o objeto para encontrar o valor
 * passado no input
 *
 * @param e Event
 */

function filterFunction(e) {
  e.preventDefault();
  itemsList.innerHTML = '';

  for (let i = 0; i < menu.length; i++) {
    if (menu[i].name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
      && categories.includes(menu[i].category)) {
      let li = document.createElement('li');
      let div = document.createElement('div');
      let itemName = document.createElement('p');
      let itemDescription = document.createElement('strong');
      let itemPrice = document.createElement('span');

      div.classList.add("item");

      itemName.innerText = menu[i].name;
      itemDescription.innerText = menu[i].description;
      itemPrice.innerText = menu[i].price;

      div.appendChild(itemName);
      div.appendChild(itemDescription);

      li.appendChild(div);
      li.appendChild(itemPrice);

      itemsList.appendChild(li);
    }

    if (e.target.value == "") {
      itemsList.innerHTML = '';
    }
  }
  foundItems.innerText = itemsList.childElementCount;
}

/**
 * @brief Função responsável por esconder alguns elementos quando o input de busca
 * é clicado
 */

function hideAllElementsOnFilterFocus() {
  let customSearch = document.querySelector(".custom-search");
  let menucontent = document.querySelector('.menu-data');

  customSearch.classList.remove("invisible");
  menucontent.classList.add("invisible");
}

/**
 * @brief Função responsável por mostrar os elementos que foram escondidos ao apertar
 * o input de busca. Ao clicar em qualquer categoria, os elementos retornam
 */

function showAllElements() {
  let customSearch = document.querySelector(".custom-search");
  let menucontent = document.querySelector('.menu-data');

  customSearch.classList.add("invisible");
  menucontent.classList.remove("invisible");
}
