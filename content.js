
document.onreadystatechange = function(){
     if(document.readyState === 'complete'){
        setTimeout(function() {
            var b = document.getElementsByTagName('body');

            if(b[0].classList !== undefined) {
                b[0].classList.remove('tp-modal-open');
            } else {
                b[0].className = '';
            }
        }, 500);
     }

     if(document.querySelectorAll('[data-piano-inline-content-wrapper]')[0] !== 'undefined') {
     	document.querySelectorAll('[data-piano-inline-content-wrapper]')[0].style.display = 'block';
     }

}
