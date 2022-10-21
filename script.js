function PSWgen(){
    let abc = "`12345LZyughjkl;'ziop6,./~!0-=qwertHJm()_+{}|:<K[]asd@#$%^&*789fxcvbn>?QWERTYUIOPASDFGXCVBNM"
    let pswLength = 12;

    if(document.getElementById("psw").value == ""){
        for(let i = 0; i < 12; i++){
            let random = Math.floor(Math.random() * 92)
            let psw = abc.charAt(random)
            document.getElementById("psw").value += psw;
        }
    }   else{
        document.getElementById("psw").value = "";
        for(let i = 0; i < 12; i++){
            let random = Math.floor(Math.random() * 92)
            let psw = abc.charAt(random)
            document.getElementById("psw").value += psw;
        }
    }
}
