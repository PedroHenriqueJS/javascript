// dados locais

const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non enim praesent elementum facilisis. Feugiat nisl pretium fusce id velit ut tortor pretium. Enim ut sem viverra aliquet eget.",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "UX designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam exercitationem saepe voluptate explicabo vel alias provident sed consequuntur, minus facere totam? Odit sapiente, sint minima debitis molestias suscipit et illo!",
  },
  {
    id: 3,
    name: "peter jones",
    job: "Estagiário",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque reiciendis tenetur deserunt deleniti ratione voluptate unde quaerat doloremque nobis quidem. Mollitia autem facere aperiam hic, totam quis doloribus labore quibusdam.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "O chefe",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt minus quibusdam culpa dolores facilis officia expedita commodi saepe iste recusandae? Odio, ad! Libero cumque ex quae? Perferendis doloribus soluta.",
  }
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 1 ;

function showPerson()



window.addEventListener('DOMContentLoaded', function (){
  const item = reviews[currentItem];
  img.src = item.img
  author.textContent = item.name
  job.textContent = item.job
  info.textContent = item.text
});

object.addEventListener("click", prevBtn)