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
const end = new Date('2/10/1991');

var milisecond = end - start;
var saniye = milisecond/1000;
var dakika = saniye / 60;
var saat= dakika / 60;
var gun = saat/24;

console.log('milisecond :' + milisecond);
console.log('saniye : ' + saniye);
console.log('dakika : ' + dakika);
console.log('saat : ' + saat);
console.log('gun : ' + gun);

// Her yıl mayıs ayının 2.haftası olan pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır ?
 var annelerGUNU = new Date();
 annelerGUNU.setHours(0,0,0,0);
 annelerGUNU.setFullYear(2019);
 annelerGUNU.setDate(1);
 annelerGUNU.setMonth(4);

 while(annelerGUNU.getDay() != 0){
     annelerGUNU.setDate(annelerGUNU.getDate()+ 1)
 }
annelerGUNU.setDate(annelerGUNU.getDate()+7);
 console.log(annelerGUNU);


// ** Yaş hesaplama nasıl yapılır ?

var birthday = new Date ('8/1/1985');
var ageDifMs= Date.now() - birthday.getTime();
var ageDate= new Date(ageDifMs);

console.log(ageDate.getFullYear()-1970);

//console.log(birthday.getTime());
//console.log(Date.now());