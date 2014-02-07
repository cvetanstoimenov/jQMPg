
document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {}


function onLoad(){

      $(document).ready(function(){
    
     
      var mainArrayData =[];
      mainArrayData.push({'Firstname': 'Zvonimir', 'Lastname': 'Novoselec', 'ClanId': '5269F9D9-E45F-E211-9EE7-000C29919411', 'Years': '34', 'TaskStatus': 'open'});
      mainArrayData.push({'Firstname': 'Mišela', 'Lastname': 'Mustafic', 'ClanId': 'E668F9D9-E45F-E211-9EE7-000C29919411', 'Years': '63', 'TaskStatus': 'completed'});
      mainArrayData.push({'Firstname': 'test', 'test1': 'Novoselec', 'ClanId': 'C0F6E344-319C-E211-88FC-000C29919411', 'Years': '22', 'TaskStatus': 'cancelled'});

    	

	$("#btn_ok").click(function(e){

    var idVotingPlace = 7141;
	var username = $("#inputEmail").val();

	if(username != "test")
	{
             e.preventDefault();
	}
	else{
             if(mainArrayData.length != 0)
      	     {
      	        DisplayResult(mainArrayData, "svi");
                return;
      	     }
      	     else {
      			
             }
	     
	}



	});   // end of the function after login button click
      

     

	$('#second .btn-tab').click(function () {
	    var chosenTab = $(this).attr('name');
	    DisplayResult(mainArrayData, chosenTab);
	});


	$("#second").on("click", "#result li a", function (e) {
	    var currentTaskStatusOfSelectedClan = $(this).attr('name');
	    SetDataOnModal(currentTaskStatusOfSelectedClan);
	    $.mobile.changePage('#dialog', 'pop', true, true);
	}); 
	    
	

	//$('#dialog a').unbind().on("click", function () {   // start of "click" event handler on selected Clan
	//    var chosenTaskStatus = $(this).attr('name');
	//    ChangeTaskActivityStatusOfThisUser(mainArrayData, IdOfSelectedClan, chosenTaskStatus);      //this function change data directly in UI
	//});





      function DisplayResult(array, sviPreostaliEvidentirani )
	{
      $("#result").html("");
      if(sviPreostaliEvidentirani == "svi")
      {
      $.each(array, function(index, element){
          $("#result").append('<li data-theme="c" class="ui-btn ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c "><div class="ui-btn-inner ui-li" aria-hidden="true"><div class="ui-btn-text"><a href="#dialog" class="ui-link-inherit li-my-style" data-rel="dialog" name="' + $.trim(element.TaskStatus) + '" ><div class="img-my-style ' + $.trim(element.TaskStatus) + '" id="' + $.trim(element.ClanId) + '">' + element.Firstname + ' ' + element.Lastname + ' (' + element.Years + ')</a></div></li>');
      });
      }
      else if (sviPreostaliEvidentirani == "preostali") {
          $.each(array, function (index, element) {
              if (element.TaskStatus == "open")
              {
                  $("#result").append('<li data-theme="c" class="ui-btn ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c "><div class="ui-btn-inner ui-li" aria-hidden="true"><div class="ui-btn-text"><a href="#dialog" class="ui-link-inherit li-my-style" data-rel="dialog" ><div class="img-my-style ' + $.trim(element.TaskStatus) + '" id="' + $.trim(element.ClanId) + '">' + element.Firstname + ' ' + element.Lastname + ' (' + element.Years + ')</a></div></li>');
              }
          });
      }
      else if (sviPreostaliEvidentirani == "evidentirani") {
          $.each(array, function (index, element) {
              if (element.TaskStatus == "completed" || element.TaskStatus == "cancelled")
              {
                  $("#result").append('<li data-theme="c" class="ui-btn ui-li ui-li-has-count ui-li-has-icon ui-btn-up-c "><div class="ui-btn-inner ui-li" aria-hidden="true"><div class="ui-btn-text"><a href="#dialog" class="ui-link-inherit li-my-style" data-rel="dialog" ><div class="img-my-style ' + $.trim(element.TaskStatus) + '" id="' + $.trim(element.ClanId) + '">' + element.Firstname + ' ' + element.Lastname + ' (' + element.Years + ')</a></div></li>');
              }
          });
      }
      $('#result').listview('refresh');
      }
      

   


      function SetDataOnModal(currentTaskStatusOfSelectedClan) {
          if (currentTaskStatusOfSelectedClan == "open") {
              $("#dialog .ui-content a").attr("name", "cancelled"); $("#secondImage").attr("src", "block.png"); $("#secondTextTd").html("cancelled");
              $("#dialog .ui-content a:first-child").attr("name", "completed"); $("#firstImage").attr("src", "tick.png"); $("#firstTextTd").html("completed");
          }
          else if (currentTaskStatusOfSelectedClan == "completed") {
              $("#dialog .ui-content a").attr("name", "open"); $("#firstImage").attr("src", "add.png"); $("#firstTextTd").html("open");
              $("#dialog .ui-content a:first-child").attr("name", "cancelled"); $("#secondImage").attr("src", "block.png"); $("#secondTextTd").html("cancelled");
          }
          else if (currentTaskStatusOfSelectedClan == "cancelled") {
              $("#dialog .ui-content a").attr("name", "open"); $("#firstImage").attr("src", "add.png"); $("#firstTextTd").html("open");
              $("#dialog .ui-content a:first-child").attr("name", "completed"); $("#secondImage").attr("src", "tick.png"); $("#secondTextTd").html("completed");
          }
      }





      //function ChangeTaskActivityStatusOfThisUser(array, IdOfSelectedClan, chosenTaskStatus) {
      //    $('[data-role=dialog]').dialog("close");
      //    var chosenTabButton = $("#hiddenField").val();
      //    $.each(array, function (index, element) {
      //        if (element.ClanId == IdOfSelectedClan) {
      //            element.TaskStatus = chosenTaskStatus;
      //        }
      //        else {
      //            $.each(element.Family, function (index, elementChild) {
      //                if (elementChild.ClanId == IdOfSelectedClan) {
      //                    elementChild.TaskStatus = chosenTaskStatus;
      //                }
      //            });
      //        }     //end of else
      //    });   //end of first $.each
      //    DisplayResult(array, chosenTabButton);
      //}

});   //end of ready function



}