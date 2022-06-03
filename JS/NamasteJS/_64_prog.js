`
<div class="buttons">
<li class="excellence">excellence</li>
<li class="patience">patience</li>
<li class="calm">Calm</li>
</div>
    
`

document.getElementsByClassName('buttons')[0].onclick = function(event) {
    let _class = event.target.className;
    window.location.href = `#${_class}`;
};