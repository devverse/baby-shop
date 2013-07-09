var url = window.location.href;

if (url.indexOf("localhost") != -1) {
	var serviceURL = "http://localhost/dev/app/site2/public/mobile/";
} else{
	var serviceURL = "http://.com/public/mobile/";
}
