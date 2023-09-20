let _s = (e) => document.querySelector(e);

let _pop = _s("._mz_pop");

_s("#jsOption").addEventListener("input", (_e) => {
    if(_e.target.checked) {
        console.log("checked");
    }
})

_s("#_hide_mz_pop").addEventListener("click", ()=>{
    _pop.classList.toggle("_active");
});