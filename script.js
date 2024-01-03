function stringChop(str, size) {
  // your code here
	 if (!str) {
        return [];
    }

    const chunks = [];
    let index = 0;

    while (index < str.length) {
        chunks.push(str.substr(index, chunkLength));
        index += chunkLength;
    }

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
