# Product search engine app

- This is a straightforward web application designed to filter products based on partial matches. 
- It has been developed using HTML, CSS, and JavaScript. 
- The core functionality involves iterating through the names of the products. If a product name contains the input string, it is displayed to the user; otherwise, its display property is set to 'none.' 
- The development process followed the instructions provided in a tutorial available at this YouTube link: https://www.youtube.com/watch?v=ZFUOC-y4i0s&list=PL9bD98LkBR7P16BndaNtP4x6Wf5Ib85Hm&index=4&ab_channel=Tech2etc

## Things learnt:
### DOM operations & JS methods:
- elementName.getElementsByTagName()
```
const pname = storeitems.getElementsByTagName("h2");

let match = product[i].getElementsByTagName('h2')[0];
```
- string.toUpperCase()
- string.toLowerCase()
```
const searchbox = document.getElementById("search-item").value.toUpperCase();
```
### 2 ways to check if string B contains string A:
- B.indexOf(A) return -1 if A not within string B, otherwise return the starting index
```
B.indexOf(A) return -1 if A not within string B, otherwise return the starting index
```
- B.includes(A) return true if found, false if not found
```
B.includes(A) return true if found, false if not found
```
### attach a JS event handler to a HTML element directly in the HTML code:
```
<form>
    <i class="fas fa-search"></i>
    <input onkeyup="search()" type="text" name="" id="search-item" placeholder="Search products">
</form>
```
 
