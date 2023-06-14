class text{
    constructor(text1, text2, text3, imgPath) {
        this.text_1 = text1;
        this.text_2 = text2;
        this.text_3 = text3;
        this.img_path = imgPath;
    }
}

let Text1 = new text("1...","...","...","./Download.jpeg");
let Text2 = new text("2...","...","...","./Download2.jpeg");
let Text3 = new text("3...","...","...","./Download.jpeg");

function print(){
    console.log("test");
    setText(Text1);
}

function to704(){
    animate(Text1);
    btnColor("_704");
}

function to1862(){
    animate(Text2);
    btnColor("_1862");
}

function to1944(){
    animate(Text3);
    btnColor("_1944");
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