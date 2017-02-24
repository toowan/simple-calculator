// Runs code when the DOM has loaded
$(document).ready(function() {

    var input; 
    var inputString = '';
    var results = 0; 


    // Clear display when AC is clicked
    $('#ac').click(function() {
        $('#display').val('0');
        results = 0;
        inputString = '';
    });


    // When undo button is clicked
    $('#undo').click(function() {
        input = $('#display').val();
        if (input.length === 1) {
            $('#display').val('0');
        } 
        // Else, delete last item from display and set it as the new inputString
        else {
            $('#display').val(input.substring(0, input.length-1));   
            inputString = inputString.substring(0, input.length-1);
        }
    });


    // When digit, decimal, operators are clicked, display value on screen
    $('.digit, #decimal, .operator').click(function() {
        inputString = inputString + $(this).val(); 
        input = $('#display').val(inputString); 
    });

    // Evaluate the equation when equal is clicked and save results inside inputString
    $('#equal').click(function() { 
        results = eval(inputString).toString(); 
        $('#display').val(results);  
        inputString = results;  
    });

});


