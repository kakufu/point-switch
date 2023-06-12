# point-switch

This module finds what coordinates correspond to points inside a polygon when it is mapped to another polygon.

## Installation

```
npm install point-switch
```

## Getting Started

For example, suppose we have the following polygonal correspondences.  
When a polygon is divided into a set of triangles, create data that indicates which coordinates correspond to the coordinates of each vertex.  
Then specify the point in the polygon where you want to find the corresponding coordinates.

```js
const  { PairPoint, PointSwitch, Triangle } = require('point-switch');

const pp1 = new PairPoint(0, 0, 2.5, 1);
const pp2 = new PairPoint(1, 0, 2.5, 2);
const pp3 = new PairPoint(1, 1, 1.5, 1);
const pp4 = new PairPoint(0, 1, 2, 0);

const t1 = new Triangle(pp1, pp2, pp3);
const t2 = new Triangle(pp3, pp4, pp1);

const ps = new PointSwitch([t1, t2]);

const point = ps.transform(0.8, 0.2);

console.log(point); // x: 2.3, y: 1.6
```

<img width="356" alt="スクリーンショット 2023-06-12 12 51 45" src="https://github.com/kakufu/point-switch/assets/136052296/d0373114-7ecd-422d-a0cb-fdb4deba226e">
