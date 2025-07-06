// let server_url = 'https://minuhasahebat.sch.id/time.php';

// const serverTime = await fetch(server_url)
//   .then(response => response.json())
//   .then(data => {
//     if (data && data.time) {
//       return data.time; // Assuming the server returns a JSON object with a 'time' field
//     } else {
//       throw new Error('Invalid response from server');
//     }
//   })
//   .catch(error => {
//     console.error('Error fetching server time:', error);
//     return null; // Return null if there's an error
//   });

// const jam_date = new Date(serverTime * 1000); // Convert seconds to milliseconds

// console.log('Jam date:', jam_date);






const jam = document.getElementsByClassName('jam');
const menit = document.getElementsByClassName('menit');
const detik = document.getElementsByClassName('detik');


// create clock on jamDiv
function updateJam() {
  let now = new Date();
  const newDate = new Date(now.getTime() + 1000);
  const hours = String(newDate.getHours()).padStart(2, '0');
  const minutes = String(newDate.getMinutes()).padStart(2, '0');
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

setInterval(updateJam, 1000);
updateJam();