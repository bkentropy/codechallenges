Array.prototype.concatAll = function() {
  var results = []
  this.forEach(function(subArray) {
    subArray.forEach(function (elem) {
      results.push(elem)
    })
  })
  return results;
}

function compareStrings (a, b) {
  if (a === b) return 0
  if (a > b)   return 1
  if (a < b)   return -1
}

myPonies = [ 
{ "id": 427, "name": "Firefly", "allergies": [ "gluten", "peanut" ], "email": "cindy@ponymail.com" }, 
{ "id": 23, "name": "Black Lightning", "allergies": [ "soy", "peanut" ], "email": "sandy@hotmail.com" }, 
{ "id": 458, "name": "Picadilly", "allergies": [ "corn", "gluten" ], "email": "cindy@ponymail.com" }, 
{ "id": 142, "name": "Brad", "allergies": [ "gluten", "chicken" ], "email": "sandy@hotmail.com" }, 
{ "id": 184, "name": "Cahoot", "allergies": [ "soy", "peanut", "gluten" ], "email": "jimmy@ponymail.com" } 
];
ownerEmail = "sandy@hotmail.com";

function getPonyAllergies (ponies, ownerEmail) {
  var ponyAllergies = ponies.map(function(val) {
    if ( val.email === ownerEmail) {
        return val.allergies
    }
  })

  var filterdAllergies = ponyAllergies.filter(function(val) {
    if (val !== undefined) {
      return val
    }
  })

  var uniqueConcat = filterdAllergies.concatAll().reduce(function(a,b) {
    if ( a.indexOf(b) === -1 ) {
      a.push(b);
    } 
    return a;
  }, []);

  return uniqueConcat.sort()
}

function funcGetPonyAllergies (ponies, ownerEmail) {
  return ponies.map(function(val) {
    if ( val.email === ownerEmail) {
        return val.allergies
    }
  }).filter(function(val) {
    if (val !== undefined) {
      return val
    }
  }).concatAll().reduce(function(a,b) {
    if ( a.indexOf(b) === -1 ) {
      a.push(b);
    } 
    return a;
  }, []).sort();

}

function jonathan (ponies, ownerEmail) {
  
  return Object.keys(ponies.reduce(function(list, pony){
    if(pony.email === ownerEmail){
      pony.allergies.forEach(function(allergy){
        list[allergy] = true;
      });  
    }
    return list;
  }, {})).sort(compareStrings);
}


function justin (ponies, ownerEmail) {
  // filter the list of ponies by owner email
  var filtered = ponies.filter(function(pony) {
    if(pony.email === ownerEmail) {
      return pony;
    }
  });
  // map the results of the filter to a results array
  var mapped = filtered.map(function(pony) {
    return pony.allergies;
  });
  // return result array
  return mapped.sort();
}


console.log(justin(myPonies, "sandy@hotmail.com"))
// console.log(funcGetPonyAllergies(myPonies, "sandy@hotmail.com"))
