export function transform(stringValue, total) {
  //console.log("INSIDE FUNCTION: ", total);
  if (
    stringValue === "KING" ||
    stringValue === "JACK" ||
    stringValue === "QUEEN"
  ) {
    return 10;
  } else if (stringValue === "ACE") {
    if (total < 11) return 11;
    else return 1;
  } else {
    return Number(stringValue);
  }
}
