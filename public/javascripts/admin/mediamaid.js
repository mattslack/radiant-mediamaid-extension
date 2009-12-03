function insertAtCaret(filename, contenttype) { 
	
	// find the active div  
    var myDivArray = new Array();
    myDivArray = $('pages').getElementsByClassName('page');
    var i=0;
    while (i < myDivArray.length){ 
	    if($(myDivArray[i].id).getStyle('display') == 'none'){
		 // do nothing, non-active tab
		} else {
		   var divId = '';
		   divId =  myDivArray[i].id;
		   var myTextAreaArray = new Array();
		   myTextAreaArray = $(divId).getElementsByClassName('textarea');
		   var areaId = '';
		   areaId = myTextAreaArray[0].id;

		}
		i++;
    }

	//     var text = '';
	//     if((contenttype == "image/gif") || (contenttype == "image/jpeg") || (contenttype == "image/png")){
	// 	text = '<div class="mediamaid"><img src="' + filename + '" /></div>';
	// } else if (contenttype == "audio/x-wav"){
	// 	text = '<div class="mediamaid"><a href="' + filename + '" />'+ filename +'</a></div>';
	// } else {
	// 	text = filename;
	// }








	var text = '';
	var contentTypeArray = new Array();
	contentTypeArray = contenttype.split("/");
	
    if(contentTypeArray[0]== 'image'){
		text = '<div class="mediamaid"><img src="' + filename + '" /></div>';
	} else if ((contentTypeArray[0] == 'application') && (contentTypeArray[1] == 'swf')) {
	 	text = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" WIDTH="550" HEIGHT="400" id="myMovieName"><PARAM NAME=movie VALUE="'+filename+'"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#FFFFFF><EMBED href="'+filename+'" quality=high bgcolor=#FFFFFF WIDTH="550" HEIGHT="400" NAME="myMovieName" ALIGN="" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT>';
	
	} else if (contentTypeArray[0] == "audio"){
		text = '<div class="mediamaid"><a href="' + filename + '" />'+ filename +'</a></div>';
	} else {
		text = '<div class="mediamaid"><a href="' + filename + '" />'+ filename +'</a></div>';
	}
	
	var txtarea = document.getElementById(areaId);
	
	var scrollPos = txtarea.scrollTop; 
	var strPos = 0; 
	var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? "ff" : (document.selection ? "ie" : false ) ); 
	if (br == "ie") { 
		txtarea.focus(); 
		var range = document.selection.createRange(); 
		range.moveStart ('character', -txtarea.value.length); 
		strPos = range.text.length; 
	} 
	else if (br == "ff") strPos = txtarea.selectionStart; 
	
	var front = (txtarea.value).substring(0,strPos); 
	var back = (txtarea.value).substring(strPos,txtarea.value.length); 
	txtarea.value=front+text+back; 
	strPos = strPos + text.length; 
	if (br == "ie") { 
		txtarea.focus(); 
		var range = document.selection.createRange(); 
		range.moveStart ('character', -txtarea.value.length); 
		range.moveStart ('character', strPos); 
		range.moveEnd ('character', 0); 
		range.select(); 
	} 
	else if (br == "ff") { 
		txtarea.selectionStart = strPos; 
		txtarea.selectionEnd = strPos; txtarea.focus(); 
	} 
	txtarea.scrollTop = scrollPos; 
} 