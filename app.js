

const jam = document.getElementsByClassName('jam');
const menit = document.getElementsByClassName('menit');
const detik = document.getElementsByClassName('detik');

let siap2 = '<span class="kuning">SIAP SIAP ENTRY !! KALAU RAGU SKIP AJA YA 🤝🤝!!</span>'
let semoga = '<span class="hijau"> OKE SEMOGA MASUK ENTRY PERTAMA 🤑🤑!!</span>';
let jaga = 'TETAP TENANG - JAGA PSIKOLOGI - JANGAN LUPA WEDE 👌';
let gabung = 'GABUNG VIP GRUP GRATIS DM <span class="hijau">ANGGITAA88</span> ATAU CEK DI CHANNEL KANGOPIT 😍😍';
let ngopi = 'NGOPI DULU ☕☕ - JANGAN LUPA MINUM AIR PUTIH 🥛🥛 - JAGA KESEHATAN 😘😘';



// create clock on jamDiv
function updateJam() {

  let now = new Date();
  const newDate = new Date(now.getTime() + 1000);
  const hours = String(newDate.getHours()).padStart(2, '0');
  const minutes = String(newDate.getMinutes()).padStart(2, '0');
  const minutesPlus = String(newDate.getMinutes() + 1).padStart(2, '0');
  const seconds = String(newDate.getSeconds()).padStart(2, '0');
  const secondsInt = parseInt(seconds, 10);
  // get last 1 digit of of minutes
  const lastDigitOfMinutes = parseInt(minutes.charAt(minutes.length - 1), 10);
  jam[0].textContent = hours;
  menit[0].textContent = minutes;
  detik[0].textContent = seconds;
  if (lastDigitOfMinutes == 3 || lastDigitOfMinutes == 8) {
    if (secondsInt > 40) {
      detik[0].classList.add('kuning');
    }
  }
  else {
    detik[0].classList.remove('kuning');
  }


}

const crt = document.getElementsByClassName('crt');
function updateMarquee() {
  let now = new Date();
  const newDate = new Date(now.getTime() + 1000);
  const hours = String(newDate.getHours()).padStart(2, '0');
  const minutes = String(newDate.getMinutes()).padStart(2, '0');
  const seconds = String(newDate.getSeconds()).padStart(2, '0');
  const secondsInt = parseInt(seconds, 10);
  // get last 1 digit of of minutes
  const lastDigitOfMinutes = parseInt(minutes.charAt(minutes.length - 1), 10);
  if (lastDigitOfMinutes == 3 || lastDigitOfMinutes == 8) {
    // siap siap entry
    crt[0].innerHTML = siap2;
  }
  if (lastDigitOfMinutes == 4 || lastDigitOfMinutes == 9) {
    crt[0].innerHTML = semoga;
  }

  if (lastDigitOfMinutes == 0
    || lastDigitOfMinutes == 5
  ) {
    crt[0].innerHTML = jaga;
  }

  if (lastDigitOfMinutes == 2
    || lastDigitOfMinutes == 7
  ) {
    crt[0].innerHTML = gabung;
  }
  if (lastDigitOfMinutes == 1
    || lastDigitOfMinutes == 6
  ) {
    crt[0].innerHTML = ngopi;
  }


}

setInterval(updateMarquee, 1000);
updateMarquee();

setInterval(updateJam, 1000);
updateJam();