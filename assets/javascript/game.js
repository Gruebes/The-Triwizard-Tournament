// Welcome to The Triwizard Tournement
window.onload = function() {

function setGame () {
char = {};
wizDef = {};
heroSelected = false;
defenderSelected = false;
gameOver = false;
enemiesDefeated = 0;
deadWizards = 0;

$('#displayYou').hide();
$('#displayChooseOpponent').hide();
$('#displayChooseNextOpponent').hide();
$('#displayYourOpponent').hide();
$('.reset').hide();
$('.attack').hide();

}
setGame();

// char = {};
// wizDef = {};
// heroSelected = false;
// defenderSelected = false;
// gameOver = false;
// enemiesDefeated = 0;
// deadWizards = 0;

// $('#displayYou').hide();
// $('#displayChooseOpponent').hide();
// $('#displayChooseNextOpponent').hide();
// $('#displayYourOpponent').hide();
// $('.reset').show();
// $('.attack').hide();

var characters = {
		harry : {
			blob: 'harry',
			name: 'Harry Potter',
			avatar: '../week-4-game/assets/images/harry.jpg',
			hp: 150,
			attack: 20,
			counterAttack: 19,
			location: '.charContainer',
		},
		fleur : {
			blob: 'fleur',
			name: 'Fleur Delacour',
			avatar: '../week-4-game/assets/images/fleur.jpg',
			hp: 130,
			attack: 25,
			counterAttack: 20,
			location: '.charContainer',
		},
		cedric : {
			blob: 'cedric',
			name: 'Cedric Diggory',
			avatar: '../week-4-game/assets/images/cedric.png',
			hp: 135,
			attack: 22,
			counterAttack: 17,
			location: '.charContainer',
		},
		krum : {
			blob: 'krum',
			name: 'Victor Krum',
			avatar: '../week-4-game/assets/images/victor.jpg',
			hp: 155,
			attack: 18,
			counterAttack: 18,
			location: '.charContainer',
		},
};

function setWizard(hero) {
  char.name = hero.name;
  char.hp = hero.hp;
  char.attack = hero.attack;
  char.counterAttack = hero.counterAttack;
}

function moveEnemies() {
	$('.enemies').detach();
	$('.vanishingCabinet').addClass('enemies');
	$('.defenders').append($('.enemies'));
}

function setEnemy(villain) {
  wizDef.name = villain.name;
  wizDef.blob = villain.blob;
  wizDef.hp = villain.hp;
  wizDef.attack = villain.attack;
  wizDef.counterAttack = villain.counterAttack;
}

function start() {
		$('.charsAvailable').append($('<div>').addClass('vanishingCabinet'));
	
		$.each( characters, function( index, char){
		create(characters[index])
		})

		function create(player) {
		$('.vanishingCabinet').append($('<div>').addClass('frames').attr('id', player.blob));
		$('#' + player.blob).append($('<p>').html(player.name));
		$('#' + player.blob).append($('<img>').attr('src', player.avatar));
		$('#' + player.blob).append($('<p>').addClass('hp').html(player.hp + 'HP'));
	}



// }
// start();
	// function create(player) {
	// 	$('.charsAvailable').append($('<div>').addClass('frames').attr('id', player.blob));
	// 	$('#' + player.blob).append($('<p>').html(player.name));
	// 	$('#' + player.blob).append($('<img>').attr('src', player.avatar));
	// 	$('#' + player.blob).append($('<p>').addClass('hp').html(player.hp + 'HP'));
	// }

	// $.each( characters, function( index, char){
	// create(characters[index])
	// })

// Character Click Handler
	$('.frames').on('click', function (){
		if(heroSelected === false) {
			$(this).detach();
			$(this).addClass('heroChar');
			$('.myChar').append(this);
			$(this).unbind();
			$('#displayYou').show();
			$('#displayChooseWizard').hide();
			$('#displayChooseOpponent').show();

			console.log(this)

			setWizard(characters[this.id]);
			heroSelected = true;
			moveEnemies();

		} else if ((heroSelected === true) && (defenderSelected !== true)) {
			setEnemy(characters[this.id]);
			defenderSelected = true;
			$(this).detach();
			$(this).removeClass('enemies').addClass('defender');
			$('.battleGround').append(this);
			$('#comments').html(' Click Attack to cast the first spell! ')

			console.log(this)


			$('#displayChooseOpponent').hide();
			$('#displayChooseNextOpponent').hide();
			$('.defenders').hide();
			$('#displayYourOpponent').show();
			$('.attack').show();
		}
	})

}
start();

	$('.attack').on('click', function(){
		if ((heroSelected === true) && (defenderSelected === true) && (gameOver !== true)) {
			wizDef.hp = wizDef.hp - char.attack;
			char.attack = char.attack + 8;
		
			$('.defender').children('.hp').html(wizDef.hp + ' HP');
			$('#comments').html('You hit ' + wizDef.name + ' for '+ char.attack + '<br>' + wizDef.blob + ' hit you back for ' + wizDef.attack);

				if(wizDef.hp > 0) {
					char.hp = char.hp - wizDef.attack;
					$('.heroChar').children('.hp').html(char.hp + ' HP');

				// WIZARD DEFEATED
				} else if (wizDef.hp <= 0){
					$('#comments').html('You have defeated ' + wizDef.name + '. ' + '<br>' + 'Who shall you battle next?');
					$('.defender').remove();
					wizDef = {};
					defenderSelected = false;
					deadWizards++

					$('#displayChooseNextOpponent').show();
					$('#displayYourOpponent').hide();
					$('.defenders').show();
					$('.attack').hide();

					// You Win!
					if (deadWizards === 3) {
						$('#displayChooseNextOpponent').hide();
						$('.reset').show();
						$('#comments').html('Congratulations, ' +  char.name + '!!! <BR> You have won the Triwizard Tournement!');
					}
				}

				// YOU LOSE!
				if(char.hp <= 0){
					char.hp = 0;
					$('.heroChar').children('.hp').html(char.hp + ' HP');

					$('.reset').show();
					$('.attack').hide();
					$('#comments').html('Oh no! you have been defeated by ' + wizDef.name + '<br>' + 'Click Reset to play again.')
				}	
		}
	})

	//RESET
	$('.reset').on('click', function(){
		$('.frames').remove();
		$('.enemies').remove();
		$('#comments').empty();
		$('.defenders').show();
		setGame();
	    start();


	})
}


