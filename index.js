// Your code here
class Polygon {
  constructor (sides){
    this.sides = sides;
  }

   get countSides(){
    return this.sides.length;
   }

   get perimeter(){
    return this.sides.reduce((acc, side) => acc + side, 0)
   }
}