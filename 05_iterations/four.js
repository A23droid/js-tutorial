const myObject = {
    js: 'javascript',
    cpp: 'C++',
    py: 'python',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} stands for "${myObject[key]}"`);
    
}

const myArray = [1, 2, 3, 4]

for (const key in myArray) { // key = index of array
    // console.log(`myArray[${key}] = ${myArray[key]}`);
    
}

const map = new Map()
map.set('IN', "India")
map.set('JP', "Japan")
map.set('FR', "France")

for (const key in map) {
    // console.log(key); // maps are NOT iterable
}