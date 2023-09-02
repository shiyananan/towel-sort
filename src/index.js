
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  
  if (!matrix) {
    return result;
  } else {
    for (let i = 0; i < matrix.length; i++) {
      let line = matrix[i];
  
      if (i % 2 === 0) {
        for (let j = 0; j < line.length; j++) {
          result.push(line[j]);
        }
      } else {
        for (let j = 1; j < line.length + 1; j++) {
          result.push(line[line.length - j]);
        }
      }
    };
  };

  return result;
}
