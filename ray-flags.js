const flagRegex = /-[a-z]/i;

let oargv = Object.assign([], process.argv); //original arguments vector
oargv.shift();
oargv.shift();
oargv.push(null);

let iargv = oargv; // Interpreted arguments vector
iargv.forEach((key, index, arr) => {
  if (flagRegex.test(key))
    if (flagRegex.test(arr[index+1]))
      iargv.splice(index+1, 0, true);
});

iargv = iargv.map(arg => {
  if (arg === null) return true;
  else return arg;
});

const argv = {
  flags : {},
  keys : iargv.filter(arg=> flagRegex.test(arg)),
  values : iargv.filter(arg=> !flagRegex.test(arg)),
}

argv.keys = argv.keys.map(key => key.slice(1));

argv.keys.forEach((key, index) => {
  argv.flags[key] = argv.values[index];
});

module.exports = argv.flags;

