// if (true) {
//      do something();
// } else {
//      do something();
// }

const id = 100;

// Equal to
if (id==100){
    console.log('BENAR');
}else {
    console.log('SALAH');
}


//NOT EQUAL
if (id=100){
    console.log('BENAR');
}else {
    console.log('SALAH');
}


// nested if 

 a = 5;
 b = 10;

console.log("ini adalah awal dari program");

if (a == 5) {

   if (b == 10){
      
        console.log("ini adalah dimana a = 5 dan b = 10");
  
} else {

        console.log("ini adalah dimana a = 5 dan b bukan 10");

   }

} else {

    console.log("ini adalah dimana a salah");

}

consol.log("ini adalah akhir dari program");


// switch case

var angka="1";
        var teks;
        switch (angka) {
            case "1":
                teks="satu";
            break;
            case "2":
                teks="Dua";
            break;
            case "3":
                teks="TIga";
            break;
            default:
                teks="Bilangan Tidak Ditemukan"
            break;
        }

//while do

let i = 0;

while (i < 5) {
    console.log("The number is" + i);
    i++;
}

//function

function greet(Burhan) {
    console.log("Hellp, " + Burhan + "!")
}

// 