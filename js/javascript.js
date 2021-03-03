var nomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

do {

  var userNome = prompt("dimmi il tuo nome");

} while (!isNaN(userNome));

nomi.push(userNome);

nomi.sort();

for (var i = 0; i < nomi.length; i++) {

  console.log(nomi[i]);

}

//var j = -1;
// do {
//
//   ++j;
//
// } while ( userNome != nomi[j] );
// var founded = false;
// var j = 0;
// while (!founded) {
//   if (nomi[j] == userNome){
//
//     founded = true;
//     console.log(j + 1);
//
//   } else if (j = nomi.length - 1) {
//
//     founded = true;
//
//   }
//
//   j++;
//
// }

console.log( nomi.indexOf(userNome) + 1);
