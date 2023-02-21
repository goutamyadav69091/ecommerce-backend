const mysql = require("mysql");
const { connection } = require("../config/mysql_config");

class OrdersModal {
    constructor() { }

    insertOrder(data) {
        return new Promise(async function (resolve, reject) {
            let insertQury = `INSERT INTO orders(full_name, email, user_id, grand_total, primary_contact, alternet_contact, shipping_address, shipping_city, shipping_pincode, billing_address, billing_city, billing_pincode, payment_method) VALUES('${(data.fullName)}','${data.email}','${data.userId}','${data.grandTotal}','${data.primaryContact}','${data.secondaryContact}','${data.shippingAddress}','${data.shippingCity}','${data.shippingPincode}','${data.billingAddress}','${data.billingCity}','${data.billingPincode}','${data.paymentMethod}')`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    };

    getAllOrders() {
        return new Promise(async function (resolve, reject) {
            let insertQury = `SELECT * FROM orders`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    };

    getMyOrders(userId) {
        return new Promise(async function (resolve, reject) {
            let insertQury = `SELECT * FROM orders WHERE user_id = ${userId}`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    };

    getOrderItems(orderId){
        return  new Promise(function(resolve,reject){
            let query=`SELECT order_item.price,order_item.quantity,products.title FROM order_item INNER JOIN products ON order_item.product_id=products.id WHERE order_item.order_id='${orderId}'`
            connection.query(query,function(err,result){
                if(err){
                    reject(err);
                }else{
                    console.log('*** result ***',result);
                    resolve(result);
                }
            })
        })
    }

    updateOrder(data) {
        return new Promise(async function (resolve, reject) {
            let insertQury = `UPDATE orders SET full_name = '${(data.fullName)}', email = '${data.email}', primary_contact = '${data.primaryContact}', alternet_contact = '${data.alternetContact}', shipping_address = '${data.shippingAddress}', shipping_city = '${data.shippingCity}', shipping_pincode = '${data.shippingPincode}', billing_address = '${data.billingAddress}', billing_city = '${data.billingCity}', billing_pincode = '${data.billingPincode}', payment_method = '${data.paymentMethod}' WHERE id = '${data.orderId}'`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(true)
                }
            })
        })
    };

    deleteOrder(orderId) {
        return new Promise(async function (resolve, reject) {
            let insertQury = ` DELETE FROM orders WHERE id = ${orderId}`
            connection.query(insertQury, function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    };

    insertOrderItem(orderItem) {
        return new Promise(function (resolve, reject) {
            let insertQry = `INSERT INTO order_item(order_id,product_id,price,quantity)VALUES('${orderItem.orderId}','${orderItem.productId}','${orderItem.productPrice}','${orderItem.productQuantity}')`
            connection.query(insertQry, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            });
        });
    };


};
module.exports = new OrdersModal();