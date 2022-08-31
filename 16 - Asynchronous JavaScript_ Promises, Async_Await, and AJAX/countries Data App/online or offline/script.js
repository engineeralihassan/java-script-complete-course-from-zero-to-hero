alert('file');

let status1 = window.navigator.onLine;
if (status1) online();
else offline();
window.addEventListener('online', online);
window.addEventListener('offline', offline);

function online() {
  document.getElementById('container').style.backgroundColor = 'green';
  document.querySelector('span').textContent = 'Online';
}
function offline() {
  document.getElementById('container').style.backgroundColor = 'red';
  document.querySelector('span').textContent = 'offline';
}
