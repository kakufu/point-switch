declare class Point {
  x: number;
  y: number;
  constructor(x: number, y: number);
}

declare class PairPoint {
  constructor(x1: number, y1: number, x2: number, y2: number);
}

declare class Triangle {
  constructor(pp1: PairPoint, pp2: PairPoint, pp3: PairPoint);
}

declare class PointSwitch {
  constructor(triangles: Triangle[]);
  transform(x1: number, y1: number): Point;
}

export = {Point, PairPoint, Triangle, PointSwitch}