const fs = require('fs')
let _Rpgnya = JSON.parse(fs.readFileSync('./storage/user/data_rpg.json'))

//Tqto Ridho Gay
const addBerlian = (sender, amount) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _Rpgnya[position].diamond += amount
                fs.writeFileSync('./storage/user/data_rpg.json', JSON.stringify(_Rpgnya))
            }
        }
        
const sellBerlian = (sender, amount) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _Rpgnya[position].diamond -= amount
                fs.writeFileSync('./storage/user/data_rpg.json', JSON.stringify(_Rpgnya))
            }
        }
              
const getBerlian = (sender) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _Rpgnya[position].diamond
            }
        }
const addBesi = (sender, amount) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _Rpgnya[position].besi += amount
                fs.writeFileSync('./storage/user/data_rpg.json', JSON.stringify(_Rpgnya))
            }
        }
        
const sellBesi = (sender, amount) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _Rpgnya[position].besi -= amount
                fs.writeFileSync('./storage/user/data_rpg.json', JSON.stringify(_Rpgnya))
            }
        }
                
const getBesi = (sender) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _Rpgnya[position].besi
            }
        }
            
const addEmas = (sender, amount) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _Rpgnya[position].emas += amount
                fs.writeFileSync('./storage/user/data_rpg.json', JSON.stringify(_Rpgnya))
            }
        }
        
const sellEmas = (sender, amount) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _Rpgnya[position].emas -= amount
                fs.writeFileSync('./storage/user/data_rpg.json', JSON.stringify(_Rpgnya))
            }
        }        
        
const getEmas = (sender) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _Rpgnya[position].emas
            }
        }

const addIkan = (sender, amount) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _Rpgnya[position].ikan += amount
                fs.writeFileSync('./storage/user/data_rpg.json', JSON.stringify(_Rpgnya))
            }
        }
        
const sellIkan = (sender, amount) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _Rpgnya[position].ikan -= amount
                fs.writeFileSync('./storage/user/data_rpg.json', JSON.stringify(_Rpgnya))
            }
        }                
const getIkan = (sender) => {
            let position = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _Rpgnya[position].ikan
            }
        }
            
const addInventori = (sender) => {
        const obj = {id: sender, emas: 0, diamond: 0, besi: 0, ikan: 0}
         _Rpgnya.push(obj)
        fs.writeFileSync('./storage/user/data_rpg.json', JSON.stringify(_Rpgnya))
}
const checkPetualangUser = (sender) => {
            let status = false
            Object.keys(_Rpgnya).forEach((i) => {
                if (_Rpgnya[i].id === sender) {
                    status = true
                }
            })
            return status
        }
module.exports = { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addBerlian, sellBerlian, getBerlian, addEmas, sellEmas, getEmas , addIkan, sellIkan, getIkan }        