const speaker = [
  {
    name: 'Jack Ma',
    jobPosition: 'CEO Alibaba ',
    info: 'Works in technology innovation to bring useful tech to the world',
    photo: 'img/jackma.jpg',
  },
  {
    name: 'Bill Gates',
    jobPosition: 'Founder Microsoft',
    info: 'Controls the affair of the Microsoft Inc.',
    photo: 'img/bill.jpg',
  },
  {
    name: 'Ariel Camus',
    jobPosition: 'Founder Microverse',
    info: 'handles affairs of Microverse',
    photo: 'img/ariel.png',
  },
  {
    name: 'Elon Musk',
    jobPosition: 'Founder Tesla',
    info: 'Works for ministry of Home affairs',
    photo: 'img/elon.jpg',
  },
  {
    name: 'Larry Page',
    jobPosition: 'Founder Google',
    info: 'Sits on and chairs the board of Directors',
    photo: 'img/larry.jpg',
  },
  {
    name: 'Mark Zukerberg',
    jobPosition: 'Founder Facebook',
    info: 'Sits on and chairs the board of Directors',
    photo: 'img/Mark.jpg',
  },
];

function guestSection(count) {
  return speaker.slice(0, count).map((guest) => `
                            <li class="speaker">
                            <img src="${guest.photo}" alt="${guest.name}">
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
  }
});
