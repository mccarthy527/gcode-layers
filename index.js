"use strict"

module.exports = lines2layers

function lines2layers(lines) 
{
	var layers = [];
	
	var currz = 0;
	for(var i=0; i<lines.lines.length; i++)
	{
		var z0,z1;
		if(lines.lines[i] != undefined && lines.extruded[i] > 0) //check to see if this is an extrusion move
		{
			z0 = ((lines.lines[i])[0])[2] //z coordinate of startpoint of line segment
			z1 = ((lines.lines[i])[1])[2] // z coordinate of endpoint
			if(z0 != z1){new Error('extruded line segment not in the plane! assumption violated!')}
			

			//see if we are starting a new layer
			if(z0 != currz)
			{
				layers.push({startheight:currz, endheight:z0, lineindicies:[i]}); //create a new layer
				currz = z0;
			}
			else
			{
				(layers[layers.length-1].lineindicies).push(i);	//add the line index into the current layer
			}
		}
	}
	return layers
}