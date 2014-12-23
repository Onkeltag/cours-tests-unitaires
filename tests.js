QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

test('InitialisationApp', function( assert ) {
	assert.expect(0);
	var jeu = new Jeu() ;
});

test('AfficherScoreDebutDePartie', function() {
var jeu = new Jeu() ;
equal("0-0",jeu.score()) ;
});