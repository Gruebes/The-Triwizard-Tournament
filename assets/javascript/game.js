// The Triwizard Tournement


// Make Characters
	// create function that runs to build characters
	// function that loops to create the characters placing them in charContainer, then add event listener
// When user selects character
	// delete remaining characters and move them to next area
		// reassinging location and running create, then attaching new event listener
// User then selects opponent to fight, which gets moved to battle ground
	// Delete char chosen and move to battleground
		// reassinging location and running create, (then attaching new event listener on attak button)

// User then "attacks" opponent: User HP increases with every move
//while opponents attack remains the same
// If User character HP reaches 0, game over. If opponents HP reaches 0, opponent loses
// User then Selects next character and repeats "attack" function
// If all charcters are defeated "GAME OVER. YOU WIN!"


window.onload = function() {

var characters = {
		harry : {
			blob: 'harry',
			name: 'Harry Potter',
			avatar: '../week-4-game/assets/images/harry.jpg',
			hp: 150,
			attack: '',
			counterAttack: '',
			location: '.charContainer',
		},
		fleur : {
			blob: 'fleur',
			name: 'Fleur Delacour',
			avatar: '../week-4-game/assets/images/fleur.jpg',
			hp: 90,
			attack: '',
			counterAttack: '',
			location: '.charContainer',
		},
		cedric : {
			blob: 'cedric',
			name: 'Cedric Diggory',
			avatar: '../week-4-game/assets/images/cedric.png',
			hp: 110,
			attack: '',
			counterAttack: '',
			location: '.charContainer',
		},
		krum : {
			blob: 'krum',
			name: 'Victor Krum',
			avatar: '../week-4-game/assets/images/victor.jpg',
			hp: 200,
			attack: '',
			counterAttack: '',
			location: '.charContainer',
		},

};

var list = [ characters.harry, characters.fleur, characters.cedric, characters.krum]


$.each( list, function( index, char){
	create(list[index])

})

function create(player) {
	$(player.location).append($('<div>').addClass('start style player' + player.blob));
	$('.player' + player.blob).append($('<p>').html(player.name));
	$('.player' + player.blob).append($('<img>').attr('src', player.avatar));
	$('.player' + player.blob).append($('<p>').html(player.hp + 'HP'));


}

$('.start').on('click', function (){
	alert("clicked!");

	list.splice(0, 1);

	console.log(list);
})




console.log(characters);

}

