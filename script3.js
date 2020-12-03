let name = ["prathamesh", "vedant", "malhar"];
let num = [1234, 5678, 9012];
console.log(num[name.indexOf("prathamesh")]);

let details = {
    "prathamesh": 1234,
    "vedant": [5678,9531,8596],
    "malhar": 9012
}
console.log(details["vedant"][2]);

let details1 = {
    "a": 1234,
    "b": [5678,9531,8596],
    "c": 9012
}

details["d"] = 4960;
details["e"] = 2962;
details["f"] = 4162;
details["g"] = 4862;
details["h"] = 4562;
console.log(details1);