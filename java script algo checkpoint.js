
//----------------checkpoint----------------------------
function analyzeSentence() {
  const sent = prompt("Enter a sentence ending with a point: ");
  let lengthc = 0;
  let vowelC = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < sent.length; i++) {
      const elem = sent[i];
      lengthc++;
        
      if (vowels.includes(elem)) {
          vowelC++;
      }
      if (elem === '.') {
          break;
      }

  }
  console.log(lengthc);
  console.log( vowelC);
}
//---------------checkpoint2 solution 1-------------------------
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let position = i;
    if(position > 0 && arr[position - 1] > currentElement) {
      arr[position] = arr[position - 1];
      position--;
    }
    arr[position] = currentElement;
  }
  return arr;
}
//--------------------solution2---------------------------
function sortedarray(arr) {
  for (let i = 0; i < arr.length; i++) {
    const do = arr.slice(0, i + 1).sort((a, b) => a - b);
    for (let j = 0; j <= i; j++) {
      arr[j] = do[j];
    }
  }
  return arr;
}

const array1 = [1, 3, 5, 1, 4, 120, 50];
const res = sortedarray(array1);
console.log(res);








