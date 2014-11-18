"use strict"
var ll = require('../index.js')
var fs = require("fs")

//not sure how to do this properly???
var gc = require('gcode-parser')//var gc = require("C:/Users/Brian/Documents/GitHub/gcode-parser/index.js")
var sl = require("C:/Users/Brian/Documents/GitHub/gcode-lines/index.js")

var data = fs.readFileSync("C:/Users/Brian/Documents/GitHub/gcode-lines/test/testbox.gcode")
var fileContent = data.toString()
var states = gc(fileContent)
var lines = sl(states)
var layers = ll(lines)

console.log(layers)