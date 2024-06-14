const frutas = [
  { 
    id: 1,
    name: 'Manzana', 
    imagen: 'manzana.jpg',
    descripcion: 'La manzana es una fruta crujiente y jugosa, rica en fibra y vitamina C. Es ideal para consumir fresca o en una variedad de recetas.'
  },
  { 
    id: 2,
    name: 'Banana', 
    imagen: 'banana.jpg',
    descripcion: 'La banana es una fruta dulce y cremosa, conocida por su alto contenido de potasio y su capacidad para proporcionar energía rápida.'
  },
  { 
    id: 3,
    name: 'Naranja', 
    imagen: 'naranja.jpg',
    descripcion: 'La naranja es una fruta cítrica jugosa y refrescante, famosa por su alto contenido de vitamina C y antioxidantes.'
  },
  { 
    id: 4,
    name: 'Fresa', 
    imagen: 'fresa.jpg',
    descripcion: 'La fresa es una fruta pequeña, dulce y fragante, rica en vitaminas, antioxidantes y fibra, perfecta para postres y ensaladas.'
  },
  {
    id: 5,
    name: 'Mango',
    imagen: 'mango.jpg',
    descripcion: 'El mango es una fruta tropical con un sabor dulce y exótico, rica en vitaminas A y C, ideal para smoothies y ensaladas.'
  },
  {
    id: 6,
    name: 'Uva',
    imagen: 'uva.jpg',
    descripcion: 'La uva es una fruta pequeña y jugosa, disponible en variedades verdes y rojas, excelente para consumir fresca o como pasas.'
  },
  {
    id: 7,
    name: 'Melón',
    imagen: 'melon.jpg',
    descripcion: 'El melón es una fruta grande y dulce, con alto contenido de agua, perfecta para hidratarse y disfrutar en días calurosos.'
  },
  {
    id: 8,
    name: 'Kiwi',
    imagen: 'kiwi.jpg',
    descripcion: 'El kiwi es una fruta pequeña con una piel marrón y pulpa verde vibrante, rica en vitamina C y fibra, ideal para consumir fresca o en ensaladas.'
  },
  {
    id: 9,
    name: 'Piña',
    imagen: 'piña.jpg',
    descripcion: 'La piña es una fruta tropical con un sabor dulce y ácido, conocida por su alto contenido de vitamina C y bromelina, una enzima digestiva.'
  },
  {
    id: 10,
    name: 'Cereza',
    imagen: 'cereza.jpg',
    descripcion: 'La cereza es una fruta pequeña y redonda, dulce y jugosa, rica en antioxidantes y melatonina, ideal para postres y ensaladas.'
  },
  {
    id: 11,
    name: 'Sandía',
    imagen: 'sandia.jpg',
    descripcion: 'La sandía es una fruta grande y refrescante, con alto contenido de agua y licopeno, perfecta para hidratarse en días calurosos.'
  },
  {
    id: 12,
    name: 'Durazno',
    imagen: 'durazno.jpg',
    descripcion: 'El durazno es una fruta jugosa y dulce, con una piel suave y aterciopelada, rica en vitaminas A y C, ideal para consumir fresca o en postres.'
  },
  {
    id: 13,
    name: 'Pera',
    imagen: 'pera.jpg',
    descripcion: 'La pera es una fruta dulce y jugosa, con una textura suave y granulosa, rica en fibra y vitamina C, perfecta para consumir fresca o en ensaladas.'
  },
  {
    id: 14,
    name: 'Papaya',
    imagen: 'papaya.jpg',
    descripcion: 'La papaya es una fruta tropical con una pulpa suave y dulce, rica en vitaminas C y A, así como en enzimas digestivas como la papaína.'
  },
  {
    id: 15,
    name: 'Granada',
    imagen: 'granada.jpg',
    descripcion: 'La granada es una fruta exótica con semillas jugosas y agridulces, conocida por sus antioxidantes y beneficios para la salud cardiovascular.'
  }
];

const listaFrutas = document.getElementById('lista-frutas');
const infoFruta = document.getElementById('info-fruta')

frutas.forEach((fruta) => {
  const html = `<a href="#" data-id="${fruta.id}" class="link-fruta">${fruta.name}</a>`
  listaFrutas.innerHTML += html
})

const links = document.querySelectorAll(".link-fruta")
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const id = link.dataset.id
    const frutaEncontrada = frutas.find(fruta => fruta.id == id)
    showFruta(frutaEncontrada)
  })
})

function showFruta(fruta) {
  const html = `
    <article>
      <h3>${fruta.name}</h3>
      <img src="./images/${fruta.imagen}">
      <p>${fruta.descripcion}</p>
    </article>
  `
  infoFruta.innerHTML = html
}