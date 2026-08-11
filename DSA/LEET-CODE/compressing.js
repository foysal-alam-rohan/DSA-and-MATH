{
function compressStringLoop(str) {
    let compressed = "";
    let count = 1;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += count + str[i];
            count = 1;
        }
    }
    console.log(compressed);
}
compressStringLoop("sssssssssss");
}

{
    function compressStringLoop(chars) {
        let write = 0;
        let i = 0;
        while(i < chars.length) {
            let char = chars[i];
            let count = 1;
            while(i + 1 < chars.length && chars[i] === char[i + 1]) {
                count++;
                i++;
            }
            chars[write] = char;
            write++;
            if(count > 1) {
                for(let digit of count.toString()) {
                    chars[write] = digit;
                    write++;
                }
            }
        }
        return write;
    }
}
