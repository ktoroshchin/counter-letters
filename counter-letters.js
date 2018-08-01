var input = process.argv[2];
console.log(input);


function countLetters(input)
{
var letter = {};

for( var i = 0; i < input.length; i++  )
{
  if(input[i] === " ")
    {//epmty for purpose
    }
  else if (letter[input[i]] === undefined)
  {
    letter[input[i]] = 1;
  }
  else
  {
    letter[input[i]]+=1;
  }
}
return letter;
}
console.log(countLetters(input));

