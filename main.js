const speaker = [
  {
    name: 'Yochai Benkler',
    jobPosition: 'CEO Director Of works ',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugiat quo provident enim harum sapiente explicabo unde earum numquam architecto, libero ad maiores deleniti inventore similique sint velit eius obcaecati.',
    photo: 'img/a.png',
  },
  {
    name: 'Lila Tretikov',
    jobPosition: 'Founder ',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugiat quo provident enim harum sapiente explicabo unde earum numquam architecto, libero ad maiores deleniti inventore similique sint velit eius obcaecati.',
    photo: 'img/b.png',
  },
  {
    name: 'Julia Leda',
    jobPosition: 'Co-Founder Netzen',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugiat quo provident enim harum sapiente explicabo unde earum numquam architecto, libero ad maiores deleniti inventore similique sint velit eius obcaecati.',
    photo: 'img/c.png',
  },
  {
    name: 'SohYeong Noh',
    jobPosition: 'Founder Director',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugiat quo provident enim harum sapiente explicabo unde earum numquam architecto, libero ad maiores deleniti inventore similique sint velit eius obcaecati.',
    photo: 'img/d.png',
  },
  {
    name: 'Kilnam Chan',
    jobPosition: 'Founder Chocolate',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugiat quo provident enim harum sapiente explicabo unde earum numquam architecto, libero ad maiores deleniti inventore similique sint velit eius obcaecati.',
    photo: 'img/e.png',
  },
  {
    name: 'Ryan Merkley',
    jobPosition: 'Founder Kyuiy',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem fugiat quo provident enim harum sapiente explicabo unde earum numquam architecto, libero ad maiores deleniti inventore similique sint velit eius obcaecati.',
    photo: 'img/f.png',
  },
];

function guestSection(count) {
  return speaker.slice(0, count).map((guest) => `
  <li class="speaker">
                            <div class="tiles"><img src="${guest.photo}" class="tile" alt="${guest.name}"></div>
                            <div class="name">
                              <h3>${guest.name}</h3>
                              <div class="job-position">
                              ${guest.jobPosition}
                              </div>
                              <div class="linepoint"></div>
                              <p class="parag">${guest.info}</p>
                            </div>
                          </li>`).join('');
}
const speakerList = document.getElementById('speaker-list');

const guestList = guestSection();
speakerList.innerHTML = guestList;

const moreButton = document.getElementById('more-btn');
moreButton.addEventListener('click', (event) => {
  speakerList.innerHTML = guestSection(speaker.length);
  event.target.style.display = 'none';
});

window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    speakerList.innerHTML = guestSection(2);
    document.getElementById('partner').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
  } else {
    speakerList.innerHTML = guestSection(6);
    document.getElementById('partner').style.display = 'block';
    document.getElementById('footer').style.display = 'flex';
    document.getElementById('footer').style.backgroundColor = 'white';
    document.getElementById('copy').style.color = '#272a31';
    document.getElementById('copy1').style.color = '#272a31';

    /* eslint-disable */
 mobileMenu.style.display = 'flex';
 /* eslint-enable */
  }
});

window.addEventListener('load', () => {
  if (window.innerWidth < 768) {
    speakerList.innerHTML = guestSection(2);
    document.getElementById('partner').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
  } else {
    speakerList.innerHTML = guestSection(6);
    document.getElementById('partner').style.display = 'block';
    document.getElementById('footer').style.display = 'flex';
    document.getElementById('footer').style.backgroundColor = 'white';
    document.getElementById('copy').style.color = '#272a31';
    document.getElementById('copy1').style.color = '#272a31';
  }
});
