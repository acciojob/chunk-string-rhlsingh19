function chunkString(inputString, chunkLength) {
    if (!inputString) {
        return [];
    }

    const chunks = [];
    for (let i = 0; i < inputString.length; i += chunkLength) {
        const chunk = inputString.slice(i, i + chunkLength);
        chunks.push(chunk);
    }

    return chunks;
}

// Examples
console.log(chunkString("Hello, world!", 5)); // Output: ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2));          // Output: ["12", "34", "5"]
console.log(chunkString("abc", 5));            // Output: ["abc"]
console.log(chunkString(null, 3));             // Output: []


// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
