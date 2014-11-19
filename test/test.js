"use strict"
var ll = require('../index.js')
var fs = require("fs")

var gc = require('gcode-parser')
var sl = require('gcode-lines')

var data = fs.readFileSync("layertest.gcode");//"C:/Users/Brian/Documents/GitHub/gcode-lines/test/testbox.gcode")
var fileContent = data.toString()
var states = gc(fileContent)
var lines = sl(states)
var layers = ll(lines)

console.log(layers)