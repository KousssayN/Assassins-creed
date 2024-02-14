/*start of color changing*/
function colorup1() {
    document.getElementById("login").style.backgroundColor = "red";
    document.getElementById("login").style.boxShadow = "0px 0px 20px 10px";
    document.getElementById("login").style.transition = "2s";
}
function colordown1() {
    document.getElementById("login").style.backgroundColor = "rgba(160, 0, 0, 0.63)";
    document.getElementById("login").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("login").style.transition = "2s";
}
function colorup2() {
    document.getElementById("signup").style.backgroundColor = "red";
    document.getElementById("signup").style.boxShadow = "0px 0px 20px 10px";
    document.getElementById("signup").style.transition = "2s";
}
function colordown2() {
    document.getElementById("signup").style.backgroundColor = "rgba(160, 0, 0, 0.63)";
    document.getElementById("signup").style.boxShadow = "0px 0px 0px 0px";
    document.getElementById("signup").style.transition = "2s";
}
/*end  of the color changing*/



/*start of verif1 login */

function verif1() {
    let tel = document.getElementById("tel").value;
    let mail = document.getElementById("mail").value;
    let psw = document.getElementById("psw").value;

    if (tel.length != 8 || !verif_num(tel) || (tel[0] != 2 && tel[0] != 5 && tel[0] != 9 && tel[0] != 4)) {
        alert("Please Make Sure That Your Phone Number Is Correct");
        return false;
    }
    let alt = (mail.indexOf('@'));
    let dot = mail.indexOf(".");
    if (dot == -1 || alt == -1 || alt > dot) {
        alert("Email Is Incorrect The @ And . Not Existing Or Not In The Rigth Place");
        return false;
    }
    if (mail.substr(0, alt) == '' || mail.substr(alt + 1, dot - alt - 1) == '' || mail.substr(dot + 1) == "") {
        alert("Please Write Your Email Correctly");
        return false;
    }
    if (verif_num_alpha(mail.substr(0, alt)) == false) {
        alert("Please Verifie That Your Email is Only Letters And Numbers");
        return false;
    }
    if (verifyMaj(psw) == 0) {
        alert("Your Password Must Contain At Leat One Uppercase Letter")
        return false;
    }
    if (verifymin(psw) == 0) {
        alert("Your Password Must Contain At Leat One Lowercase Letter")
        return false;
    }
    if (verifynumber(psw) == 0) {
        alert("Your Password Must Contain At Leat One Number")
        return false;
    }
}

/*end of verif1 login */


/*start of verif2 signup */
function verif2() {
    let np=document.getElementById("np").value;
    let prename=document.getElementById("prename").value;
    let tel = document.getElementById("tel2").value;
    let mail = document.getElementById("mail2").value;
    let psw = document.getElementById("psw2").value;
    let cpsw = document.getElementById("cpsw2").value;

    if(np=="" || !verif_alpha(np)){
        alert("Verify Your Name Please");
        return false ;
    }
    if(prename=="" || !verif_alpha(prename)){
        alert("Verify Your Prename Please");
        return false ;
    }

    if (tel.length != 8 || !verif_num(tel) || (tel[0] != 2 && tel[0] != 5 && tel[0] != 9 && tel[0] != 4)) {
        alert("Please Make Sure That Your Phone Number Is Correct");
        return false;
    }
    let alt = (mail.indexOf('@'));
    let dot = mail.indexOf(".");
    if (dot == -1 || alt == -1 || alt > dot) {
        alert("Email Is Incorrect The @ And . Not Existing Or Not In The Rigth Place");
        return false;
    }
    if (mail.substr(0, alt) == '' || mail.substr(alt + 1, dot - alt - 1) == '' || mail.substr(dot + 1) == "") {
        alert("Please Write Your Email Correctly");
        return false;
    }
    if (verif_num_alpha(mail.substr(0, alt)) == false) {
        alert("Please Verifie That Your Email is Only Letters And Numbers");
        return false;
    }
    if (verifyMaj(psw) == 0) {
        alert("Your Password Must Contain At Leat One Uppercase Letter");
        return false;
    }
    if (verifymin(psw) == 0) {
        alert("Your Password Must Contain At Leat One Lowercase Letter");
        return false;
    }
    if (verifynumber(psw) == 0) {
        alert("Your Password Must Contain At Leat One Number");
        return false;
    }
    if(cpsw!=psw){
        alert("Confirmation Password Is Incorrect");
        return false;
    }
}
/*end of verif2 signup */


