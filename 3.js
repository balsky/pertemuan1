/*
ALGORITMA

1. Jika poin antara 80 sampai 100 maka nilai adalah A
2. Jika poin antara 65 sampai 79 maka nilai adalah B
3. Jika poin antara 50 sampai 64 maka nilai adalah C
4. Jika poin antara 35 sampai 49 maka nilai adalah D
5. Jika poin antara 0 sampai 34 maka nilai adalah E
6. Jika poin kurang dari 0 dan lebih dari 100 maka nilai invalid
7. Selesai

*/

var nilai = 10

switch (true) {
    case (nilai <= 100 && nilai >= 80):
      console.log("nilai anda A");
      break;
      case (nilai <= 79 && nilai >= 65):
      console.log("nilai anda B")
      break;
      case (nilai <= 64 && nilai >= 50):
      console.log("nilai anda C")
      break;
      case (nilai <= 49 && nilai >= 35):
      console.log("nilai anda D")
      break;
      case (nilai <= 44 && nilai >= 0):
      console.log("nilai anda E")
      break;
      default:
          console.log("nilai invalid");
}



// var nilai = 4;

// if (nilai <= 100 && nilai >= 80) {
//   console.log("nilai anda A");
// } else if (nilai <= 79 && nilai >= 65) {
//   console.log("nilai anda B");
// } else if (nilai <= 64 && nilai >= 50) {
//     console.log("nilai anda C");
// } else if (nilai <= 49 && nilai >= 35) {
//     console.log("nilai Anda D");
// } else if (nilai <= 34 && nilai >= 0) {
//     console.log("nilai Anda E");
// } else {
//     console.log("nilai invalid")
// }
