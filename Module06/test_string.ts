let str: string[] = [ 'AB', 'AC', null, '', 'ST', 'r', 'V', '2'];
let str2: string[] = [ 'A', 'B', 'CDE', 'FG'];

function testString(input: string): string {

    if(input) {
        if(/[^A-Z]/.test(input)) {
            throw new Error('Something is wrong.');
        }
        return 'The string contains "' + input +'".';
    }
    else {
        // return null if the string input is nothing.
        return null;
    }
}

try{
    str.forEach(item => console.log(testString(item)));
} catch (error) {
    console.log('Something is wrong.');
}

try{
    str2.forEach(item => console.log(testString(item)));
} catch (error) {
    console.log('Something is wrong.');
}

//str.forEach(item => console.log(testString(item)));