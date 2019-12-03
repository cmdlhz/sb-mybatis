function selectAll(){
    var bindChecked = document.querySelector('#agreeAll').checked;
    // console.log(bindChecked);
    var check_agreements = document.querySelectorAll('.checkAgr');
    var intLength = check_agreements.length;
    // console.log(intLength);

    for(let i=0; i<intLength; i++){
        var check_agreement = check_agreements[i];
        // console.log(check_agreement);
        check_agreement.checked = bindChecked;
    }
}

function submit(){
    location.href = "/users";
}