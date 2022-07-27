document.getElementById("Alert").addEventListener("click", show_ale);

document.getElementById("alBot").addEventListener("click", clo_ale);
document.getElementById("Confirm").addEventListener("click", show_con);
document.getElementById("canBot").addEventListener("click", clo_con_false);
document.getElementById("okaybot").addEventListener("click", clo_con_true);
document.getElementById("Promt").addEventListener("click", show_prom);
document.getElementById("PromCanBot").addEventListener("click",clo_prom_can );
document.getElementById("PromOkBot").addEventListener("click", clo_prom_ok);
document.getElementById("Safer").addEventListener("click", show_safprom);
document.getElementById("SaProOkBot").addEventListener("click", clo_safprom_ok);
document.getElementById("SaPromCanBot").addEventListener("click", clo_safprom_can);

export function en_but(){
    document.getElementById("Alert").disabled = false;
    document.getElementById("Confirm").disabled = false;
    document.getElementById("Promt").disabled = false;
    document.getElementById("Safer").disabled = false;
}

export function ds_but(){
    document.getElementById("Alert").disabled = true;
    document.getElementById("Confirm").disabled = true;
    document.getElementById("Promt").disabled = true;
    document.getElementById("Safer").disabled = true;
}

export function show_ale(){
    ds_but();
    document.getElementById("digAle").show();

}

export function clo_ale(){

    en_but();
    document.getElementById("digAle").close();
}

export function show_con(){
    ds_but();
    document.getElementById("digCon").show();


}

export function clo_con_true(){
    let state;
    en_but();
    state = true;
    document.getElementById("digCon").close();
    document.getElementById("myOut").innerHTML = `Confirm result: ${state}`;
    document.getElementById("myOut").style.display = "initial";
   
}

export function clo_con_false(){
    let state;
    en_but();
    state = false;
    document.getElementById("digCon").close();
    document.getElementById("myOut").innerHTML = `Confirm result: ${state}`;
    document.getElementById("myOut").style.display = "initial";
   
}

export function show_prom(){
    ds_but();
    document.getElementById("digProm").show();
}

export function clo_prom_ok(){

    en_but();
    document.getElementById("digProm").close();

    if(document.getElementById("usname").value != null && document.getElementById("usname").value != ""){

        document.getElementById("myOut").innerHTML = `Prompt result: ${document.getElementById("usname").value}`;
    }
    
    else {

        document.getElementById("myOut").innerHTML = "User didn't enter anything";
    }
    document.getElementById("myOut").style.display = "initial";


}

export function clo_prom_can(){
    en_but();
    document.getElementById("digProm").close();
    document.getElementById("myOut").innerHTML = "User didn't enter anything";
    document.getElementById("myOut").style.display = "initial";

}

export function show_safprom(){
    ds_but();
    document.getElementById("digSafProm").show();
}

let input1;
export function clo_safprom_ok(){
    en_but();
    document.getElementById("digSafProm").close();
    input1 = DOMPurify.sanitize(document.getElementById("usname2").value);
    if((input1 == null) && (input1 == "")){

        document.getElementById("myOut").innerHTML = "User didn't enter anything";
        
    }

    else {

        document.getElementById("myOut").innerHTML = `Prompt result: ${input1}`;
    }
    
    document.getElementById("myOut").style.display = "initial";

}

export function clo_safprom_can(){
    en_but();
    document.getElementById("digSafProm").close();
    document.getElementById("myOut").innerHTML = "User didn't enter anything";
    document.getElementById("myOut").style.display = "initial";

}






