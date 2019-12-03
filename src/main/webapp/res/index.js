function selectAll(){
    var check_agreements = document.querySelectorAll('.checkAgr');

    for(let i=0; i<check_agreements.length; i++){
        var check_agreement = check_agreements[i];
        check_agreement.checked = true;
    }
}

function submit(){
    var secondBtn = document.querySelector('#agreeOne');
    var thirdBtn = document.querySelector('#agreeTwo');

    if(secondBtn.checked && thirdBtn.checked){
        location.href = "/users";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'You have to agree to all statements to submit the form.',
            showClass: {
              popup: 'animated fadeInDown faster'
            },
            hideClass: {
              popup: 'animated fadeOutUp faster'
            }
          })
    }
}

function firstAni(){
    var title = document.querySelector('#firstAni');
    title.classList.add('animated', 'bounceOutLeft');
}

function secondAni(){
    var title = document.querySelector('#secondAni');
    title.classList.add('animated', 'flipInX');
}

function thirdAni(){
    var title = document.querySelector('#thirdAni');
    title.classList.add('animated', 'zoomInDown');
}