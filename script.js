<script>
    function calculatePrice() {
        // Get user inputs
        const sqFt = document.getElementById('inputSqFt').value;
        const bedrooms = document.getElementById('inputBedrooms').value;

        if (sqFt > 0 && bedrooms > 0) {
            /* Simple Linear Regression Formula based on your sample data:
               Price ≈ (SquareFeet * 150) + (Bedrooms * 25000) 
               (This formula is an approximation for demonstration)
            */
            const basePrice = sqFt * 150;
            const roomBonus = bedrooms * 25000;
            const finalPrice = basePrice + roomBonus;

            // Display the result
            document.getElementById('priceValue').innerText = finalPrice.toLocaleString();
            document.getElementById('resultDisplay').style.display = 'block';
        } else {
            alert("Please enter valid details for Square Footage and Bedrooms.");
        }
    }
</script>
