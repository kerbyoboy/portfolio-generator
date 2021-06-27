const fs = require('fs');
// console.log("Hello Node");
// console.log(document);
// var message = "Hello Node!";

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

  const profileDataArgs = process.argv.slice(2, process.argv.length);
//   const name = profileDataArgs[0];
//   const github = profileDataArgs[1];
  const [name, github] = profileDataArgs;

// console.log(profileDataArgs);
//  Notice the lack of parentheses around the 'profileDataArr' parameter?
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('================');

//     // Is the same as this
//     // profileDataArr.forEach((profileItem) => {
//     //     console.log(profileItem)
//     // });
//     // And the same as this to avoid using the function keyword
//     profileDataArr.forEach(profileItem => console.log(profileItem));

// };

// printProfileData(profileDataArgs);
 const generatePage = (name, github) => {
     return`
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Demo</title>
</head>
<body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
</body>
</html>
`;
 };
 
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!')
});