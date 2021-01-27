/*
PSEUDOCODE

BEGIN

READ "name" with value "Cokro"
READ "age" with value 16
READ "money" with value 1000000
READ "juice" with value 50000
READ "grape" with value 300000

IF "name" equal to ""
THEN DISPLAY "Anda tidak boleh masuk!"
ELSE IF "age" lower than 17 AND "money" lower than "juice"
THEN DISPLAY "Uang tidak cukup. Anda harus pulang"

ELSE IF "age" lower than 17 AND "money" higher equal to "juice"
THEN DISPLAY "Anda bisa pesan minum. Sisa uang anda "

ELSE IF "age" higher equal to 17 AND "money" lower than "grape"
THEN DISPLAY "Uang tidak cukup. Anda harus pulang"
ELSE IF "age" higher equal to 17 AND "money" higher equal to "grape"
THEN DISPLAY "And bisa pesan minum. Sisa uang anda "
ELSE DISPLAY "Anda boleh masuk"

END


*/

var nama = "Cokro";
var age = 16;
var money = 100000;
var juice = 50000;
var grape = 300000;

if (nama == "") {
  console.log("Anda Tidak Boleh Masuk");
} else if (age < 17 && money < juice) {
  console.log("Uang tidak cukup. Anda harus pulang.");
} else if (age < 17 && money > juice) {
  console.log("Anda bisa pesan minum. Sisa uang anda");
}
