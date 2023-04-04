const fs = require("fs");
const data = fs.readFileSync("data.csv", "utf8");
const result = data
  .split("\n")
  .slice(1, 201)
  .map((row) => row.replace("\r", ""))
  .map((row) => row.split(","))
  .map((row) => [row[3], row[4]]);

fs.writeFileSync("clustering.json", JSON.stringify(result));