/* start of verif3 purchase */
function verif3(){
    let sel=document.getElementById("games").value ;
    let pc=document.getElementById("pc").checked;
    let xbox=document.getElementById("xbox").checked;
    let play=document.getElementById("play").checked;
    let captcha=document.getElementById("captcha").value;
    let captcha2=document.getElementById("captcha2").value;
    let num=document.getElementById("nump1").value;


    if(sel==""){
        alert("Please Select A Game To Purchase");
        return false ;
    }
    if(!pc && !xbox && !play){
        alert("Please Choose Your Platform");
        return false ;
    }
    if(num==""){
        alert("Please Make Sure To Choose How Many Copies You Need");
        return false ;
    }
    if(num>10){
        alert("Please Make Sure The Number of Copies Is Under 10");
        return false ;
    }
    if(captcha2!=captcha){
        alert("To Be Sure That You Are Not A Robot Please Verify The Captcha");
        return false ;
    }

}

/* end of verif3 purchase */

/*start of the captcha generator */
function geenercaptha() { 
    let ch = ""; 
    for (let i = 0; i < 10; i++) { 
    k = Math.floor(Math.random() * 25 + 1); 
    if (k % 2 == 0) { 
    ch = ch + String.fromCharCode(k + 33); 
    } else ch = ch + String.fromCharCode(k + 96); 
    } 
    document.getElementById("captcha").value = ch; 
    } 

/* end of the captcha generator */



/* start of  verify if the Password  Contain At Leat One Uppercase Letter */
function verifyMaj(ch) {
    let nbMaj = 0;
    for (let i = 0; i < ch.length; i++) {
        if (ch[i] >= "A" && ch[i] <= "Z") {
            nbMaj++;
        }
    }
    return nbMaj;
}
/* end of verify if the Password  Contain At Leat One Uppercase Letter */


/* start of verify if the Password  Contain At Leat One lowercase Letter */

function verifymin(ch) {
    let nbMin = 0;
    for (let i = 0; i < ch.length; i++) {
        if (ch[i] >= "a" && ch[i] <= "z") {
            nbMin++;
        }
    }
    return nbMin;
}
/* end of  verify if the Password  Contain At Leat One Uppercase Letter */


/* start of verify if the Password  Contain At Leat One number*/

function verifynumber(ch) {
    let nbNum = 0;
    for (let i = 0; i < ch.length; i++) {
        if (ch[i] >= "0" && ch[i] <= "9") {
            nbNum++;
        }
    }
    return nbNum;
}
/* end of verify if the Password  Contain At Leat One number*/



/* start of verfi_num for checking if a string is formed by numbers or not */
function verif_num(ch) {
    for (let i = 0; i < ch.length; i++) {
        if (ch[i] < "0" || ch[i] > "9") {
            return false;
        }
    }
    return true
}
/* end of verfi_num for checking if a string is formed by numbers or not */

/* start of verfi_num for checking if a string is formed by Letters or not */
function verif_alpha(ch) {
    ch=ch.toUpperCase()
    for (let i = 0; i < ch.length; i++) {
        if ((ch[i] < "A" || ch[i] > "Z" )&& ch[i]!=" ") {
            return false;
        }
    }
    return true
}
/* end of verfi_num for checking if a string is formed by Letters or not */

/* start of verfi_num-alpha for checking if a string is formed by numbers and letters or not */

function verif_num_alpha(ch) {
    ch = ch.toLowerCase()
    car = "qwertyuiopasdfghjklzxcvbnm1234567890"
    for (let i = 0; i < ch.length; i++) {
        if (car.indexOf(ch[i]) == -1) {
            return false;
        }
    }
    return true
}
/* end of verfi_num-alpha for checking if a string is formed by numbers and letters or not */

