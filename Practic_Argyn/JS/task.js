var flags = 21, player = true;
while (flags > 0) {

	if (player) {
	  	let step = prompt("Сколько вы возьмёте флажков, ходит игрок 1?")
		if ((flags - step) <= 0) {
			console.log("Победил игрок 1")
			}

		flags -= step*1
		console.log("Флажков осталось ", flags)
		player = false
		
	}
	else {
		let step = prompt("Сколько вы возьмёте флажков, ходит игрок 2?")
		if ((flags - step)	 <= 0) {
			console.log("Победил игрок 2")
		}
		flags -= step*1
		console.log("Флажков осталось ", flags)
		player = true
	}
}