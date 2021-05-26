import React from 'react'
import './ScrollableDiv.css'
import axios from 'axios'

window.onload=function(){
    const searchval = document.getElementById("searchtext")
    searchval.addEventListener('input', changeval)
  
  var tosearch = ""
  var data = {}
  
  
  axios.get('https://search-widget-backend.herokuapp.com/products').then(response => {
    data = response.data
  })
  
  function changeval(e){

    var ress = document.getElementById("results")
    ress.className = ""
    ress.className += "scrollable-div"
  
    tosearch = e.target.value
    if(tosearch === ""){
      var res = document.getElementById("results")
      res.className += " opacity"
    }
    else{
      var tempres = document.getElementById("results")
        tempres.innerHTML = ""
        var temp = []
        var index = 0;
        data.forEach(element => {
          if(element.name.includes(tosearch)){
            temp[index] = element;
            console.log(temp[index])
            index = index + 1;
          }
        })

        if(temp.length === 0){
          var ele_h1 = document.createElement("h1")
            ele_h1.appendChild(document.createTextNode("No Results"))

            var ele = document.createElement("div")
            ele.className += "search-result"
            ele.appendChild(ele_h1)

            var res = document.getElementById("results")
            res.appendChild(ele)
        }
        else{
          temp.forEach(val => {

            var ele_h1 = document.createElement("h1")
            ele_h1.appendChild(document.createTextNode(val.name))

            var ele_p = document.createElement("p")
            ele_p.appendChild(document.createTextNode(val.available))

            var ele = document.createElement("div")
            ele.className += "search-result"
            ele.appendChild(ele_h1)
            ele.appendChild(ele_p)

            var res = document.getElementById("results")
            res.appendChild(ele)
          });
      }
    }
  }
}


function ScrollableDiv() {

    return (
        <div className="scrollable-div opacity" id="results">
            
        </div>
    )
}

export default ScrollableDiv
