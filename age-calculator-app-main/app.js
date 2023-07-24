function age() {
  // Input date
  const yearInput = document.getElementById('year');
  yearInput.classList.remove('error');
  let y1 = yearInput.value;

  const monthInput = document.getElementById('month');
  monthInput.classList.remove('error');
  let m1 = monthInput.value;

  const dayInput = document.getElementById('day');
  dayInput.classList.remove('error');
  let d1 = dayInput.value;

  // Change .input-block-title font color
  const collection = document.getElementsByClassName("input-block-title");

  // actual date
  let date = new Date ();
  let y2 = date.getFullYear();
  let m2 = 1 + date.getMonth();
  let d2 = date.getDate();

  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // calculate the birth-date
  if (d1 > d2){
      d2 = d2 + month[m2 - 1];
      m2 = m2 -1;
  }

  if (m1 > m2){
      m2 = m2 + 12;
      y2 = y2 - 1;
  }

  // error-test segment
  let messageD = document.getElementById("error_message_d");
  let messageM = document.getElementById("error_message_m");
  let messageY = document.getElementById("error_message_y");
  messageD.innerHTML = "";
  messageM.innerHTML = "";
  messageY.innerHTML = "";

  if(d1 > month[m1-1]){
    messageD.innerHTML = "Must be a valid day";
    dayInput.classList.add('error');
    collection[0].style.color = 'hsl(0, 100%, 67%)';
  }
  
  if(m1 > m2){
    messageM.innerHTML = "Must be a valid month";
    monthInput.classList.add('error');
    collection[1].style.color = 'hsl(0, 100%, 67%)';
  }

  if(y1 > y2){
    messageY.innerHTML = "Must be in the past";
    yearInput.classList.add('error');
    collection[2].style.color = 'hsl(0, 100%, 67%)';
  }

  //if null
  if(d1 === "") {
    messageD.innerHTML = "The field is required";
    collection[0].style.color = 'hsl(0, 100%, 67%)';
  }

  if(m1 === ""){
    messageM.innerHTML = "The field is required";
    collection[1].style.color = 'hsl(0, 100%, 67%)';
  }

  if(y1 === ""){
    messageY.innerHTML = "The field is required";
    collection[2].style.color = 'hsl(0, 100%, 67%)';
  }

  if (messageD.innerHTML !== "" || messageM.innerHTML !== "" || messageY.innerHTML !== "") {
    return false;
  } else if (d1 === null || m1 === null || y1 === null) {
    return false;
  }

  // write the result
  let d = d2 - d1;
  let m = m2 - m1;
  let y = y2 - y1;

  document.getElementById('calc-years').innerHTML = y;
  document.getElementById('calc-months').innerHTML = m;
  document.getElementById('calc-days').innerHTML = d;
}