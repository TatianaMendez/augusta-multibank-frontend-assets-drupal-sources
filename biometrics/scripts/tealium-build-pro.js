const fs = require("fs");
const path = "dist/biometrics/browser/index.html";

fs.readFile(path, "utf8", (err, data) => {
  if (err) {
    return console.log(err);
  }

  const scriptUtag =
    '<script src="https://tags.tiqcdn.com/utag/adl/multibank/prod/utag.js" type="text/javascript" async></script>';
  const scriptUtagSync =
    '<script src="https://tags.tiqcdn.com/utag/adl/multibank/prod/utag.sync.js" type="text/javascript"></script>';
  const result = data.replace(
    "<head>",
    `<head>
    ${scriptUtag}
    ${scriptUtagSync}`
  );

  fs.writeFile(path, result, "utf8", (err) => {
    if (err) return console.log(err);
    console.log("Script agregado al index.html");
  });
});
