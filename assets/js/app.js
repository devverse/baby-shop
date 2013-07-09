$('#dashboardpg').live('pageshow', function(event) {
	getMainProducts();
});

$('#dashboardpg2').live('pageshow', function(event) {
    getMainProducts2();
});

$('#dashboardpg3').live('pageshow', function(event) {
    getMainProducts3();
});

$('#dashboardpg4').live('pageshow', function(event) {
    getMainProducts4();
});

$('#dashboardpg5').live('pageshow', function(event) {
    getMainProducts5();
});

$('#dashboardpg6').live('pageshow', function(event) {
    getMainProducts6();
});


$('.addReleaseAlert').live('click',function(event){
    var element = $(event.target);
    var product_id = element.attr('data-product-id');
    addReleaseAlert(product_id);
});

function makePost(endPoint,formData){

 var results = "";

 $.ajax({
        type: "POST",
        url: serviceURL+endPoint,
        async: false,
        cache: false,
        data: formData,
        success: function(data) {
			results = jQuery.parseJSON(data);
		} // end sucess
    });

  return results;
}

function getMainProducts(){
   var products = makePost("getMainProducts",'');
    $( "#mainProducts" ).tmpl( products ).appendTo("#productList");
    $(".button").button();
}

function getMainProducts2(){
   var products = makePost("getCribs",'');
    $( "#mainProducts" ).tmpl( products ).appendTo("#productList");
    $(".button").button();
}

function getMainProducts3(){
   var products = makePost("getChangingTables",'');
    $( "#mainProducts" ).tmpl( products ).appendTo("#productList");
    $(".button").button();
}

function getMainProducts4(){
   var products = makePost("getStorage",'');
    $( "#mainProducts" ).tmpl( products ).appendTo("#productList");
    $(".button").button();
}

function getMainProducts5(){
   var products = makePost("getPlaytime",'');
    $( "#mainProducts" ).tmpl( products ).appendTo("#productList");
    $(".button").button();
}

function getMainProducts6(){
   var products = makePost("getBigKids",'');
    $( "#mainProducts" ).tmpl( products ).appendTo("#productList");
    $(".button").button();
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
 }