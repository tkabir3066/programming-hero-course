// 2. meter to centimeter

function meterToCentimeter(meter) {
  const centimeter = meter * 100;
  return centimeter;
}

const result1 = meterToCentimeter(5);
console.log(result1); //500

function centimeterToMeter(cm) {
  const meter = cm / 100;

  return meter;
}

const result2 = centimeterToMeter(5);
console.log(result2); //500
