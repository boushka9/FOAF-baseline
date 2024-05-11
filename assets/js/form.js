(function($) {
    $(document).ready(function() {
        function updateInstructions() {
            var category = $("#category").val();
            var instructionsElement = $("#instructions");
            var instructionsText = "";

            switch (category) {
                case "Supper_Club":
                    instructionsText = "Please specify which meal options you would like for the week (up to FIVE MEALS) and for how many people (2-3 or 4-5). If you would like to include any 'Add-Ons' or dessert options please include those in your message.";
                    break;
                case "Breakfast":
                    instructionsText = "Please specify if you would like 'Breakfast In A Box', or the 'Buffet' options and how many people to prepare for. Please specify your desired drink options and if you would like any 'Add-Ons'.";
                    break;
                case "Desserts":
                    instructionsText = "Please specify which dessert options you would like and how many.";
                    break;
                case "In_Flight":
                    instructionsText = "Please specify which menu options you would like (Breakfast, Shareables, Afternoon Tea) and how many people will be on flight.";
                    break;
                case "Charcuterie_Boards":
                    instructionsText = "Please specify which size Charcuterie board you would like and what image. ";
                    break;
                case "Seasonal":
                    instructionsText = "Please specify desired quantity of seasonal cookies.";
                    break;
                
                default:
                    instructionsText = "Select a category to see submission instructions.";
            }

            instructionsElement.text(instructionsText);
        }

        // Attach event listener to category dropdown
        $("#category").on("change", updateInstructions);

        // Initialize instructions based on default category selection
        updateInstructions();
    });
})(jQuery);