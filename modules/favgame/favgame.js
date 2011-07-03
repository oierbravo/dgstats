

Drupal.behaviors.dgstatsFavgame = function(){
    var btnClass = 'favgame-btn';
    var favgameTrue = 'favgame-true';
    var favgameFalse = 'favgame-false';
    var baseUrl = 'dgstats/js/favgame/';

    var op,btnParent,gameid;

    $('.' + btnClass).click(function(){
        btnParent = $(this).parent();
        gameid = $(this).attr('gameid');
        $(this).empty();
        if($(this).hasClass(favgameTrue)){
            //OP REMOVE
            $(this).removeClass(favgameTrue);
            $(this).addClass(favgameFalse);
            op = 'remove';
            url = '/' + baseUrl + gameid + '/' +  op;

            $(this).load(url + ' img');
        } else {
            //OP SET
            $(this).removeClass(favgameFalse);
            $(this).addClass(favgameTrue);
            op = 'set';
            url = '/' + baseUrl + gameid + '/' + op;
            $(this).load(url + ' img');
        }
    });



}