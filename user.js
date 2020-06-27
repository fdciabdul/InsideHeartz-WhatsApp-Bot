const fs = require('fs');
const moment = require('moment')

function checkUser(nomor) {
    return new Promise((resolve, reject) => {
        fs.readFile('./CoronaService/user.json', 'utf-8', function (err, data) {
            if (err) reject(err)
            const parsed = JSON.parse(data)
            var search = parsed.filter(x => x.user === nomor);
            if (search.some((val) => {
                    return Object.keys(val).includes('user');
                })) {
                resolve(true)
            } {
                resolve(false)
            }

        })
    });
}

function addUser(user) {
    return new Promise((resolve, reject) => {
        fs.readFile('./CoronaService/user.json', 'utf-8', function (err, data) {
            if (err) reject(err)
            const parsed = JSON.parse(data)
            parsed.push({
                user
            })
            checkUser(user).then(result => {
                if (result) {
                    resolve(false)
                } else {
                    fs.writeFile('./CoronaService/user.json', JSON.stringify(parsed), (err) => {
                        if (err) reject(err)
                        console.log(`[ ${moment().format('HH:mm:ss')} ] Add User ${user}`)
                        resolve(true)
                    })
                }
            })
        })

    });
}

function removeUser(nomor) {
    return new Promise((resolve, reject) => {
        fs.readFile('./CoronaService/user.json', 'utf-8', function (err, data) {
            if (err) reject(err)
            const parsed = JSON.parse(data)
            if (parsed.findIndex(x => x.user === nomor) !== undefined && parsed.findIndex(x => x.user === nomor) !== -1) {
                parsed.splice(parsed.findIndex(x => x.user === nomor), 1);
                fs.writeFile('./CoronaService/user.json', JSON.stringify(parsed), (err) => {
                    if (err) reject(err)
                    console.log(`[ ${moment().format('HH:mm:ss')} ] Delete User ${nomor}`)
                    resolve(true)
                })
            }

        })



    });
}

module.exports.checkUser = checkUser;
module.exports.addUser = addUser;
module.exports.removeUser = removeUser;