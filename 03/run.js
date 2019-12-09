const fs = require("fs");
const path = require("path");

// Process text file and return array
const parseInput = data => {
  const [wire1, wire2] = data.split("\n");
  return [wire1.split(","), wire2.split(",")];
};

// Map wire coordinates
const mapWire = wire => {
  const coords = [[0, 0]];
  for (let i = 0; i < wire.length; i++)
    coords.push(coordPath(wire[i], coords[coords.length - 1]));
  return coords;
};

// Find ranges of coordinates for each wire
const coordPath = (input, start) => {
  let [x, y] = start;
  const dir = input[0];
  const length = parseInt(input.substr(1));
  if (dir === "U") return [x, y + length];
  if (dir === "D") return [x, y - length];
  if (dir === "L") return [x - length, y];
  if (dir === "R") return [x + length, y];
};

// Return full set of coordinates occupied by wire
const fullCoordSet = wireCoords => {
  const coords = [];
  for (let i = 1; i < wireCoords.length; i++) {
    let [startingX, startingY] = wireCoords[i - 1];
    let [endingX, endingY] = wireCoords[i];
    if (startingX !== endingX) {
      if (startingX < endingX) {
        for (let n = startingX; n < endingX; n++) coords.push([n, endingY]);
      } else {
        for (let n = startingX; n > endingX; n--) coords.push([n, endingY]);
      }
    }
    if (startingY !== endingY) {
      if (startingY < endingY) {
        for (let n = startingY; n < endingY; n++) coords.push([endingX, n]);
      } else {
        for (let n = startingY; n > endingY; n--) coords.push([endingX, n]);
      }
    }
  }
  return coords;
};

// Find Intersections of Wires
const findIntersections = (wire1, wire2) => {
  const intersections = [];
  for (let coord1 of wire1) {
    for (let coord2 of wire2) {
      if (coord1[0] == coord2[0] && coord1[1] == coord2[1])
        intersections.push([coord1[0], coord1[1]]);
    }
  }
  return intersections;
};

// Calculate distance from point to center
const calcDistance = coord => Math.abs(coord[0]) + Math.abs(coord[1]);

// Calculate minimum distance of all intersections
const minDistance = intersections => {
  let minDist = Infinity;
  for (coord of intersections) {
    const dist = calcDistance(coord);
    if (dist != 0 && dist < minDist) minDist = dist;
  }
  return minDist;
};

fs.readFile(path.join(__dirname, "input.txt"), "utf8", (error, data) => {
  if (error) throw error;

  const [wire1, wire2] = parseInput(data);
  const wire1Coords = fullCoordSet(mapWire(wire1));
  const wire2Coords = fullCoordSet(mapWire(wire2));
  const intersections = findIntersections(wire1Coords, wire2Coords);

  console.log("Part 1: ", minDistance(intersections));
});
