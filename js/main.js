//key: 4982afc24aee077c63bd164999e69856
//ID: 755aba0b

var	url = "https://api.edamam.com/search?q=chocolate&app_id=755aba0b&app_key=4982afc24aee077c63bd164999e69856";

function makeString(term){
	return "https://api.edamam.com/search?q=" + term + "&app_id=755aba0b&app_key=4982afc24aee077c63bd164999e69856";
}



$('#recipeSearchBtn').click(function(){
	$.getJSON(makeString( $('#recipeInput').val() ), function(result){
		//console.log(result);
		
		for(var i = 0; i < result.hits.length; i++){
			var img = result.hits[i].recipe.image;
			$('#recipes').append('<img src="' + img + '" /> br />');

		}

		
	});
});
