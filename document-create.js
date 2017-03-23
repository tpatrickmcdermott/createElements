// pass the function element to be create and any attributes/content (optional)
// Can be assigned to a variable; otherwise create a doc frag first
// and assign to that
create = function (ele, attribsObj) {
  var e = document.createElement(ele);
  if (attribsObj) {
    typeof attribsObj !== 'object'?  console.log('need object') : null ;
    for (key in attribsObj) {
      switch (key) {
        case 'content':
          e.textContent = attribsObj[key];
          break;
        case 'inner':
          e.innerHTML = attribsObj[key];
          break;
        default:
          e.setAttribute(key, attribsObj[key]);
      }
    }
  }
  return e;
}
// Use:
// * atttribsObj contains either attributes or content
// xx = create('div', {'content': 'hey, i am text <p>no tags rendered</p>'})
// zz = create('div', {inner: "Content: \n\t<p>Some paragraph</p>\n"})
// yy = create('h3', {'data-type': 'headline','content': 'My Headline' })
// ff = create('input', {type: 'text', size: 20})


createSimpleVersion = function (ele, id, cl, text) {
  var e = document.createElement(ele);
  id ? e.id = id : null ;
  cl ? e.className = cl : null ;
  text ? e.textContent = text : null ;
  // use innerHTML if you want HTML in there instead of just text
  return e;
}
// Use:
// myEle = create('div', 'myid', 'myclass', 'hey, add me to the dom tree!');

// alias
const pm = {};
pm.c = create;
// -- or (lazy global version) --
var c = create;



// Standalone Helpers
function getKeys(obj) {
  for (key in obj) {
    //use hasOwnProperty out in the wild, where your object may be
    //inheriting props from a library
    if (obj.hasOwnProperty(key)) {
      console.log(key +': '+obj[key])
    }
  }
}

//Composing example
var myEle = create('div', {id: 'maindiv'});
myEle.innerHTML = "<div class='row'> Row <div class='col'> Col </div></div>";
var targ = myEle.firstChild;
myEle.insertBefore(create('h3',{},"This is my main div"), targ);

//make a list and stuff line items
var myList = create('ul');
function createMany(ele, count) {
  var frag = document.createDocumentFragment();
  for (var i=0; i<count; i++) {
    frag.appendChild(create(ele));
  }
  return frag;
}
myList.appendChild(createMany('li', 5))
