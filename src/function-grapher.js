

export default function getData(){
    var data = [];
    for (var i=0;i<100;i++){
        data.push({ "x" : i, "y": Math.cos(i)});
    }
    return data;
}

