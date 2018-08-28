function findType(data) {
	return typeof data;
}

function forEach(array, func) {
	for (let i = 0; i < array.length; i++) {
		let func = array[i];
	}
}

function map(array, func) {
	let xArray = [];
	forEach(array, function(el) {
		xArray.push(func(el));
	});
	return console.log(xArray);
}

function filter(array, func) {
	let xArray = [];
	forEach(array, function(el) {
		if (func(el)) {
			xArray.push(el);
		}
	});
	return console.log(xArray);
}

function getAdultAppleLovers(data) {
    let xArray = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].age > 18 && data[i].favoriteFruit === `apple`) {
            xArray.push(data[i].name);
        }
    }
    return console.log(xArray);
}

function keysObject(keys) {
    let xArray = [];
    for (let obj in keys) {
        if (keys.hasOwnProperty(obj)) {
            xArray.push(obj);
        }
    }
    return console.log(xArray)
}

function valuesObject(values) {
    let xArray = []
    for (let obj in values) {
        if (values.hasOwnProperty(obj)) {
            xArray.push(values[obj]);
        }
    }
    return console.log(xArray);
}

function showFormattedDate(date) {
    date = new Date();
    let shortMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return console.log(`It is ${date.getDate()} of ${shortMonths[date.getMonth()]}, ${date.getFullYear()}`);
}
