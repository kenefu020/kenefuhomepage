fetch('../../header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  });

let a = (1)
console.log('正常に動作しました。');

console.log('今すぐこの画面を閉じてください')