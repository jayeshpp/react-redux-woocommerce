import axios from 'axios';
const BASE_URL = 'http://localhost:81/wordpress/wordpress';
export {
    getProducts
};

function getProducts() {
    const url = `${BASE_URL}/wp-json/wp/v2/product`;
    let productList = axios.get(url).then(response => response.data);
    return productList;
}