//buttonPrevious = document.getElementById('previousText');
buttonNext = document.getElementById('nextText');
text = document.querySelector('span');

counter=0;
array_text = ['First','Second','Third','Fourth','Fifth','Sixth','Seventh']
function nextText() {
   // text = document.querySelector('span');
   // text.style.color ='red';
    //console.log(text.style);
    counter++;
    if(counter >= array_text.lehgth){
        counter=0;
    }
    text.innerHTML = array_text[counter];

}
function showNextText() {
    if(counter+1 >= array_text.lehgth){

        buttonNext.innerHTML = 'следующий текст(' + array_text[0] + ')';}
    else{
        buttonNext.innerHTML = 'следующий текст(' + array_text[counter+1] + ')';}
}
buttonNext.addEventListener('click', nextText);
buttonNext.addEventListener('click', showNextText);