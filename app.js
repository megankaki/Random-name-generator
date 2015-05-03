var wdi_16_names = ["Alexander Mireles", "Andre Trelles", "Andrew Ham", "Ari Kanamori", "Busyra Anwar", "Carlos Meza", "Chris Garvin", "Cristal Chavez", "Daley Meistrell", "Daniel Manuel", "Jefferson Choi", "Jessica Grinberg", "John Ward", "Kate Wood", "Kevin Mehrabi", "Max Tran", "Max Plisskin", "Megan Kakitsubo", "Meryl Harden", "Mike McCready", "Nick Dalke","Niels Bischoff", "Paul Aglione", "Rahul Sidhu", "Samuel Chun", "Samuel Amiri", "Sophie Chor","Steve Soter", "Taylor Adams", "Yo Wakita"]
// var picture = [ " ",

// ]

function namePicker() {
	return Math.floor(Math.random() * wdi_16_names.length);
} 

function nameOutput() {
	document.getElementById("name").innerHTML = wdi_16_names.splice(namePicker(),1);
	console.log(wdi_16_names.length);
	if (wdi_16_names.length === 0) {
		wdi_16_names = ["Alexander Mireles", "Andre Trelles", "Andrew Ham", "Ari Kanamori", "Busyra Anwar", "Carlos Meza", "Chris Garvin", "Cristal Chavez", "Daley Meistrell", "Daniel Manuel", "Jefferson Choi", "Jessica Grinberg", "John Ward", "Kate Wood", "Kevin Mehrabi", "Max Tran", "Max Plisskin", "Megan Kakitsubo", "Meryl Harden", "Mike McCready", "Nick Dalke","Niels Bischoff", "Paul Aglione", "Rahul Sidhu", "Samuel Chun", "Samuel Amiri", "Sophie Chor","Steve Soter", "Taylor Adams", "Yo Wakita"];
	}
}


