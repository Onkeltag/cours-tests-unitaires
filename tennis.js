function Jeu(){
	this.joueurs = ['Le joueur A','Le joueur B'];

	this.marque = [0,0];	
}

Jeu.prototype.score = function () {
		try {
			if ((this.marque[0] === 0 || this.marque[0] === 15 || this.marque[0] === 30 || this.marque[0] === 40 || this.marque[0] === 50) &&
				(this.marque[1] === 0 || this.marque[1] === 15 || this.marque[1] === 30 || this.marque[1] === 40 || this.marque[1] === 50)) {
				if (this.marque[0] === this.marque[1] && this.marque[0] !== 40 && this.marque[0] !== 0) {
					return this.marque[0] + 'A';
				} else if (this.marque[0] === this.marque[1] && this.marque[0] === 40) {
					return 'Egalité';
				} else if (this.marque[0] === 50) {
					return 'Avantage ' + this.joueurs[0];
				} else if (this.marque[1] === 50) {
					return 'Avantage ' + this.joueurs[1];
				} else {
				return this.marque[0] + '-' + this.marque[1];
				}
			}
			else {
				throw 'score non conforme';
			}
		}
		catch (err) {
			return 'Erreur : ' + err;
		}
	}

Jeu.prototype.addPoint = function(id) {
		//Le joueur joueurs[id] marque un point :
		if (this.marque[id] === 0 || this.marque[id] === 15) {
			//Situtation classique
			this.marque[id] += 15;
		}
		else if(this.marque[id] === 30) {
			//Situation à 30 - xx
			this.marque[id] += 10;
		}
		else if(this.marque[id] === 40) {
			//Situation à 40 - xx
			if (this.marque[id] > this.marque[1-id]) {
				//Situation de victoire
				console.log('jeu ' + this.joueurs[id]);
			}
			else if (this.marque[0] === this.marque[1]) {
				//Situation d'égalité
				this.marque[id] = 50;
			}
			else if (this.marque[1-id] === 50) {
				//Situation d'avantage pour l'adversaire
				this.marque[1-id] = 40;
			}
			else if(this.marque[id] === 50) {
				//Situation d'avantage
				return ('jeu ' + this.joueurs[id]);
			}
		}
	}	

var jeu = new Jeu();

$('#itsInA').click(jeu.addPoint(0));
$('#itsInB').click(jeu.addPoint(1));
$('#score').html(jeu.score());
