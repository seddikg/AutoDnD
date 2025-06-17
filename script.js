function start(){
    sum=54;
    sumMax=72;
    document.getElementById("sum").innerHTML=sum;
    document.getElementById("sumMax").innerHTML=sumMax;
    t=["STR","DEX","CON","INT","WIS","CHR"];
    t.forEach(element => {
        document.getElementById(element).value=3;
        document.getElementById(element+"span").innerHTML="3";
    });


    fetch('flaws.json')
        .then(response => response.json())
        .then(data => {

            data.forEach(flaw => {


                if(flaw["isGreater"]){
                    contId="greaterFlaws"
                }
                else{
                    contId="lesserFlaws"
                }
                
                document.getElementById(contId).innerHTML+="<input onclick=\"sumMaxChange('"+flaw["id"]+"',"+flaw["value"]+")\" type='button' id='"+flaw["id"]+"' value='"+flaw["name"]+"'> <input type='checkbox' hidden id='"+flaw["id"]+"CB'>";
            });
        })
        .catch(error => console.error('Error loading JSON:', error));

}


function attChange(att){

    document.getElementById(att+"span").innerHTML=String(document.getElementById(att).value);
    sum=sumMax
    t.forEach(element => {
        sum-=document.getElementById(element).value;
    });
    document.getElementById("sum").innerHTML=String(sum);
}

function sumMaxChange(id,value){
    if (document.getElementById(id+"CB").checked){
        document.getElementById(id+"CB").checked=false;
        document.getElementById(id).style.backgroundColor="red"
        sumMax-=value
    }
    else{
        document.getElementById(id+"CB").checked=true;
        document.getElementById(id).style.backgroundColor="green"
        sumMax+=value
    }
    document.getElementById("sumMax").innerHTML=sumMax
    sum=sumMax
    t.forEach(element => {
        sum-=document.getElementById(element).value;
    });
    document.getElementById("sum").innerHTML=String(sum);
}