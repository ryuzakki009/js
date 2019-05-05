const tombol = document.getElementById('tombol');
tombol.addEventListener('click', function() {
	// document.body.style.backgroundColor='#ff6b6b';
	// document.body.setAttribute('class', 'biru-muda');
document.body.style.backgroundColor='#ff6b6b';
});

const tombol2 = document.createElement('button');
// add button
const tombolw = document.createTextNode('Warna Acak');
tombol2.appendChild(tombolw);
tombol2.setAttribute('type', 'button');
tombol.after(tombol2);

tombol2.addEventListener('click', function(){
const r = Math.round(Math.random() * 255 + 1);
const g = Math.round(Math.random() * 255 + 1);
const b = Math.round(Math.random() * 255 + 1);
document.body.style.backgroundColor='rgb('+ r +','+ g +','+ b +')';
});

const merah = document.querySelector('input[name=merah]');
const hijau = document.querySelector('input[name=hijau]');
const biru = document.querySelector('input[name=biru]');


merah.addEventListener('input', function(){
	const r = merah.value;
	const g = hijau.value;
	const b = biru.value;
document.body.style.backgroundColor='rgb('+ r +', '+ g +', '+ b +')';
});

hijau.addEventListener('input', function(){
	const r = merah.value;
	const g = hijau.value;
	const b = biru.value;
document.body.style.backgroundColor='rgb('+ r +', '+ g +', '+ b +')';
});

biru.addEventListener('input', function(){
	const r = merah.value;
	const g = hijau.value;
	const b = biru.value;
document.body.style.backgroundColor='rgb('+ r +', '+ g +', '+ b +')';
});

