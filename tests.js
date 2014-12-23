QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

test('InitialisationApp', function( assert ) {
	assert.expect(0);
	var jeu = new Jeu() ;
});

test('AfficherScoreDebutDePartie', function() { var jeu = new Jeu() ;
equal("0-0",jeu.score()) ; });

test('AfficherScore', function() { var jeu = new Jeu() ;
	jeu.marque=[0,15]; equal("0-15",jeu.score()) ; 
	jeu.marque=[0,30]; equal("0-30",jeu.score()) ; 
	jeu.marque=[0,40]; equal("0-40",jeu.score()) ; 
	jeu.marque=[15,0]; equal("15-0",jeu.score()) ; 
	jeu.marque=[30,0]; equal("30-0",jeu.score()) ; 
	jeu.marque=[40,0]; equal("40-0",jeu.score()) ; 
	jeu.marque=[15,15]; equal("15A",jeu.score()) ; 
	jeu.marque=[15,30]; equal("15-30",jeu.score()) ; 
	jeu.marque=[15,40]; equal("15-40",jeu.score()) ; 
	jeu.marque=[30,15]; equal("30-15",jeu.score()) ; 
	jeu.marque=[40,15]; equal("40-15",jeu.score()) ;
	jeu.marque=[30,30]; equal("30A",jeu.score()) ;
	jeu.marque=[40,30]; equal("40-30",jeu.score()) ; 
	jeu.marque=[30,40]; equal("30-40",jeu.score()) ; 
	jeu.marque=[40,40]; equal("Egalité",jeu.score()) ; 
	jeu.marque=[40,50]; equal("Avantage Le joueur B",jeu.score()) ;   
	jeu.marque=[50,40]; equal("Avantage Le joueur A",jeu.score()) ;  
	jeu.marque=[12,15]; equal("Erreur : score non conforme",jeu.score()) ;
	jeu.marque=[0,15.5]; equal("Erreur : score non conforme",jeu.score()) ; 
	jeu.marque=['quinze','quinze']; equal("Erreur : score non conforme",jeu.score()) ; 
});
test('AjouterPoint', function() {
	var jeu = new Jeu();
	jeu.addPoint(0) ; equal(15,jeu.marque[0]);
	jeu.addPoint(1) ; equal(15,jeu.marque[1]);
	jeu.addPoint(0) ; equal(30,jeu.marque[0]);
	jeu.addPoint(1) ; equal(30,jeu.marque[1]);	
	jeu.addPoint(1) ; equal(40,jeu.marque[1]);
	jeu.addPoint(0) ; equal(40,jeu.marque[0]);
	jeu.addPoint(1) ; equal(50,jeu.marque[1]);
	jeu.addPoint(1) ; equal('jeu Le joueur B');

})

//test('TestFonctionSave', function() { } )