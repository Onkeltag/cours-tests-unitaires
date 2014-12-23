function Jeu(){
	this.joueurs = ['Le joueur A','Le joueur B'];

	this.marque = [0,0];
}

Jeu.prototype.score = function () {
		try {
			if ((this.marque[0] === 0 || this.marque[0] === 15 || this.marque[0] === 30 || this.marque[0] === 40 || this.marque[0] === 50) &&
				(this.marque[1] === 0 || this.marque[1] === 15 || this.marque[1] === 30 || this.marque[1] === 40 || this.marque[1] === 50)) {
				if (this.marque[0] === this.marque[1] && this.marque[0] !== 0) {
					return this.marque[0] + 'A';
				} else if (this.marque[0] === this.marque[1] && this.marque[0] === 50) {
					return 'Egalité';
				} else if (this.marque[0] === 60 && this.marque[0] > this.marque[1]) {
					return 'Avantage ' + this.joueurs[0];
				} else if (this.marque[1] === 60 && this.marque[0] < this.marque[1]) {
					return 'Avantage ' + this.joueurs[1];
				} else {
				return this.marque[0] + '-' + this.marque[1];
				}
			}
			else {
				throw 'méthode score()';
			}
		}
		catch (err) {
			return 'Erreur : ' + err;
		}
	}

Jeu.prototype.addPoint = function(id) {
	try {
		//Le joueur joueurs[id] marque un point :
		if (this.marque[id] === 0 || this.marque[id] === 15) {
			//Situtation classique
			this.marque[id] += 15;
		}
		else if(this.marque[id] === 30 || ((this.marque[id] === 40 || this.marque[id] === 50) && this.marque[id] === this.marque[1-id])) {
			//Situation à 30 - xx OU 40A OU égalité
			this.marque[id] += 10;
		}
		else if(this.marque[id] === 40 && this.marque[id] > this.marque[1-id]) {
			//Situation de victoire à 40 - xx (donc sauf 40A)
			//console.log('jeu ' + this.joueurs[id]);
			this.marque=[0,0];

			$('#score').html(jeu.score());

			return 'jeu ' + this.joueurs[id];
		}
		else if(this.marque[id] === 50) {
			//Situations d'avantage
			if (this.score[id] > this.score[1-id]) {
				//Avantage concrétisé
				this.marque=[0,0];
				$('#score').html(jeu.score());

				return 'jeu ' + this.joueurs[id];
			}
			else if (this.score[id] < this.score[1-id]) {
				this.marque[1-id] -= 10;
			}
			//console.log ('jeu ' + this.joueurs[id]);
else if(this.marque[id] === 60)
		}
		else {
			throw 'méthode addPoint()';
		}
	}
	catch (err) {
		return 'Erreur : ' + err;
	}
	$('#score').html(jeu.score());
}	

var jeu = new Jeu();
$('#itsInA').click(jeu.addPoint.bind(jeu, 0));
$('#itsInB').click(jeu.addPoint.bind(jeu, 1));
