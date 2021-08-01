const http = require("http");
const fs = require("fs");

let files = fs.readdirSync("./testFolder");

let result = "";

for (var i = 0; i < files.length; i++) {
  var path = "./testFolder/" + files[i];
  var temp = fs.statSync(path);
  if (temp.isFile()) {
    result += `<img src='https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Docs-icon.png' height='25px' width='30px'><span>${files[i]}</span><br>`;
  } else if (temp.isDirectory()) {
    result += `<img src='https://upload.wikimedia.org/wikipedia/commons/5/59/OneDrive_Folder_Icon.svg' height='30px' width='28px'><span>${files[i]}</span><br>`;
  }
}

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<html><body><h1>${result}</h1></body></html>`);
    res.end();
  } else {
    res.end("invalid url!!.");
  }
});

server.listen(5000, () => {
  console.log("sercer running");
});
