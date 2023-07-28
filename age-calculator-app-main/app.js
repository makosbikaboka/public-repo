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

  const date = new Date();
  
  // actual date
  let y2 = date.getFullYear();
  let m2 = date.getMonth() + 1;
  let d2 = date.getDate();

  // day of the months
  const month = (y, m) => new Date(y, m, 0).getDate();

  // calc birth day
  let d = d2 - d1;
  if (d < 1) {
    m2--;
    d = month(y2, m2) - (-d);
  }

  let m = m2 - m1;
  if (m < 1) {
    y2--;
    m = 12 - (-m);
  }

  let y = y2 - y1;

  // error-test segment
  let messageD = document.getElementById("error_message_d");
  let messageM = document.getElementById("error_message_m");
  let messageY = document.getElementById("error_message_y");
  let month2 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  messageD.innerHTML = "";
  messageM.innerHTML = "";
  messageY.innerHTML = "";

  if(d1 > month2[m1]){
    messageD.innerHTML = "Must be a valid day";
    dayInput.classList.add('error');
    collection[0].style.color = 'hsl(0, 100%, 67%)';
  }else{
    collection[0].style.color = 'hsl(0, 0%, 8%)';
  }
  
  if(m1 > 12){
    messageM.innerHTML = "Must be a valid month";
    monthInput.classList.add('error');
    collection[1].style.color = 'hsl(0, 100%, 67%)';
  }else{
    collection[1].style.color = 'hsl(0, 0%, 8%)';
  }

  if(y1 > y2){
    messageY.innerHTML = "Must be in the past";
    yearInput.classList.add('error');
    collection[2].style.color = 'hsl(0, 100%, 67%)';
  }else{
    collection[2].style.color = 'hsl(0, 0%, 8%)';
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

  //write the result
  document.getElementById('calc-years').innerHTML = y;
  document.getElementById('calc-months').innerHTML = m;
  document.getElementById('calc-days').innerHTML = d;
}
