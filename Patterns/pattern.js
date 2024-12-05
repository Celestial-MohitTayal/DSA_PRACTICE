const n = 5;

function pattern1() {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + "* ";
    }
    console.log(`${str}\n`);
  }
}
function pattern2() {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + (j + 1).toString() + " ";
    }
    console.log(`${str}\n`);
  }
}
function pattern3() {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + (i + 1).toString() + " ";
    }
    console.log(`${str}\n`);
  }
}
function pattern4() {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - i; j++) {
      str = str + (j + 1).toString() + " ";
    }
    console.log(`${str}\n`);
  }
}
function pattern5() {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n - i - 1; j++) {
      str = str + "  ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      str = str + "* ";
    }
    for (let j = 0; j < n - i - 1; j++) {
      str = str + "  ";
    }
    console.log(`${str}\n`);
  }
}
function pattern6() {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str = str + "  ";
    }
    for (let j = 0; j < 2 * n - (2 * i + 1); j++) {
      str = str + "* ";
    }
    for (let j = 0; j < i; j++) {
      str = str + "  ";
    }
    console.log(`${str}\n`);
  }
}
function pattern7() {
  for (let i = 0; i < 2 * n - 1; i++) {
    let stars = i + 1;
    if (i >= n) stars = 2 * n - (i + 1);
    str = "";
    for (let j = 0; j < stars; j++) {
      str += "* ";
    }
    console.log(`${str}\n`);
  }
}
function pattern8() {
  for (let i = 0; i < n; i++) {
    let str = "";
    let start;
    if (i == 0 || i % 2 == 0) start = 1;
    else start = 0;
    for (let j = 0; j <= i; j++) {
      str = str + start.toString() + " ";
      start = 1 - start;
    }
    console.log(`${str}\n`);
  }
}
function pattern9() {
  for (let i = 1; i < n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + j.toString() + " ";
    }
    for (let j = 1; j <= 2 * (n - 1) - 2 * i; j++) {
      str = str + "  ";
    }
    for (let j = i; j >= 1; j--) {
      str = str + j.toString() + " ";
    }
    console.log(`${str}\n`);
  }
}
pattern1();
console.log("-----------------------\n");
pattern2();
console.log("-----------------------\n");
pattern3();
console.log("-----------------------\n");
pattern4();
console.log("-----------------------\n");
pattern5();
console.log("-----------------------\n");
pattern6();
console.log("-----------------------\n");
pattern7();
console.log("-----------------------\n");
pattern8();
console.log("-----------------------\n");
pattern9();
console.log("-----------------------\n");
