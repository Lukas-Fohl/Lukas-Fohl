class text{
    constructor(text1, text2, text3, imgPath, isThere1, isThere2, isThere3) {
        this.text_1 = text1;
        this.text_2 = text2;
        this.text_3 = text3;
        this.img_path = imgPath;
        this.isThere_1 = isThere1;
        this.isThere_2 = isThere2;
        this.isThere_3 = isThere3;
    }
}

let _350 = new text(
    "Es gibt keinen eindeutigen Zeitpunkt wann die Stadt als diese entstand da sie sich aus Teilesiedlungen Zusammensetzte. Die erste Siedlung wurde um 350 v. Chr. Von den Griechen erbaut und Níkaia genannt",
    "",
    "",
    "./Download.jpeg",
    true,
    false,
    false);

let _154 = new text(
    "",
    "Nach  154 v. Chr. wurde die bereits bestehende Siedlungen aus griechischer Zeit von den Römern ausgebaut und erweitert welches eine 2. Siedlung namens Cemenelum hervorbrachte.  Dies Prägte das heutige Nizza erstmalig mit \„italienischem\“ Flair.",
    "",
    "./Download.jpeg",
    false,
    true,
    false);

let _1388 = new text(
    "3...",
    "...",
    "...",
    "./Download.jpeg",
    true,
    true,
    true);

function print(){
    console.log("test");
    setText(_350);
}

function callAnimation(year){
    switch(year){
        case '350':
            animate(_350);
            btnColor("_350");
            break;

        case '154':
            animate(_154);
            btnColor("_154");
            break;
        
        case '1388':
            animate(_1388);
            btnColor("_1388");
            break;
        }
    }
    
    function btnColor(id_){
        var buttons = document.getElementsByTagName('button');
        for (let i = 0; i < buttons.length; i++) {
            if(buttons[i].id == id_){
                buttons[i].style.border = "3px solid #fa9f5a";
            }else{
                buttons[i].style.border = "0px solid #000000";
            }
        }
}

function setText(textClass){
    e1 = document.getElementById("infoText1");
    e2 = document.getElementById("infoText2");
    e3 = document.getElementById("infoText3");
    e4 = document.getElementById("pic");

    if(textClass.isThere_1===true){
        e1.style.display = "inline";    
    }else{
        e1.style.display = "none";    
    }

    if(textClass.isThere_2===true){
        e2.style.display = "inline";    
    }else{
        e2.style.display = "none";    
    }
    
    if(textClass.isThere_3===true){
        e3.style.display = "inline";    
    }else{
        e3.style.display = "none";    
    }

    e1.innerText = textClass.text_1;
    e2.innerText = textClass.text_2;
    e3.innerText = textClass.text_3;
    e4.style.backgroundImage = `url(./${textClass.img_path})`;
}

function animate(textClass){
    e1 = document.getElementById("infoText1");
    e2 = document.getElementById("infoText2");
    e3 = document.getElementById("infoText3");
    e4 = document.getElementById("pic");
    
    var buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
    
    e1.style.animationName = "InfoText1Hin";
    e1.style.animationDuration = "1.05s";
    
    e2.style.animationName = "InfoText2Hin";
    e2.style.animationDuration = "1.05s";
    
    e3.style.animationName = "InfoText3Hin";
    e3.style.animationDuration = "1.05s";
    
    e4.style.animationName = "PicHin";
    e4.style.animationDuration = "1.05s";
    
    setTimeout(function() {
        
        if(textClass.isThere_1===true){
            e1.style.display = "inline";    
        }else{
            e1.style.display = "none";    
        }

        if(textClass.isThere_2===true){
            e2.style.display = "inline";    
        }else{
            e2.style.display = "none";    
        }

        if(textClass.isThere_3===true){
            e3.style.display = "inline";    
        }else{
            e3.style.display = "none";    
        }

        e1.innerText = textClass.text_1;
        e2.innerText = textClass.text_2;
        e3.innerText = textClass.text_3;
        console.log(`url:('${textClass.img_path}')`);
        e4.style.backgroundImage = `url(./${textClass.img_path})`;
        
        e1.style.animationName = "InfoText1Back";
        e1.style.animationDuration = "1s";

        e2.style.animationName = "InfoText2Back";
        e2.style.animationDuration = "1s";

        e3.style.animationName = "InfoText3Back";
        e3.style.animationDuration = "1s";

        e4.style.animationName = "PicBack";
        e4.style.animationDuration = "1s";

        setTimeout(function() {

            e1.id = "infoText1";
            e2.id = "infoText2";
            e3.id = "infoText3";
            e4.id = "pic";

            e1.style.animationName = "";
            e1.style.animationDuration = "";

            e2.style.animationName = "";
            e2.style.animationDuration = "";

            e3.style.animationName = "";
            e3.style.animationDuration = "";

            e4.style.animationName = "";
            e4.style.animationDuration = "";

            var buttons = document.getElementsByTagName('button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
            }

        }, 1000);
    }, 1000);
}