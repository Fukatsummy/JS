window.addEventListener("DOMContentLoaded", (event) => {
    
 let wrapper = new HtmlElement("div", false, "");
 wrapper.SetAttr("id", "wrapper");
 wrapper.SetStyle("display", "flex");

 let link = new HtmlElement("a", false, "More...");//наша ссылка
 link.SetAttr("href", "https://www.lipsum.com/");
 link.SetAttr("target", "_blank");

 let paragraph = new HtmlElement("p", false, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
 paragraph.SetStyle("text-align", "justify");
 paragraph.AddTagInEnd(link);

 let image = new HtmlElement("img", true,"");
 image.SetAttr("scr", "lipsum.jpg");
 image.SetAttr("alt", "Loren Ipsum");
 image.SetAttr("width", "100%");

 let header = new HtmlElement("h3", false, "What is Lores Ipsum?");//заголовок
 let anonimDiv = new HtmlElement("div", false, "");
 anonimDiv.SetStyle("width", "300px");
 anonimDiv.SetStyle("margin", "10px");
 anonimDiv.AddTagInEnd(image);
 anonimDiv.AddTagInEnd(paragraph);
 anonimDiv.AddTagOnStart(header);
 wrapper.AddTagInEnd(anonimDiv);
 document.write(wrapper.GetHtml());
    
});
 class HtmlElement{
      constructor(tagName, selfClosing, text){
        this.tagName = tagName;
        this.selfClosing = selfClosing;
        this.text = text;
        this.attrs = [];
        this.styles = [];
        this.tags = [];
      }
      SetAttr(attr, value) {
        let attribute = {
          attribute:attr,  //создаем объект
          value:value
        }
        this.attrs.push(attribute);

      }
      //метод для установки стиля
      SetStyle(key, value){ 
        let style = {
          key:key,  //создаем объект
          value:value
        }
        this.styles.push(style);
      }
      //добавление тэгов в начало
      AddTagOnStart(HtmlElement){
        this.tags.unshift(HtmlElement);

      }
      AddTagInEnd(HtmlElement){
        this.tags.push(HtmlElement);

      }
      GetHtml() {
        let htmlString = "";
        htmlString += `<${this.tagName} `; //интерполяция
        if(this.attrs.length > 0) {
            for(let i = 0; i < this.attrs.length; i++) {
                htmlString += `${this.attrs[i].attribute}="${this.attrs[i].value}" `;
            }
        }
        if(this.styles.length > 0) {
            htmlString += `style=" `;
            for(let i = 0; i < this.styles.length; i++) {
                htmlString += `${this.styles[i].key}:${this.styles[i].value}; `;
            }
            htmlString += `"`;
        }
        htmlString += `>`;
        if(this.text.length > 0)
            htmlString += this.text;
        
        if(this.tags.length > 0) {
            for(let i = 0; i < this.tags.length; i++) {
                htmlString += this.tags[i].GetHtml();
            }
        }
        if(this.selfClosing !== true) {
            htmlString += `</${this.tagName}>`;
        }

        return htmlString;
    }
}