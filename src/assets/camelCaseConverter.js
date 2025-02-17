export function camelCaseToNormal(str) {
  let newStr = "";
  const upperCaseLetters = "QWERTYUIOPASDGHJKLZXCVBNM";
  for (let index = 0; index < str.length; index++) {
    const chr = str[index];
    if (upperCaseLetters.includes(chr)) {
      newStr = newStr.concat(" ");
      newStr = newStr.concat(chr.toLowerCase());
    } else if (index === 0) {
      newStr = newStr.concat(chr.toUpperCase());
    } else {
      newStr = newStr.concat(chr);
    }
  }
  return newStr;
}
