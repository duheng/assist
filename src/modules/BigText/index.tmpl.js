const BigTextHtml = (namespace) => {
     return `<div id='${namespace}-bigtext-html' class='bigtext-html'>
           <div id='${namespace}-bigtext-content' class='bigtext-html-content'></div>
           <div class='bigtext-html-btn'>
              <i class='bigtext-html-close'>X</i>
           </div>
        </div>`
}

export default BigTextHtml;