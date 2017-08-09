module.exports = (function clozeCard (text, cloze){
	if (!text.toLowerCase().includes(close.toLowerCase())){
		return console.log('Input text does not match answer!');
	}
	this.cloze = cloze;
	this.full = text;
	this.partial = text.replace(cloze, '________');
});