var nomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

do {

  var userNome = prompt("dimmi il tuo nome");

} while (!isNaN(userNome));

nomi.push(userNome);

nomi.sort();

for (var i = 0; i < nomi.length; i++) {

  console.log(nomi[i]);

}

var j = 1;
if ( userNome == nomi[0] ) {

  console.log(1);

} else {

  do {

    ++j;

  } while ( userNome != nomi[j] );

  console.log(j + 1);

}
