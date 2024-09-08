function solve(number) {
  const textToSpeech = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  const quantityUnit = [
    "",
    "nghìn",
    "triệu",
    "tỷ",
    "nghìn",
    "triệu",
    "tỷ",
    "nghìn",
    "triệu",
    "tỷ",
    "nghìn",
    "triệu",
    "tỷ",
  ];
  const VND = "việt nam đồng";
  let result = "";
  let countQuantityUnit = 0;
  let hasScale = false;

  const readHundredUnit = (value, hasScale) => {
    const hundred = Math.floor(value / 100);
    const remained = value % 100;
    const tens = Math.floor(remained / 10);
    const units = remained % 10;
    let textHundredUnit = "";

    // console.log({ hundred, remained, tens, units });

    if (hundred > 0) {
      textHundredUnit += textToSpeech[hundred] + " trăm ";
    } else if (hundred === 0 && hasScale) {
      textHundredUnit += " không trăm ";
    }

    if (tens > 1) {
      textHundredUnit += textToSpeech[tens] + " mươi ";
    } else if (tens === 1) {
      textHundredUnit += "mười ";
    } else if (tens === 0 && units > 0 && hasScale) {
      textHundredUnit += " lẻ ";
    }

    if (tens > 1 && units === 1) {
      textHundredUnit += "mốt ";
    } else if (tens > 0 && units === 5) {
      textHundredUnit += "lăm ";
    } else if (tens > 1 && units === 4) {
      textHundredUnit += "tư ";
    } else if (units > 0) {
      textHundredUnit += textToSpeech[units];
    }

    return textHundredUnit;
  };

  while (number > 0) {
    const threeDigits = number % 1000;
    if (countQuantityUnit === 0) hasScale = true;
    else hasScale = false;
    result = `${readHundredUnit(threeDigits, hasScale)} ${
      quantityUnit[countQuantityUnit]
    } ${result}`;
    countQuantityUnit++;
    number = Math.floor(number / 1000);
  }

  return String(result + VND)
    .split(" ")
    .filter((str) => str !== "")
    .join(" ");
}

// console.log(solve(1)); // một việt nam đồng
// console.log(solve(10)); // mười việt nam đồng
// console.log(solve(11)); // mười một việt nam đồng
// console.log(solve(14)); // mười bốn
// console.log(solve(21)); // hai mươi mốt
// console.log(solve(23));
// console.log(solve(24)); // hai mươi tư
// console.log(solve(25));
// console.log(solve(15)); // mười lăm việt nam đồng
// console.log(solve(100)); // một trăm
// console.log(solve(111)); // một trăm mười một việt nam nghìn đồng
// console.log(solve(123)); // một trăm hai mươi ba việt nam nghìn đồng
// console.log(solve(345)); // một trăm hai mươi ba việt nam nghìn đồng
// console.log(solve(456)); // một trăm hai mươi ba việt nam nghìn đồng
// console.log(solve(999)); // một trăm hai mươi ba việt nam nghìn đồng

console.log(solve(1001));
console.log(solve(1011));
console.log(solve(1234)); // một nghìn hai trăm ba mươi tư
console.log(solve(12345)); // mười hai nghìn ba trăm bốn mươi lăm
console.log(solve(11111)); // mười một nghìn một trăm mười một
console.log(solve(100000));
console.log(solve(100045));
console.log(solve(1234567)); // một triệu hai trăm ba mươi tư nghìn năm trăm sáu mươi bảy
console.log(solve(123456789)); // một trăm hai mươi ba triệu bốn trăm năm mươi sáu nghìn bảy trăm tám mươi chín
console.log(solve(123234567890));
console.log(solve(123423456789009));
