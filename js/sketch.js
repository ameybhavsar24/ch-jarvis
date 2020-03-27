let w = 600, h = 400;

// range 0-255 (inclusive)
let bkg = 240;

var points = []
var hull = [];

function setup() {
	var container = createCanvas(w, h);
	container.parent("#app");
	background(bkg);
}


function draw() {

	stroke(255, 0, 0);
	strokeWeight(10);
	for (i = 0; i < points.length; i++) {
		point(points[i].x, points[i].y);
	}

	if (hull.length >= 3) {
		stroke(10);
		strokeWeight(1);
		for (i = 0; i < hull.length; i++) {
			// point(hull[i].x, hull[i].y);
			let p1 = hull[i % hull.length];
			let p2 = hull[(i + 1) % hull.length];

			line(p1.x, p1.y, p2.x, p2.y);

		}
	} else if (points.length == 2) {
		stroke(10);
		strokeWeight(1);
		line(points[0].x, points[0].y, points[1].x, points[1].y);
	}
}


function mousePressed() {
	if (mouseX < w || mouseY < h) {
		clear();
		background(bkg);
		points.push({
			x: mouseX,
			y: mouseY
		});
		if (points.length >= 3) {
			hull = convexHull(points);
		}
	} else {
		console.log("You clicked outside the canvas!");
	}

}


// -----------------------
console.log("Loaded sketch.js");
