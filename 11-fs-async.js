const { read } = require("fs");
const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;

  readFile("./content/second.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(res);
      return;
    }
    const second = res;

    writeFile(
      "./content/result-sync.txt",
      `Here is the result : ${first}, ${second}`,
      {
        flag: "a", // doesn't overwrite the file content
      },
      (err, res) => {
        if (err) {
          console.log(res);
          return;
        }
        //console.log(res);
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
