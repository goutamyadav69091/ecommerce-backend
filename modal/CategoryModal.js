const mysql = require("mysql");
const { connection } = require("../config/mysql_config");

class CategoryModal {
    constructor() { }

    insertCategory(data) {
        return new Promise(async function (resolve, reject) {
            let insertQury = `INSERT INTO category(title, description, perentId) VALUES(${connection.escape(data.title)},'${data.description}','${data.perentId}')`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            })
        })
    };
    
    getAllCategory() {
        return new Promise(async function (resolve, reject) {
            let insertQury = `SELECT * FROM category`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    };

    getSingleCategory(catId) {
        return new Promise(async function (resolve, reject) {
            let insertQury = `SELECT * FROM category WHERE id = ${catId}`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    };
    
    updateCategory(data) {
        return new Promise(async function (resolve, reject) {
            let insertQury = `UPDATE category SET title = ${connection.escape(data.title)}, description = '${data.description}', perentId = '${data.perentId}' WHERE id = '${data.catId}'`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            })
        })
    };

    deleteCategory(categoryId) {
        return new Promise(async function (resolve, reject) {
            let insertQury = `DELETE FROM category WHERE id = ${categoryId}`
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
module.exports = new CategoryModal();