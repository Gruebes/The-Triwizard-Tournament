// The Triwizard Tournement

// User then "attacks" opponent: User HP increases with every move
//while opponents attack remains the same
// If User character HP reaches 0, game over. If opponents HP reaches 0, opponent loses
// User then Selects next character and repeats "attack" function
// If all charcters are defeated "GAME OVER. YOU WIN!"




char = {};
wizDef = {};
heroSelected = false;
defenderSelected = false;
enemiesDefeated = 0;
gameOver = false;

var characters = {
		harry : {
			blob: 'harry',
			name: 'Harry Potter',
			avatar: '../week-4-game/assets/images/harry.jpg',
			hp: 150,
			attack: 20,
			counterAttack: 18,
			location: '.charContainer',
		},
		fleur : {
			blob: 'fleur',
			name: 'Fleur Delacour',
			avatar: '../week-4-game/assets/images/fleur.jpg',
			hp: 110,
			attack: 25,
			counterAttack: 25,
			location: '.charContainer',
		},
		cedric : {
			blob: 'cedric',
			name: 'Cedric Diggory',
			avatar: '../week-4-game/assets/images/cedric.png',
			hp: 120,
			attack: 20,
			counterAttack: 30,
			location: '.charContainer',
		},
		krum : {
			blob: 'krum',
			name: 'Victor Krum',
			avatar: '../week-4-game/assets/images/victor.jpg',
			hp: 180,
			attack: 20,
			counterAttack: 15,
			location: '.charContainer',
		},
};


function setWizard(hero) {
  char.name = hero.name;
  char.hp = hero.hp;
  char.attack = hero.attack;
  char.counterAttack = hero.counterAttack;

  // console.log(char);
}

function setEmeny(villain) {
  wizDef.name = villain.name;
  wizDef.hp = villain.hp;
  wizDef.attack = villain.attack;
  wizDef.counterAttack = villain.counterAttack;

  // console.log(wizDef);
}

function moveEnemies() {
	$('.enemies').detach();
	$('.charsAvailable').removeClass('charactersAvailable').addClass('enemies');
	$('.defenders').append($('.enemies'));
}

window.onload = function() {

$.each( characters, function( index, char){
create(characters[index])
})

function create(player) {
	// $('.charsAvailable').append($('<div>').addClass('frames available ' + player.blob));
	$('.charsAvailable').append($('<div>').addClass('frames').attr('id', player.blob));
	$('#' + player.blob).append($('<p>').html(player.name));
	$('#' + player.blob).append($('<img>').attr('src', player.avatar));
	$('#' + player.blob).append($('<p>').addClass('hp').html(player.hp + 'HP'));
}

// Harry Click Handler
	// $('#' + characters.harry.blob).on('click', function (){
	$('.frames').on('click', function (){
		console.log(this.id);
		var item = 'characters.' + this.id;
		console.log(window[item]);

		if(heroSelected === false) {
			$(this).detach();
			$(this).addClass('heroChar');
			$('.myChar').append(this);

			setWizard(window[item]);
			heroSelected = true;
			moveEnemies();
			$(this).unbind();

		} else if ((heroSelected === true) && (defenderSelected !== true)) {
			$(this).detach();
			$(this).removeClass('enemies').addClass('defender');
			$('.battleGround').append(this);

			setEmeny(characters.harry);
			defenderSelected = true;
			// $(this).unbind();

			// console.log(defenderSelected);

		}
	})

	// // Fleur Click Handler
	// $('#' + characters.fleur.blob).on('click', function (){
	// 	// console.log(this);

	// 	if(heroSelected === false) {
	// 		$(this).detach();
	// 		$(this).addClass('heroChar');
	// 		$('.myChar').append(this);

	// 		setWizard(characters.fleur);
	// 		heroSelected = true;
	// 		moveEnemies();
	// 		$(this).unbind();

	// 	} else if ((heroSelected === true) && (defenderSelected !== true)) {
	// 		$(this).detach();
	// 		$(this).removeClass('enemies').addClass('defender');
	// 		$('.battleGround').append(this);


	// 		setEmeny(characters.fleur);
	// 		defenderSelected = true;
	// 		// $(this).unbind();
	// 	}
	// })

	// // Cedric Click Handler
	// $('#' + characters.cedric.blob).on('click', function (){
	// 	// console.log(this);

	// 	if(heroSelected === false) {
	// 		$(this).detach();
	// 		$(this).addClass('heroChar');
	// 		$('.myChar').append(this);

	// 		setWizard(characters.cedric);
	// 		heroSelected = true;
	// 		moveEnemies();
	// 		$(this).unbind();

	// 	} else if ((heroSelected === true) && (defenderSelected !== true)) {
	// 		$(this).detach();
	// 		$(this).removeClass('enemies').addClass('defender');
	// 		$('.battleGround').append(this);

	// 		setEmeny(characters.cedric);
	// 		defenderSelected = true;
	// 		// $(this).unbind();
	// 	}
	// })

	// // Krum Click Handler
	// $('#' + characters.krum.blob).on('click', function (){
	// 	// console.log(this);

	// 	if(heroSelected === false) {
	// 		$(this).detach();
	// 		$(this).addClass('heroChar');
	// 		$('.myChar').append(this);

	// 		setWizard(characters.krum)
	// 		heroSelected = true;
	// 		moveEnemies();
	// 		$(this).unbind();

	// 	} else if ((heroSelected === true) && (defenderSelected !== true)) {
	// 		$(this).detach();
	// 		$(this).removeClass('enemies').addClass('defender');
	// 		$('.battleGround').append(this);

	// 		setEmeny(characters.krum);
	// 		defenderSelected = true;
	// 		// $(this).unbind();
	// 	}
	// })

	$('.attack').on('click', function(){
		if ((heroSelected === true) && (defenderSelected === true) && (gameOver !== true)) {

		wizDef.hp = wizDef.hp - char.attack;
		char.attack = char.attack + 8;
		
		$('.defender').children('.hp').html(wizDef.hp + ' HP');
		
			if(wizDef.hp > 0) {
				char.hp = char.hp - wizDef.attack;
				$('.heroChar').children('.hp').html(char.hp + ' HP');
			}
		}
	})


}

