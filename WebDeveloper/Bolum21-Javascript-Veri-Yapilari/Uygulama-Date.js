var dt= new Date();

console.log(dt);
console.log(dt.getMonth()+1);
console.log(dt.getDate());

// Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.

var dtA =new Date('8/24/2020');

console.log(dtA);

//1/1/1990 tarihinhden bir gün öncesini gösteriniz.
const dtC = new Date('1/1/1990');
var dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth-1);

console.log(dtC);

// iki tarih arasındaki geçen zamanı bulunuz.
const start = new Date('1/1/1990');
const end = new Date('1/1/1991');
