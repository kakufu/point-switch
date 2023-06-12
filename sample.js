const { PairPoint, PointSwitch, Triangle } = require('./');

const pp1 = new PairPoint(0, 0, 2.5, 1);
const pp2 = new PairPoint(1, 0, 2.5, 2);
const pp3 = new PairPoint(1, 1, 1.5, 1);
const pp4 = new PairPoint(0, 1, 2, 0);

const t1 = new Triangle(pp1, pp2, pp3);
const t2 = new Triangle(pp3, pp4, pp1);

const ps = new PointSwitch([t1, t2]);

const point = ps.transform(0.8, 0.2);

console.log(point); // x: 2.3, y: 1.6
