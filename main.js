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
    "Es gibt keinen eindeutigen Zeitpunkt, zu der die Stadt als diese entstand, da sie sich aus Teilsiedlungen zusammensetzte. Die erste Siedlung wurde um 350 v. Chr. von den Griechen erbaut und Níkaia genannt.",
    "",
    "",
    "./IMG-20230705-WA0047.jpg",
    true,
    false,
    false
);

let _154 = new text(
    "",
    "Nach 154 v. Chr. wurde die bereits bestehende Siedlung aus griechischer Zeit von den Römern ausgebaut und erweitert, welches eine 2. Siedlung namens Cemenelum hervorbrachte. Dies prägte das heutige Nizza erstmalig mit „italienischem“ Flair.",
    "",
    "./Decumanus_Cemenelum.jpg",
    false,
    true,
    false
);

let _508 = new text(
    "Nizza fiel erstmalig an die Ostgoten und danach an Frankreich. Die römische Siedlung Cemenelum wurde zugunsten von Níkaias aufgegeben.",
    "",
    "",
    "./AtHistEur500.jpg",
    true,
    false,
    false
);

let _1388 = new text(
    "In dieser Zeitspanne befand sich Nizza unter Regierung des Hauses Savoyen, welches eine kulturell italienische Grafschaft war und später zum Königreich Sardinien-Piemont wurde.",
    "Auch die Amtssprache zu dieser Zeit war Italienisch. Die Blütezeit der italienischen Kunst sowie Architektur der Renaissance und des Barocks waren auch in Nizza stark vertreten.",
    "",
    "./220px-Plan-Nice-1624.jpg",
    true,
    true,
    false
);

let _16 = new text(
    "Viele Gebäude im Stil der Renaissance und des Barocks mit klassischen Säulen und Bögen, welche in Nizza errichtet wurden, prägen bis heute das Stadtbild.",
    "Beispiele für diese Renaissance-Architektur in Nizza sind der Palais de Justice und das Palais Rusca.",
    "Die Kathedrale Sainte-Réparate und die Chapelle de la Miséricorde sind Beispiele für die Barock-Architektur. Vor allem die katholisch-italienische Kirche fand zu dieser Zeit Einzug in Nizza.",
    "./IMG-20230705-WA0055.jpg",
    true,
    true,
    true
);

let _today = new text(
    "Wie bereits erwähnt, ist Nizza sowohl architektonisch als auch geschichtlich und kulturell stark mit Italien verbunden.",
    "Dies lässt sich vor allem in der größtenteils unveränderten Altstadt erkennen: Die engen Gassen mit vielen kleinen Läden werden von kleineren Plätzen unterbrochen an denen katholische Kirchen im Stil der Renaissance und des Barock stehen, verleihen diesem Stadtteil einen italienischen Flair, welcher durch Eisstände und Pizzerien untermalt wird.",
    "Nicht weit entfernt, am Place Masséna, wird die Moderne mit alten rot-gelben Gebäuden kombiniert, die von den Savoyen erbaut wurden, da die Straßenbahn, vom Boulevard kommend, mitten durch ihnen hindurch auf den neu gepflasterten Platz fährt.",
    "./IMG-20230705-WA0051.jpg",
    true,
    true,
    true
);

let _fazit = new text(
    "Man spürt, dass Nizza seit der Antike von den verschiedensten Kulturen geprägt wurde, von denen die französische und italienische den meisten Einfluss hatten. So lässt sich sagen: Nizza – eine französische Küstenstadt unter einer italienischen Mittelmeersonne.",
    "",
    "",
    "./IMG-20230705-WA0057.jpg",
    true,
    false,
    false
);

function print(){
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

        case '508':
            animate(_508);
            btnColor("_508");
            break;
        
        case '1388':
            animate(_1388);
            btnColor("_1388");
            break;

        case '16':
            animate(_16);
            btnColor("_16");
            break;
        case 'today':
            animate(_today)
            btnColor("_today")
            break;
        case 'fazit':
            animate(_fazit)
            btnColor("_fazit")
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
    
    e1.style.animationName = "InfoTextHin";
    e1.style.animationDuration = "1.05s";
    
    e2.style.animationName = "InfoTextHin";
    e2.style.animationDuration = "1.05s";
    
    e3.style.animationName = "InfoTextHin";
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

        //e4.style.backgroundImage = `url(./${textClass.img_path})`;
        e4.src = `./${textClass.img_path}`;
        
        e1.style.animationName = "InfoTextBack";
        e1.style.animationDuration = "1.2s";

        e2.style.animationName = "InfoTextBack";
        e2.style.animationDuration = "1.2s";

        e3.style.animationName = "InfoTextBack";
        e3.style.animationDuration = "1.2s";

        e4.style.animationName = "PicBack";
        e4.style.animationDuration = "1.2s";

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

        }, 500);
    }, 1005);
}