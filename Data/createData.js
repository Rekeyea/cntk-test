const fs = require("fs");
const sample = 1000;

const mapCircles = val => {
    const mapping = {
        0: 1,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 1,
        7: 0,
        8: 2,
        9: 1
    };
    let circles = 0;
    while (val != 0) {
        const mod = val % 10;
        circles += mapping[mod];
        val = (val - mod) / 10;
    }
    return circles;
};

const objArray = new Array(sample);
for (let i = 0; i < sample; i++) {
    const a = Math.round(Math.random() * 1000);
    const b = Math.round(Math.random() * 1000);
    const c = mapCircles(a) + mapCircles(b);
    objArray[i] = {a,b,c};
}

const strArray = objArray.map(v => `|Features ${v.a} ${v.b} |Expected ${v.c}`);
fs.writeFile("training-set.txt",strArray.join("\r\n"),err=>{
    if(err){
        console.error(err);
        return;
    }
    console.log("File Created!");
});