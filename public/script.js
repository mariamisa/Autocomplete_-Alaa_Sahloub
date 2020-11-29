const suggestions = document.getElementById('suggestions');
const search_input = document.getElementById('search_input');
const errorElement = document.getElementById('error')

search_input.addEventListener('input', (e)=>{
    e.preventDefault();
    if(e.target.value.trim()){
        fetch(`/search?query=${e.target.value}` , (err , response)=>{
            if(err){
                handelError(err) 
            }else{
                renderResult(response)
            }
        })
    }
})

function renderResult (arr){
   clearChild(suggestions);
   arr.forEach(element => {
    const optionEl = document.createElement('option');
    optionEl.value = element;
    suggestions.appendChild(optionEl);
    console.log(element)
   });
}

function clearChild(parent){
    let first = parent.firstElementChild; 
    while (first) { 
        first.remove(); 
        first = parent.firstElementChild; 
    } 
}

function handelError(err){
    errorElement.textContent=err;
}