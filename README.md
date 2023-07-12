# js
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "google";
    }
    if (i % 5 === 0) {
      output += "facebook";
    }
    if (output === "") {
      output = i;
    }
    console.log(output);
  }
};

fizzBuzz(100);
