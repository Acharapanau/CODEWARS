getAverage = (marks) =>
  Math.floor(marks.reduce((prev, curr) => prev + curr) / marks.length);
