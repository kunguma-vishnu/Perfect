function evaluate_trial(){
  var input =  document.getElementById('perfect_trial').value, sum=0;
  for (var i = 1; i < input/2+1; i++) {
    sum += (input%i==0)?i:0;
  }
  //console.log(output);
  var result = document.getElementById('trial_result');
  var output =  (sum == input)? "Perfect":(sum > input)?"Abundant":"Deficient"
  result.innerText = output;
}
