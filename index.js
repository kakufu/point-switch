class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class PairPoint {
  constructor(x1, y1, x2, y2) {
    this.p1 = new Point(x1, y1);
    this.p2 = new Point(x2, y2);
  }
}

class Triangle {
  constructor(pp1, pp2, pp3) {
    this.pp1 = pp1;
    this.pp2 = pp2;
    this.pp3 = pp3;
  }
}

class PointSwitch {
  constructor(triangles) {
    this.triangles = triangles;
  }

  transform(x1, y1) {
    const p = new Point(x1, y1);
    const t = this.triangles.find((t) =>
      pointInTriangle(p, t.pp1.p1, t.pp2.p1, t.pp3.p1)
    );
    if (!t) {
      return null;
    }
    const [k1, k2] = decomposeVector(p, t.pp1.p1, t.pp2.p1, t.pp3.p1);
    const x2 =
      k1 * (t.pp1.p2.x - t.pp3.p2.x) +
      k2 * (t.pp2.p2.x - t.pp3.p2.x) +
      t.pp3.p2.x;
    const y2 =
      k1 * (t.pp1.p2.y - t.pp3.p2.y) +
      k2 * (t.pp2.p2.y - t.pp3.p2.y) +
      t.pp3.p2.y;
    return new Point(x2, y2);
  }
}

module.exports = { PairPoint, Point, PointSwitch, Triangle };

function sign(p1, p2, p3) {
  return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

function pointInTriangle(pt, v1, v2, v3) {
  const d1 = sign(pt, v1, v2);
  const d2 = sign(pt, v2, v3);
  const d3 = sign(pt, v3, v1);
  return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0));
}

function decomposeVector(p, p1, p2, p3) {
  const x = p.x - p3.x;
  const y = p.y - p3.y;
  const x1 = p1.x - p3.x;
  const y1 = p1.y - p3.y;
  const x2 = p2.x - p3.x;
  const y2 = p2.y - p3.y;
  const k1 = (x * y2 - x2 * y) / (y2 * x1 - y1 * x2);
  const k2 = (y * x1 - y1 * x) / (y2 * x1 - y1 * x2);
  return [k1, k2];
}
