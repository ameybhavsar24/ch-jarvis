/*
Notes:
The Wrapping algorithm works in O(n^2) in worst case, which is BAD
Hence, a new algorithm "Graham Scan" was made
http://www.dcs.gla.ac.uk/~pat/52233/slides/Hull1x1.pdf
*/

#include <bits/stdc++.h>

using namespace std;

struct Point {
    int x;
    int y;
};

//0: p,q and r are colinear
//1: clockwise
//2: counterclockwise

int orientation(Point p, Point q, Point r) {
    int val = (r.x - q.x) * (q.y - p.y) - (r.y - q.y) * (q.x - p.x);
    if (val == 0) return 0;
    return (val > 0) ? 1 : 2;
}

void convexHull(Point points[], int n) {

    //atleast three points are needed
    if (n < 3) return;

    //initialize result
    vector < Point > hull;

    //find the leftmost point
    //we assume it to be point at index 0
    int l = 0;

    for (int i = 1; i < n; i++)
        if (points[i].x < points[l].x)
            l = i;

    int p = l, q;

    do {
        hull.push_back(points[p]);

        //store next point's index in a cyclic fashion
        q = (p + 1) % n;

        for (int i = 0; i < n; i++) {
            //if point i is counterclockwise for more points than point q update q

            if (orientation(points[p], points[i], points[q]) == 2)
                q = i;
        }

        p = q;

    } while (p != l);

    for (int i = 0; i < (int) hull.size(); i++) {
        cout << "(" << hull[i].x << ", " << hull[i].y << ")\n";
    }

}

int main() {

    Point points[]={{0,0},{0,1},{1,0},{1,1},{0,2},{1,2},{2,0},{2,1},{2,2},{3,0},{3,1},{3,2},{4,0},{4,1},{4,2},{5,0},{5,1}};

    int n = sizeof(points) / sizeof(points[0]);
    convexHull(points, n);

    return 0;
}
