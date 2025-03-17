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
function pattern10() {
  let k = 1;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + k.toString() + " ";
      k++;
    }
    console.log(`${str}\n`);
  }
}
function pattern11() {
  for (let i = 0; i < n; i++) {
    let str = "";
    let k = 65;
    for (let j = 0; j <= i; j++) {
      str = str + String.fromCharCode(k) + " ";
      k++;
    }
    console.log(`${str}\n`);
  }
}
function pattern12() {
  for (let i = 0; i < n; i++) {
    let str = "";
    let k = 65;
    for (let j = 0; j <= n - i - 1; j++) {
      str = str + String.fromCharCode(k) + " ";
      k++;
    }
    console.log(`${str}\n`);
  }
}
function pattern13() {
  let k = 65;
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str = str + String.fromCharCode(k) + " ";
    }
    k++;
    console.log(`${str}\n`);
  }
}
function pattern14() {
  for (let i = 0; i < n; i++) {
    let str = "";
    let k = 65;
    let breakPoint = (2 * i + 1) / 2 - 1;
    for (let j = 0; j < n - i - 1; j++) {
      str = str + "  ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      str = str + String.fromCharCode(k) + " ";
      if (j < breakPoint) k++;
      else k--;
    }
    for (let j = 0; j < n - i - 1; j++) {
      str = str + "  ";
    }
    console.log(`${str}\n`);
  }
}
function pattern15() {
  let k = 69;
  for (let i = 0; i < n; i++) {
    let str = "";
    let l = k;
    for (let j = 0; j <= i; j++) {
      str = str + String.fromCharCode(l) + " ";
      l++;
    }
    k--;
    console.log(`${str}\n`);
  }
}

pattern1();
console.log("2-----------------------\n");
pattern2();
console.log("3-----------------------\n");
pattern3();
console.log("4-----------------------\n");
pattern4();
console.log("5-----------------------\n");
pattern5();
console.log("6-----------------------\n");
pattern6();
console.log("7-----------------------\n");
pattern7();
console.log("8-----------------------\n");
pattern8();
console.log("9-----------------------\n");
pattern9();
console.log("10-----------------------\n");
pattern10();
console.log("11-----------------------\n");
pattern11();
console.log("12-----------------------\n");
pattern12();
console.log("13-----------------------\n");
pattern13();
console.log("14-----------------------\n");
pattern14();
console.log("15-----------------------\n");
pattern15();
console.log("16-----------------------\n");
