function isValidTitle(title) {
  return typeof title === "string" && title.trim().length > 0;
}

function isValidPriority(p) {
  return ["low", "normal", "high"].includes(p);
}

module.exports = { isValidTitle, isValidPriority };
