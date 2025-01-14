function solve (area, vol, dataAsJSON){
let figures = JSON.parse(dataAsJSON)

let result = [];
for (let figure of figures){
    let objArea = area.call(figure)
    let objVolume = vol.call(figure)
    let output = {
        area: objArea,
        volume: objVolume
    };
    result.push(output)
}
return result;
}

let example1 = `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`;

    
console.log(solve(area, vol, example1));
function area() {
    return Math.abs(this.x*this.y);
    };
function vol(){
    return Math.abs(this.x*this.y*this.z);
        };
