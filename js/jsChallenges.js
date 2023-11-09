function challenge1(element){
    console.log('the checked thing:'+ element.checked);
    if (element.checked == true){
        document.querySelector('#emailDiv').style.display = 'block';
    }
    else{
        document.querySelector('#emailDiv').style.display = 'none';
    }
}
function challenge2(){
    console.log('check?')
    document.querySelector('#home').value = document.querySelector('#bill').value

}
document.querySelector('#sameAddress').addEventListener('click', challenge2);


/*if('#sameAddress'.checked == true)
    document.querySelector('#home').setAttrbute = 'disabled';*/