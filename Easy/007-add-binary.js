/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  // Convert the binary strings to decimal using parseInt function with radix 2
  const num1 = BigInt("0b" + a);
  const num2 = BigInt("0b" + b);

  // Calculate the sum
  const sum = num1 + num2;

  // Convert the sum back to binary using toString function with radix 2
  return sum.toString(2);
}

// Testing

console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"
console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  )
); // Output: "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
