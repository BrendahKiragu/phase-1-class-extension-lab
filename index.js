// Your code here
class Polygon {
  constructor (sides){
    this.sides = sides;
    this.count = sides.length
  }

   get countSides(){
    return this.sides.length;
   }

   get perimeter(){
    return this.sides.reduce((acc, side) => acc + side, 0)
   }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.count !== 3) return false;
    const [a, b, c] = this.sides;
    return (a + b > c) && (b + c > a) && (a + c > b);
  }
}

class Square extends Polygon {
  get isValid (){
    if (this.count !== 4) return false
    const [a,b,c,d] = this.sides;
    return (a===b) && (b===c) && (c===d)
  }
  get area (){
   return this.sides[0] ** 2
  }
}
