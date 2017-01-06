var isAnnoy = 0;

function randInt(a, b) {
    return Math.floor((Math.random() * (b - a + 1)) + a);
}

function randomColor() {
    //#rrggbb

    var color = randInt(0, Math.pow(2, 24) - 1);
    var cinverse = Math.pow(2, 24) - 1 - color;

    return ["#" + color.toString(16), "#" + cinverse.toString(16)];
}



function annoy() {
    var bodyelem = document.getElementById("bodyelem");
    var pelem1 = document.getElementById("pelem1");
    var h1elem = document.getElementById("h1elem");
    var pelem2 = document.getElementById("pelem2");
    var h2elem = document.getElementById("h2elem");
    var h2elem2 = document.getElementById("h2elem2");
    var h2elem3 = document.getElementById("h2elem3");
    var h2elem4 = document.getElementById("h2elem4");
    var li = document.getElementById("li");
    var howard = document.getElementById("howard");
    var alex = document.getElementById("alex");
    var katherine = document.getElementById("katherine");
    var amanda = document.getElementById("amanda");
    var auston = document.getElementById("auston");
    var complementary = document.getElementById("complementary");
    var discordant = document.getElementById("discordant");
    var telem = document.getElementById("telem");
    var ex1 = document.getElementById("ex1");
    var ex2 = document.getElementById("ex2");
    var ex3 = document.getElementById("ex3");
    var thelem = document.getElementById("thelem");
    var thelemd1 = document.getElementById("thelemd1");
    var thelemd2 = document.getElementById("thelemd2");
    var trelem1 = document.getElementById("trelem1");
    var trelem2 = document.getElementById("trelem2");
    var trelem3 = document.getElementById("trelem3");
    var tdelem11 = document.getElementById("tdelem11");
    var tdelem12 = document.getElementById("tdelem12");
    var tdelem21 = document.getElementById("tdelem21");
    var tdelem22 = document.getElementById("tdelem22");
    var tdelem31 = document.getElementById("tdelem31");
    var tdelem32 = document.getElementById("tdelem32");
    
    
    
    isAnnoy = (isAnnoy + 1)%5;
    switch (isAnnoy) {
        case 4:
            h1elem.innerHTML = "<embed src=\"http://www.sheepproductions.com/billy/billy.swf?autoplay=true&f0=http://jwellstech.github.com/2015/webDevFinal/john.mp3&t0=J0Hn c3NA&total=1\" quality=\"high\" wmode=\"transparent\" width=\"200\" height=\"10\" name=\"billy\" align=\"middle\" type=\"application/x-shockwave-flash\" /> H&#x1f3ba;W tO   J&#x1f3ba;hN CENA &#x1f3ba;";
//                "<embed src=\"http://www.sheepproductions.com/billy/billy.swf?autoplay=true&f0=/john.mp3&t0=jOHn c3NA&total=1\" quality=\"high\" wmode=\"transparent\" width=\"200\" height=\"10\" name=\"billy\" align=\"middle\" type=\"application/x-shockwave-flash\" /> H&#x1f3ba;W tO   J&#x1f3ba;hN CENA &#x1f3ba;";
            h2elem2.innerHTML = "EX&#x1f3ba;MPLES &#x1f3ba;F wh@t 2 av&#x1f3ba;1D:";
            h2elem3.innerHTML = "WH&#x1f3ba; 2 P1L3 DR1V3";
            h2elem4.innerHTML = "WhY tHey SUcK";
            tdelem22.innerHTML = "&#x1f3ba;";
            tdelem32.innerHTML = "I AM JOHN CENA";
            break;
        case 3:
            pelem2.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            pelem2.style.fontSize = "32px";
            tdelem12.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            tdelem22.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            tdelem32.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            break;
        case 2:
            var rColor = randomColor();
            h2elem.style.color = rColor[1];
            h2elem2.style.color = rColor[0];
            rColor = randomColor();
            h2elem3.style.color = rColor[1];
            h2elem4.style.color = rColor[0];
            h1elem.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            h2elem.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            h2elem2.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            h2elem3.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            h2elem4.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            break;
        case 1:
            var rColor = randomColor();
            bodyelem.style.background = rColor[0];
            pelem1.style.color = rColor[1];
            pelem1.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            rColor = randomColor();
            howard.style.color = rColor[1];
            howard.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            alex.style.color = rColor[0];
            alex.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            rColor = randomColor();
            katherine.style.color = rColor[1];
            katherine.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            amanda.style.color = rColor[0];
            amanda.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            break;
        case 0:
            h1elem.innerHTML = "How to Make a Good Website";
            bodyelem.style.background = "white";
            h1elem.style.fontFamily = "Caecilia, Times, serif";
            h1elem.style.color = "#1aba52";
            h2elem.style.fontFamily = "Caecilia, Times, serif";
            h2elem.style.color = "rgb(56,56,56)";
            h2elem2.style.fontFamily = "Caecilia, Times, serif";
            h2elem2.style.color = "rgb(56,56,56)";
            h2elem3.style.fontFamily = "Caecilia, Times, serif";
            h2elem3.style.color = "rgb(56,56,56)";
            h2elem4.style.fontFamily = "Caecilia, Times, serif";
            h2elem4.style.color = "rgb(56,56,56)";
            pelem1.style.color = "rgb(56,56,56)";
            pelem1.style.fontFamily = "Gotham, Helvetica, Arial, sans-serif";
            pelem2.style.fontSize = "14px";
            pelem2.style.fontFamily = "Gotham, Helvetica, Arial, sans-serif";
            tdelem12.style.fontFamily = "Gotham, Helventica, Arial, sans-serif";
            tdelem22.style.fontFamily = "Gotham, Helventica, Arial, sans-serif";
            tdelem32.style.fontFamily = "Gotham, Helventica, Arial, sans-serif";
            howard.style.fontFamily = "Gotham, Helventica, Arial, sans-serif";
            howard.style.color = "rgb(56,56,56)";
            alex.style.fontFamily = "Gotham, Helventica, Arial, sans-serif";
            alex.style.color = "rgb(56,56,56)";
            katherine.style.fontFamily = "Gotham, Helventica, Arial, sans-serif";
            katherine.style.color = "rgb(56,56,56)";
            amanda.style.fontFamily = "Gotham, Helventica, Arial, sans-serif";
            amanda.style.color = "rgb(56,56,56)";
            auston.style.fontFamily = "Gotham, Helventica, Arial, sans-serif";
            h2elem2.innerHTML = "Examples of what to avoid:";
            h2elem3.innerHTML = "Example";
            h2elem4.innerHTML = "Sins committed";
            tdelem22.innerHTML = "Discordant color attrocities committed.";
            tdelem32.innerHTML = "Does not present relevant information in a timely, functioning manner.";
            break;
    }
    
//this code block adapted from http://www.javascriptkit.com/dhtmltutors/parallaxscrolling/
/* code block begin */
    window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){setTimeout(f, 1000/60)};

    function fontScroll() {
        var rColor = randomColor();
        pelem1.style.color = rColor[0];
        h1elem.style.color = rColor[1];
        rColor = randomColor();
        h2elem.style.color = rColor[1];
        h2elem2.style.color = rColor[0];
        rColor = randomColor();
        h2elem3.style.color = rColor[0];
        h2elem4.style.color = rColor[1];
    }
    
    function backgroundScroll() {
        var rColor = randomColor();
        bodyelem.style.background = rColor[0];
    }
    
    function fontScroll2() {
        var rColor = randomColor();
        howard.style.color = rColor[0];
        alex.style.color = rColor[1];
        rColor = randomColor();
        katherine.style.color = rColor[1];
        amanda.style.color = rColor[0];
        rColor = randomColor();
        auston.style.color = rColor[0];
        auston.style.color = rColor[1];
        rColor = randomColor();
        tdelem12.style.color = rColor[0];
        tdelem22.style.color = rColor[1];
        rColor = randomColor();
        tdelem32.style.color = rColor[0];
        pelem2.style.color = rColor[1];
        
    }
    
    window.addEventListener('scroll', function(){ // on page scroll
        if ((isAnnoy %5) >= 3) { 
            /*global requestAnimationFrame*/ requestAnimationFrame(fontScroll); 
        }
         if ((isAnnoy %5) >= 2) { 
             requestAnimationFrame(backgroundScroll); 
         }
        if ((isAnnoy %5) >= 4) {
            requestAnimationFrame(fontScroll2);
        }
    }, false);
/* code block end */

    document.getElementById("annoyButton").value = "Annoyance level: " + isAnnoy;
}