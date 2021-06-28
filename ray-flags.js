let oargv = process.argv;
oargv.shift();
oargv.shift();

const argv = {
  flags : {},
  keys : oargv.filter(arg=> /-[a-z]/i.test(arg)),
  values : oargv.filter(arg=> !/-[a-z]/i.test(arg)),
}

argv.keys = argv.keys.map(key => key.slice(1));

argv.keys.forEach((key, index) => {
  argv.flags[key] = argv.values[index];
});

module.exports = argv.flags;

