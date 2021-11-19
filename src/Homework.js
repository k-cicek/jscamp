//1-JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
function findPrime(...numbers) {
  let sayı = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        sayı++;
      }
    }
    if (sayı == 0) {
      console.log(numbers[i] + "Sayısı Asaldır.");
    } else {
      console.log(numbers[i] + "Sayısı Asal Değildir.");
    }
    sayı = 0;
  }
}
findPrime(6, 13, 20, 17, 45, 61, 70, 73, 78, 97, 98);

//2-Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız.
function friendNumbers(number1,number2) {
 let total1=1
 let total2=1
 let bigNumber
 let i=2
 if(number1>number2){
     bigNumber=number1
 }
 else
 bigNumber=number2
 while(i<=bigNumber/2){
     if(number1%i==0){
         total1=total1+i
     }
     if(number2%i==0){
         total2=total2+i
     }
     i++
 }
 if(number1==total2 && number2==total1){
     console.log("arkadaş sayılardır")
 }
 else
 console.log("arkadaş değiller")


}
friendNumbers(10,20)
friendNumbers(17296,18416)


//3-1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function perfectNumber(number3) {
 console.log(number3 + " Sayısı bir Mükemmel sayıdır.")
}
 let sayac2 = 0
 for (let i = 1; i < 1000; i++) {
     for (let j = 1; j < i; j++) {
         if ((i % j) == 0) {
             sayac2 = j + sayac2
         }
     }
     if (sayac2 == i) {
         perfectNumber(i)
     }
     sayac2 = 0        
 }


 //4-1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function primeNumber(number) {
 console.log(number)
}
 let sayac = 0
 for (let i = 2; i < 1000; i++) {
    for (let j = 2; j < i ; j++) {
        if ((i % j)== 0) {
             sayac++
        }
     }
     if (sayac==0) {
         primeNumber(i)       
     }
     sayac=0
 }