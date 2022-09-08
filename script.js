//ulang
let ulang = true;
	let skorP = 0;
	let skorC = 0;
while (ulang) {
	//player
	const player = prompt('Cobalah kau pilih\norang, semut, atau gajah?');
	if(player == null) {
		alert('coba main dulu sekali');
	} else {
	//computer
	const compRandom = Math.floor((Math.random() * 9) + 1);
	let comp = '';

	//others variable
	let wrongInput = 'pilih salah satu lah, jangan ngasal';
	let hasil = '';

	//Scoring

	//random
	if(compRandom <= 3) {
		comp = 'orang';
	} else if(compRandom <= 6) {
		comp = 'semut';
	} else {
		comp = 'gajah';
	}
	console.log('random number = ' + compRandom);
	//rules
	if(comp == player) {
		hasil = 'KALIAN SERI!!!';
	} else if(player == 'orang') {
		hasil = ( comp == 'gajah' ? 'KAU KALAH!!!' +skorC++: 'KAU MENANG!!!' + skorP++);
	} else if(player == 'semut') {
		hasil = (comp == 'orang' ? 'KAU KALAH!!!' +skorC++: 'KAU MENANG!!!' + skorP++);
	} else if(player == 'gajah') {
		hasil = (comp == 'semut' ? 'KAU KALAH!!!' +skorC++: 'KAU MENANG!!!' + skorP++);
	} else {
		hasil = wrongInput;
	}
	//result

	alert('Kau milih                = ' + player + '\nKomputer milih    = ' + comp + '\n' + hasil + '\n\nSkor' + '\nKau  ' + skorP + '  ---  ' + skorC + ' Komputer');

	ulang = confirm('Lagi kah?'); }
}

alert('Arigato'); 