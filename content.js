
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
}
