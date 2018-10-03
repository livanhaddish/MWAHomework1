//================================================================================ 
// by promise
//===================================================================================
let removePromiss = function(){
	return new Promise(function(resolve, reject){
		resolve([4,1,5,7,2,3,1,4,6,5,2, 10].filter((v, i, a) => a.indexOf(v) === i))
		reject("false");
	})

};


removePromiss()
.then(data=> console.log(data))
.catch(function(err){console.log(err);});

//==================================================================================================================================
// Async and wait
//====================================================================================================================================

async function removeasync(){
	try{
		let results =await removeDuplicates();
		console.log(results);
	} catch(error){
		console.log(error);
	}
}
removeasync(); 
 function removeDuplicates(){

	return [4,1,5,7,2,3,1,4,6,5,2, 10].filter((v, i, a) => a.indexOf(v) === i);

 }

//===============================================================================================================
//observable
 //=====================================================================================================================
 let rePromiss = function(){
	
	return new Promise(function(resolve, reject){
		resolve([4,1,5,7,2,3,1,4,6,5,2, 10].filter((v, i, a) => a.indexOf(v) === i))
		reject("false");
	})

};


 from(rePromiss).subscribe(data=> console.log(data));
 //==========================================================================================================
 