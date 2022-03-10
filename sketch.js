let n = 9, gramArray = {};
let button1;

function setup() {
  for (let i = 0; i<= inputText.length-n; i++) {
    let gram = inputText.substring(i, i+n);
    if (!gramArray[gram]) {
      gramArray[gram] = [];
    }
    gramArray[gram].push(inputText.charAt(i+n));
    
  }
  button1 = createButton("generate");
  button1.position(50, 50);
  button1.mousePressed(generate);
  console.log(gramArray);
}

function generate() {
  let current = inputText.substring(0, n);
  let result = current;
  for (let i = 0; i< inputText.length; i++) {
    let possibilities = gramArray[current];
    let next = random(possibilities);
    result += next;
    current = result.substring(result.length-n, result.length);
  }
  let newPara = createP(result).size(windowWidth, 300);
  newPara.style('color', 'white');
  newPara.style('background-color', 'black');
  newPara.center();
}
