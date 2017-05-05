// The Triwizard Tournement

// If User character HP reaches 0, game over. If opponents HP reaches 0, opponent loses
// User then Selects next character and repeats "attack" function
// If all charcters are defeated "GAME OVER. YOU WIN!"
window.onload = function() {

char = {};
wizDef = {};
heroSelected = false;
defenderSelected = false;
enemiesDefeated = 0;
gameOver = false;
deadWizards = 0;

$('#displayYou').hide();
$('#displayChooseOpponent').hide();
$('#displayChooseNextOpponent').hide();
$('#displayYourOpponent').hide();
$('.reset').hide();
$('.attack').hide();

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
			counterAttack: 20,
			location: '.charContainer',
		},
		cedric : {
			blob: 'cedric',
			name: 'Cedric Diggory',
			avatar: '../week-4-game/assets/images/cedric.png',
			hp: 120,
			attack: 22,
			counterAttack: 13,
			location: '.charContainer',
		},
		krum : {
			blob: 'krum',
			name: 'Victor Krum',
			avatar: '../week-4-game/assets/images/victor.jpg',
			hp: 180,
			attack: 18,
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

function moveEnemies() {
	$('.enemies').detach();
	$('.charsAvailable').addClass('enemies');
	// $('.charsAvailable').removeClass('charactersAvailable').addClass('enemies');
	$('.defenders').append($('.enemies'));
}

function setEmeny(villain) {
  wizDef.name = villain.name;
  wizDef.hp = villain.hp;
  wizDef.attack = villain.attack;
  wizDef.counterAttack = villain.counterAttack;

  // console.log(wizDef);
}

function create(player) {
	$('.charsAvailable').append($('<div>').addClass('frames').attr('id', player.blob));
	$('#' + player.blob).append($('<p>').html(player.name));
	$('#' + player.blob).append($('<img>').attr('src', player.avatar));
	$('#' + player.blob).append($('<p>').addClass('hp').html(player.hp + 'HP'));
}

$.each( characters, function( index, char){
create(characters[index])
})

// Character Click Handler
	$('.frames').on('click', function (){
		console.log('this.id = ' + this.id);

		if(heroSelected === false) {
			$(this).detach();
			$(this).addClass('heroChar');
			$('.myChar').append(this);
			$(this).unbind();

			$('#displayYou').show();
			$('#displayChooseWizard').hide();
			$('#displayChooseOpponent').show();

			setWizard(characters[this.id]);
			heroSelected = true;
			moveEnemies();

		} else if ((heroSelected === true) && (defenderSelected !== true)) {
			$(this).detach();
			$(this).removeClass('enemies').attr('id', 'defender');
			$('.battleGround').append(this);

			$('#displayChooseOpponent').hide();
			$('#displayChooseNextOpponent').hide();

			$('.defenders').hide();
			$('#displayYourOpponent').show();
			$('.attack').show();

			setEmeny(characters.harry);
			defenderSelected = true;
		}
	})

	$('.attack').on('click', function(){
		if ((heroSelected === true) && (defenderSelected === true) && (gameOver !== true)) {
			wizDef.hp = wizDef.hp - char.attack;
			char.attack = char.attack + 8;
		
		$('#defender').children('.hp').html(wizDef.hp + ' HP');
		
			if(wizDef.hp > 0) {
				char.hp = char.hp - wizDef.attack;
				$('.heroChar').children('.hp').html(char.hp + ' HP');

			} else if (wizDef.hp < 0){

				$('#defender').remove();
				wizDef = {};
				defenderSelected = false;
				deadWizards++

				$('#displayChooseNextOpponent').show();
				$('#displayYourOpponent').hide();
				$('.defenders').show();
				$('.attack').hide();

				if (deadWizards === 3) {
					$('#displayChooseNextOpponent').hide();
				}

				console.log('defenderSelected = ' + defenderSelected)
			}	
		}
	})

	$('.reset').on('click', function(){

		deadWizards = 0;
		// $('.frames').remove();
		$('.frames').detach();
		$('.charsAvailable').append('.frames');

		$.each( characters, function( index, char){
			create(characters[index]);
		})


	})


}

