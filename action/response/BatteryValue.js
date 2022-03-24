"use strict";
const fs = require("fs")
const { color } = require('../other/color')
const batteryAsyncOBB = async (rifza, json) => {
     try { 
     //Thanks To Arifi Razzaq ✨        
           if (parseInt(json[2][0][1].value) <= 1) {
                var cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '1') {
                cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '2') {
                cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '3') {
                cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '4') {
                cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '5') {
                cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '6') {
                cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '7') {
                cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '8') {
                cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '9') {
                cc = `${parseInt(json[2][0][1].value)}% [▒▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '10') {
                cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '11') {
                cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '12') {
                cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '13') {
                cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '14') {
                cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '15') {
                cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '16') {
                cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '17') {
                cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '18') {
                cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '19') {
                cc = `${parseInt(json[2][0][1].value)}% [█▒▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '20') {
                cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '21') {
                cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '22') {
                cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '23') {
                cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '24') {
                cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '25') {
                cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '26') {
                cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '27') {
                cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '28') {
                cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '29') {
                cc = `${parseInt(json[2][0][1].value)}% [██▒▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '30') {
                cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '31') {
                cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '32') {
                cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '33') {
                cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '34') {
                cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '35') {
                cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '36') {
                cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '37') {
                cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '38') {
                cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '39') {
                cc = `${parseInt(json[2][0][1].value)}% [███▒▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '40') {
                cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '41') {
                cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '42') {
                cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '43') {
                cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '44') {
                cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '45') {
                cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '46') {
                cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '46') {
                cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '48') {
                cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '49') {
                cc = `${parseInt(json[2][0][1].value)}% [████▒▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '50') {
                cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '51') {
                cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '52') {
                cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '53') {
                cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '54') {
                cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '55') {
                cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '56') {
                cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '57') {
                cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '58') {
                cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '59') {
                cc = `${parseInt(json[2][0][1].value)}% [█████▒▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '60') {
                cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '61') {
                cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '62') {
                cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '63') {
                cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '64') {
                cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '65') {
                cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '66') {
                cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '67') {
                cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '68') {
                cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '69') {
                cc = `${parseInt(json[2][0][1].value)}% [██████▒▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '70') {
                cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '71') {
                cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '72') {
                cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '73') {
                cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '74') {
                cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '75') {
                cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '76') {
                cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '77') {
                cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '78') {
                cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '79') {
                cc = `${parseInt(json[2][0][1].value)}% [███████▒▒▒]`
              } else if (parseInt(json[2][0][1].value) == '80') {
                cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
              } else if (parseInt(json[2][0][1].value) == '81') {
                cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
              } else if (parseInt(json[2][0][1].value) == '82') {
                cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
              } else if (parseInt(json[2][0][1].value) == '83') {
                cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
              } else if (parseInt(json[2][0][1].value) == '84') {
                cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
              } else if (parseInt(json[2][0][1].value) == '85') {
                cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
              } else if (parseInt(json[2][0][1].value) == '85') {
                cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
              } else if (parseInt(json[2][0][1].value) == '87') {
                cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
              } else if (parseInt(json[2][0][1].value) == '88') {
                cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
              } else if (parseInt(json[2][0][1].value) == '89') {
                cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
              } else if (parseInt(json[2][0][1].value) == '90') {
                cc = `${parseInt(json[2][0][1].value)}% [████████▒▒]`
              } else if (parseInt(json[2][0][1].value) == '91') {
                cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
              } else if (parseInt(json[2][0][1].value) == '92') {
                cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
              } else if (parseInt(json[2][0][1].value) == '93') {
                cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
              } else if (parseInt(json[2][0][1].value) == '94') {
                cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
              } else if (parseInt(json[2][0][1].value) == '95') {
                cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
              } else if (parseInt(json[2][0][1].value) == '96') {
                cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
              } else if (parseInt(json[2][0][1].value) == '97') {
                cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
              } else if (parseInt(json[2][0][1].value) == '98') {
                cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
              } else if (parseInt(json[2][0][1].value) == '99') {
                cc = `${parseInt(json[2][0][1].value)}% [█████████▒]`
              } else if (parseInt(json[2][0][1].value) == '100') {
                cc = `${parseInt(json[2][0][1].value)}% [██████████]`
              }
          if (parseInt(json[2][0][1].value) == '50'){
          if (json[2][0][1].live == 'true') rifza.charging = true;
          if (json[2][0][1].live == 'false') rifza.charging = false;
          }
          console.log({ cc, json });
          } catch (e) {
            return console.log('Err : ', color(e, 'red'))
          }
       }   

module.exports = { batteryAsyncOBB }  