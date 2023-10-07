const search = () => {
    const searchBar = document.getElementById('search-item');
    const products = document.querySelectorAll('.product');
    const searchWords = searchBar.value;
    products.forEach((product) => {
        const productName = product.children[1].children[0].textContent.toLowerCase();
        if(productName.includes(searchWords.toLowerCase())){
            product.style.display = 'flex block';
        } else{
            product.style.display = 'none';
        }
    })  
}