const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const product = document.querySelectorAll(".product");

    for(var i=0;i<product.length;i++){
        let h2Element = product[i].getElementsByTagName('h2')[0];

        if(h2Element){
            let textValue = h2Element.textContent || h2Element.innerHTML

            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";
            }
        }
    }     
}