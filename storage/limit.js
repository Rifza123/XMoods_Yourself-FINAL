const fs = require('fs')
let _LIMIT = JSON.parse(fs.readFileSync('./storage/user/limit.json'))

const checkDataLimit = (sender) => {
            let status = false
            Object.keys(_LIMIT).forEach((i) => {
                if (_LIMIT[i].id === sender) {
                    status = true
                }
            })
            return status
        }
const addLimitData = (sender) => {
            const obj = { id: sender, limit: 15 }
            _LIMIT.push(obj)
            fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_LIMIT))
        }
const kurangLimit = (sender, amount) => {
            let position = false
            Object.keys(_LIMIT).forEach((i) => {
                if (_LIMIT[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _LIMIT[position].limit -= amount
                fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_LIMIT))
            }
        }  
const tambahLimit = (sender, amount) => {
            let position = false
            Object.keys(_LIMIT).forEach((i) => {
                if (_LIMIT[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _LIMIT[position].limit += amount
                fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_LIMIT))
            }
        }          
const getLimit = (sender) => {
            let position = false
            Object.keys(_LIMIT).forEach((i) => {
                if (_LIMIT[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _LIMIT[position].limit
            }
        }        
module.exports = { checkDataLimit, addLimitData, kurangLimit, tambahLimit, getLimit }     