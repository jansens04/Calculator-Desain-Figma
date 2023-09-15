const eksekusi = document.querySelector('.eksekusi');
const results = document.querySelector('.result');

const calculate = (number) => {
  eksekusi.innerHTML += number;
};

const result = () => {
  let x = eksekusi.innerHTML;
  results.innerHTML = eval(x);
};

const clearText = () => {
  if (eksekusi.innerHTML != '' || result.innerHTML == '') {
    alert('Enter Equal to Show Answer!!');
  } else if (eksekusi.innerHTML == '' || results.innerHTML == '') {
    alert('Please Enter Your Number!!');
  }
};
