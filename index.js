function getFirstSelector(selector){
  const firstElement = document.querySelector(selector)
  return firstElement
}

function nestedTarget() {
  var something = document.querySelector('#nested .target')
  return something
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')
  for (let i =0; i<rankedLists.length; i++){
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML) + n).toString()
  }
}

function deepestChild(){
  var nodeList = document.getElementById('grand-node').querySelectorAll('div')
  var answer = nodeList[nodeList.length- 1];
 return answer
}
