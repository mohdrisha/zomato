function validation(){
    let flage=0;
    let find=document.getElementById('find').value.trim()

    if(find==""){
        document.getElementById("error").innerHTML="This filed is required"
        flage=1;
    }
    if(flage==1){
        return true;
    }


    

}