module.exports = Cheers;

var prompt = require('prompt');
prompt.start();

prompt.get('name', function (err, res) {
  cheersMessage(res.name);
});

function Cheers (name) {
  this.name = name;
}

function cheersMessage (name) {
  var nameToLowerCase = name.toLowerCase();
  var nameEntered = nameToLowerCase.split('');
  var nameArray = [];
  var cheersTxt;

  nameEntered.forEach(function (name) {
    var giveMe = "Give me ";
    var prefix;

    if(name === ' ') {

    } else if (name === 'a' || name === 'e' || name === 'i' || name === 'o' || name === 'u'){
        prefix = 'an ';
        nameArray.push(giveMe);
        nameArray.push(prefix);
        nameArray.push(name + '\n');
    } else {
        prefix = 'a  '
        nameArray.push(giveMe);
        nameArray.push(prefix);
        nameArray.push(name + '\n');
      }
      //cheersTxt = 'Give me ' + prefix + ' ' + nameEntered;
      cheersTxt = nameArray.join('');
  })
  console.log(cheersTxt);
  return(cheersTxt);
}

