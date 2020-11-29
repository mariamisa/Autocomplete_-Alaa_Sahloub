const search_input = document.getElementById('search_input');
search_input.addEventListener("input", (e)=>{
    e.preventDefault();
    fetch(`/search?query=${search_input.value}` , rendderResult)
})

const suggestions = document.getElementById('suggestions');
function rendderResult (arr){

   arr.forEach(element => {
    const optionEl = document.createElement('option');
    optionEl.value = element;
    suggestions.appendChild(optionEl);
    console.log(element)
   });
}
