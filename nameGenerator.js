// http://www.darkshire.net/jhkim/rpg/lordoftherings/names.pdf
// https://stackoverflow.com/questions/16761150/how-to-find-and-replace-contents-of-a-bracket-inside-notepad

var MaleNames = ["Adalgrim", "Adelard", "Andwise", "Anson", "Balbo", "Bandobras",
"Bergil", "Bilbo", "Bingo", "Blanco", "Bodo", "Bowman", "Bucca",
"Bungo", "Carl", "Cotman", "Cottar", "Dindonas", "Doderic", "Dodinas",
"Drogo", "Dudo", "Erling", "Falco", "Fastolph", "Fastred", "Ferdibrand",
"Ferdinand", "Ferumbras", "Filibert", "Flambard", "Folco",
"Fortinbras", "Fosco", "Fredegar", "Frodo", "Gerontius", "Gorbadoc",
"Gorbulas", "Gorhendad", "Gormadoc", "Griffo", "Gundabald",
"Halfast", "Halfred", "Hamfast", "Hamson", "Harding", "Hending",
"Hildibrand", "Hildifons", "Hildigard", "Hildigrim", "Hob",
"Hobson", "Holfoot", "Holman", "Hugo", "Ilberic", "Isembard",
"Isembold", "Isengar", "Isemgrim", "Isumbras", "Largo", "Longo",
"Lotho", "Madoc", "Marcho", "Marmadas", "Marmadoc", "Marroc",
"Meriadoc", "Merimac", "Merimas", "Milo", "Minto", "Moro",
"Mosco", "Mungo", "Nob", "Odo", "Odovacar", "Olo", "Orgolas",
"Otho", "Paladin", "Peregrin", "Polo", "Ponto", "Porto", "Posco", "Reginard",
"Rendigar", "Robin", "Rorimac", "Rudigar", "Rufus", "Sadoc",
"Samwise", "Sancho", "Saradas", "Saradoc", "Seredic", "Sigismond",
"Tobold", "Togo", "Tolma", "Tolman", "Wilcome", "Wilibald", "Will", "Wiseman"];

var FemaleNames = ["Adaldrida", "Adamanta", "Amaranth", "Angelica", "Asphodel",
"Belba", "Bell", "Belladonna", "Berylla", "Camellia", "Celandine",
"Chica", "Daisy", "Diamond", "Donnamira", "Dora", "Eglantine",
"Elanor", "Esmerelda", "Gilly", "Goldilocks", "Hanna", "Hilda", "Lily",
"Linda", "Lobelia", "Malva", "Marigold", "May", "Melilot", "Menegilda",
"Mentha", "Mimosa", "Mirabella", "Myrtle", "Pansy", "Pearl",
"Peony", "Pervinca", "Pimpernel", "Poppy", "Primrose", "Primula",
"Prisca", "Rosamunda", "Rosa", "Rose", "Ruby", "Salvia", "Tanta"];

function randomName(gender) {
	if (gender == "m") {
		return(MaleNames[Math.floor(Math.random()*FemaleNames.length)]);
	}
	else{
		return(FemaleNames[Math.floor(Math.random()*FemaleNames.length)]);
	}
}