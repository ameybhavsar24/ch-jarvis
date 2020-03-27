// convexHull.js
// this is where the hull gets calculated

function convexHull(points) {
	var n = points.length;

	if (n < 3) return;
	// check when calling function if n < 3


	// find the leftmost point
	let l = 0;
	for (i = 1; i < n; i++) {
		if (points[i].x < points[l].x) {
			l = i;
		}
	}


	// declare a array to store the hull points
	var hull = [];

	// auxiliary variables to calculate
	let p = l,
		q;

	do {

		hull.push(points[p]);
		q = (p + 1) % n;

		for (i = 0; i < n; i++) {
			if (orientation(points[p], points[i], points[q]) == 2) {
				q = i;
			}
		}

		p = q;

	} while (p != l);


	return hull;
	// now hull contains hull points
	// for (int i=0; i< (int) hull.size(); i++) {
	// 	cout << "(" << hull[i].x << ", " << hull[i].y << ")\n";
	// }


}


// --------------------------------
console.log("Loaded convexHull.js");
