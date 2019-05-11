
document.onreadystatechange = function(){
     if(document.readyState === 'complete'){
        setTimeout(function() {
            var b = document.getElementsByTagName('body');

            if(b.classList !== undefined) {
                b.classList.remove('tp-modal-open');

            } else {

                b.className = '';
            }
        }, 3000);
     }
}
