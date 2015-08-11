/**
 * The Javascript version of Weegiepsum
 *
 * @author Nikhil Vimal
 */

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/**
 * Weegiepsum Main Function. Nuff Said.
 *
 * @param elem An ID from the HTML
 * @constructor
 */
function Weegiepsum(elem) {
    var loremIpsumWordBank = new Array("N","a","fucken","blocking","haudin,","heid","gaunnae","fir","sais", "jellybaby", "tae", "maws", "junkie", "stupit", "yaldy", "aye", "lit", "daeing", "yer", "subby", "gawn", "yeldy" );
    var minWordCount = 25;
    var maxWordCount = 100;

    var randy = Math.floor(Math.random()*(maxWordCount - minWordCount)) + minWordCount;
    var ret = "";
    for(i = 0; i < randy; i++) {
        var newTxt = loremIpsumWordBank[Math.floor(Math.random() * (loremIpsumWordBank.length - 1))];
        if (ret.substring(ret.length-1,ret.length) == "." || ret.substring(ret.length-1,ret.length) == "?") {
            newTxt = newTxt.substring(0,1).toUpperCase() + newTxt.substring(1, newTxt.length);
        }
        ret += " " + newTxt;
    }
    document.getElementById(elem).innerHTML = document.getElementById(elem).innerHTML + "<p> " + ret.substring(0,ret.length-1) + ".</p>";
}