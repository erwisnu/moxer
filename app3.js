

const jam = document.getElementsByClassName('jam');
const menit = document.getElementsByClassName('menit');
const detik = document.getElementsByClassName('detik');

let currentJam = '';

const quotes = [
  "Jangan pernah mencari keuntungan instan dalam trading. Fokuslah pada prosesnya, dan hasilnya akan mengikuti.",
  "Trading itu seperti seni, butuh latihan dan kesabaran untuk menguasainya.",
  "Setiap kerugian dalam trading adalah pelajaran berharga. Jangan biarkan emosi menguasai keputusanmu.",
  "Kesabaran adalah kunci sukses dalam trading. Jangan terburu-buru mengambil keputusan.",
  "Jangan pernah berhenti belajar. Dunia trading selalu berubah, dan kamu harus siap menghadapinya.",
  "Disiplin adalah fondasi dari setiap trader sukses. Tetaplah pada rencanamu, meskipun pasar bergerak tidak sesuai harapan.",
  "Jangan biarkan keserakahan mengendalikanmu. Tetapkan target yang realistis dan patuhi rencanamu.",
  "Trading bukan tentang cepat kaya, tetapi tentang mengelola risiko dengan bijak.",
  "Setiap trader pasti mengalami kerugian. Yang membedakan trader sukses adalah bagaimana mereka mengelola kerugian tersebut.",
  "Jangan pernah meremehkan kekuatan analisis teknikal. Grafik dan indikator adalah alat penting dalam trading.",
  "Trading itu seperti maraton, bukan sprint. Fokuslah pada konsistensi dan keberlanjutan, bukan pada hasil instan.",
  "Jangan pernah menginvestasikan uang yang tidak bisa kamu rugikan. Trading harus dilakukan dengan uang yang sudah kamu siapkan untuk risiko.",
  "Emosi adalah musuh terbesar dalam trading. Pelajari cara mengendalikan emosimu agar tidak mempengaruhi keputusan trading.",
  "Setiap trader memiliki gaya dan strategi yang berbeda. Temukan apa yang paling cocok untukmu dan kembangkan dirimu di sana.",
  "Jangan pernah berhenti beradaptasi. Pasar selalu berubah, dan kamu harus siap untuk beradaptasi dengan perubahan tersebut.",
];

const signalClass = document.getElementsByClassName('signal');
const signalText = signalClass[0].textContent;
const signalTextArray = signalText.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);

let siap2 = '<span class="kuning">SIAP SIAP ENTRY !! KALAU RAGU SKIP AJA YA 🤝🤝!!</span>'
let semoga = '<span class="hijau"> OKE SEMOGA MASUK ENTRY PERTAMA 🤑🤑!!</span>';
let jaga = '';
let gabung = 'GABUNG VIP GRUP GRATIS DM <span class="hijau">ANGGITAA88</span> ATAU CEK DI CHANNEL KANGOPIT 😍😍';
let ngopi = 'TERIMA KASIH SUDAH BERGABUNG DI OM ALEX, JANGAN LUPA TAP2, POSTING ULANG DAN SHARE YA 😍😍';

function parseSignalText(signalTextArray, jamBerapa) {
  console.log('Parsing signal for jam:', jamBerapa);
  const jamSignal = signalTextArray.find(line => line.includes(jamBerapa));
  if (jamSignal) {
    const parts = jamSignal.split(' ');
    if (parts.length >= 2) {
      const signal = parts[1];
      siap2 = `${signal == 'B' ? '<span class="hijau">SIAP SIAP ENTRY BUY!!</span>' : '<span class="pink">SIAP SIAP ENTRY  SELL!!</span>'} <span class="kuning">KALAU RAGU SKIP AJA YA 🤝🤝!!</span>`
      semoga = `<span class="hijau"> OKE SEMOGA AMAN UNTUK ENTRY ${signal == 'B' ? 'BUY' : 'SELL'} DI OPEN PERTAMA TANPA KOMPEN 🤑🤑!!</span>`
      return
    }
  }

  siap2 = '<span class="kuning">SIAP SIAP ENTRY !! KALAU RAGU SKIP AJA YA 🤝🤝!!</span>'

  return;

}



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

  const jamText = `${hours}.${minutesPlus}`;
  if (currentJam !== jamText) {
    console.log('Current Jam:', jamText);
    currentJam = jamText;

    parseSignalText(signalTextArray, jamText);
    updateQuote();

  }

}

function updateQuote() {
  jaga = quotes[Math.floor(Math.random() * quotes.length)];

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


