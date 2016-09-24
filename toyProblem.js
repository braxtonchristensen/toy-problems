//returns factorial of n
var factorial = function(num) {
  var total = 1;
  for(var i = 1; i <= num; i++) {
    total = total * i;
  }
  return total;
};
factorial(5);




// test if the string contains only symbols
var theStr = '++d+===+c++==a'; //returns false
var the2Str='++===+=+++'; // returns true


var simpleSymbols = function (str) {
	for(var i = 0; i < str.length; i++) {
		if (str[i] != '+' && str[i] != '=' && !(str[i] >= 'a' && str[i - 1] == '+' && str[i + 1] == '+')) {
			return false;
		}
	}
	return true;
};
simpleSymbols(the2Str);



//finds characters that dont repeat
var str1 = 'ABA';
var str2 = 'AABCABD';

var firstNonRepChar = function(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) === i && string.indexOf(c, i + 1) === -1) {
      return c;
    }
  }
  return 'everything repeats';
};

firstNonRepChar(str2);


//checks if string conatins a and b
var str1 = 'lane barrowed'; //true
var str2 = 'a   b'; //true
var str3 = 'adfdsfe'; //false

function ABCheck(str)
{
    return str.match(/a...b/g || /b...a/g) !== null;
}
ABCheck(str1);

//finds if num n is in the fibinachi sequence
var fibSeq = function(num) {
	var arr = [0, 1];
	for (var i = 2; i <= 100; i++) {
		arr.push(arr[i-1] + arr[i-2]);
	}
	console.log(arr);
	if(arr.indexOf(num) !== -1) return 'yes';
	return "no";
};

fibSeq(55); //returns yes

//returns fiz for % 3 and buzz for % 5 and fizzbuzz for both
var fizzbuzz = function() {
	var str="",x,y,a;
	for (i = 1;i <= 100; i++) {
	    x = i % 3 === 0;
	    y = i % 5 === 0;
	    if(x) {
	        str+="fizz";
	    }
	    if (y) {
	        str+="buzz";
	    }
	    if (!(x||y)) {
	        str += i;
	    }
	    str+="\n";
	}
	console.log(str);
};
fizzbuzz();

//returns nth number in fibinachi
var fibRec = function(n) {
	if (n < 2) {
		return n;
	}
	else {
		return fibRec(n - 1) + fibRec(n - 2);
	}
};
fibRec(5);

var fibSeq2 = function(num) {
	var arr = [0, 1];
	for (var i = 2; i <= num + 1; i++) {
		arr.push(arr[i-1] + arr[i-2]);
	}
	console.log(arr);
	return arr[num];
};

fibSeq2(20);

//makes an array out of argumetns without using push
function dan() {
    var args = Array.prototype.slice.call(arguments);
    return args;
}

dan(1, 2, 3, 4);

//gets primes up to max and checks if num is prime
function getPrimes(max, num) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    for(i = 0; i < primes.length; i++){
    	if (primes[i] === num) {
    		console.log(num+' is prime');
    	}
    }
    return primes;
}
getPrimes(100, 61);


//creates an object with a summry of whats in array
var animals = [
    {
        name: 'Dog',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Canidae',
        species: 'Canis lupus'
    },
    {
        name: 'Cat',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        species: 'Felis catus'
    },
    {
        name: 'Hippopotamus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Artiodactyla',
        family: 'Hippopotamidae',
        species: 'Hippopotamus amphibius'
    },
    {
        name: 'Playtpus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Monotremata',
        family: 'Ornithorhynchidae',
        species: 'Ornithorhynchus anatinus'
    },
    {
        name: 'Lizard',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Reptilia',
        order: 'Squamata',
        family: 'Agamidae',
        species: 'Pogona vitticeps'
    },
    {
        name: 'Blackbird',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Aves',
        order: 'Passeriformes',
        family: 'Turdidae',
        species: 'Turdus merula'
    }
];

function animalGrouping(animals) {
  var groups = {};
  for (var i = 0; i < animals.length; i++) {
    for ( var key in animals[i]) {
      if (key === 'kingdom' || key === 'phylum' || key === 'class') {
      var group = groups[key] = groups[key] || {};
      var currentValue = animals[i][key];
      if (!group[currentValue]) {
        group[currentValue] = 1;

      }
      else {
        group[currentValue]++;
      }
      }
    }
  }
  var trick =  JSON.stringify(groups);
  return trick.slice(0, trick.length -1);

}
animalGrouping(animals);
