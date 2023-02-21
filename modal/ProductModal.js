const mysql = require("mysql");
const { connection } = require("../config/mysql_config");

class ProductModal {
    constructor() { }

    createProduct(data) {
        return new Promise(async function (resolve, reject) {
            let insertQury = `INSERT INTO products(title, description, category_id, price, image) VALUES(${connection.escape(data.title)},'${data.description}','${data.categoryId}','${data.price}','${data.image}')`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            })
        })
    };

    getAllProduct() {
        return new Promise(async function (resolve, reject) {
            let insertQury = `SELECT * FROM products`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    };

    getcartItems(ids) {
        return new Promise(async function (resolve, reject) {
            // console.log('ids',ids);
            let insertQury = `SELECT * FROM products WHERE id IN (${ids})`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    };
    
    updateProduct(data) {
        return new Promise(async function (resolve, reject) {
            let insertQury = `UPDATE products SET title = ${connection.escape(data.title)}, description = '${data.description}', category_id = '${data.categoryId}', price = '${data.price}', image = '${data.image}' WHERE id = '${data.productId}'`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            })
        })
    };
    
    deleteProduct(productId) {
        return new Promise(async function (resolve, reject) {
            let insertQury = ` DELETE FROM products WHERE id = ${productId}`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    };
    


};
module.exports = new ProductModal();