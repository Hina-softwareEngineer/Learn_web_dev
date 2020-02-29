var arr=[1,2,3];

arr.filter(function (val,ind,arr) {
	// body...
	return val>2;
});

//----------------FILTER-----------------//
function filter(array,callback){
	var newArr=[];
	for (var i=0;i<array.length;i++){
		if (callback(arr[i],i,array)){
			newArr.push(array[i]);
		}
	}
return newArr;
};

//-----------------------

function filterByValue(arr,key){
	return arr.filter(function(val){
		return val[key]!==undefined;
	})
}

function find(arr,searchValue){
	return arr.filter(function(val){
		return val===searchValue;
	})[0];
}

function findInObj(arr, key, searchValue){
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}

function removeVowels(str){
    var vowels = "aeiou"
    return str.toLowerCase().split("").filter(function(val){
        return vowels.indexOf(val) === -1;
    }).join('')
}

function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val *2;
    })
}

//---------------------SOME-------------------//

arr.some(function (value,index,array){
	return val<2;
})

//true

function some(array,callback){
	for (var i = 0 ; i <arr.length; i++) {
		if (callback(array[i],i,array)){
			return true;
		}	
	}
	return false;
}

//-----------------EVERY----------------//

arr.every(function(value,index,array){
	return value<0;
})
//true

function every(array,callback){
	for (var i=0;i<array.length;i++){
		if (callback(array[i],i,array)===false){
			return false;
		}
	}
	return true;
}

//---------------------------------------
function hasOddNumber(arr){
  return arr.some(function(val){
    return val % 2 !== 0;
  })
}

function hasAZero(num){
  return num.toString().split('').some(function(val){
    return val === '0';
  })
}

function hasOnlyOddNumbers(arr){
  return arr.every(function(val){
    return val % 2 !== 0;
  })
}

function hasNoDuplicates(arr){
  return arr.every(function(val){
    return arr.indexOf(val) === arr.lastIndexOf(val)
  })
}

function hasCertainKey(arr, key){
  return arr.every(function(val){
    return key in val
  })
}

function hasCertainValue(arr, key, searchValue){
  return arr.every(function(val){
    return val[key] === searchValue;
  })
}

//---------------------Reduce--------------//

function extractValue(arr, key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[]);
}

function vowelCount(str){
    var vowels = "aeiou";
    return str.toLowerCase().split('').reduce(function(acc,next){
        if(vowels.indexOf(next) !== -1){
            if(acc[next]){
                acc[next]++;
            } else {
                acc[next] = 1;
            }
        }
        return acc;
    }, {});
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
}

function partition(arr, callback){
    return arr.reduce(function(acc,next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}