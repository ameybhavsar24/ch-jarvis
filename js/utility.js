//0: p,q and r are colinear
//1: clockwise
//2: counterclockwise

function orientation(p, q, r) {
	let val = (r.x - q.x) * (q.y - p.y) - (r.y - q.y) * (q.x - p.x);
	if (val == 0) return 0;
	return (val > 0) ? 1 : 2;
}


// ---------------------
console.log("Loaded utility.js");
