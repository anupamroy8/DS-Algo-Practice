//TIME Complexity

// Big O is O(1) for below, as the three operations
//  *, +, and / are happening only once on value "n".

function fn(n) {
  return (n * (n + 1)) / 2;
}

// Big O is O(n) for below, as the for loop here will
// iterate n times depending upon the value of "n".

function fn(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// Big O is O(n+n) i.e O(2n) which equivalent to O(n),
// as there are two for loops depending upon the value of n.
// But we donot consider the constant values like 2, 10, 1000; So 2n or 100n  is same "n" only.

function fn(n) {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("Going down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down");
}

// Here O(n) operation inside of an O(n) operation.
// So this results to O (n*n) = O(n^2).

function fn(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// Space Complexity

// We can use big O notation to analyze space complexity also,
// how much additional memory do we need to allocate in order to run the code in our algorithm.
// So, also known as auxiliary space complexity to refer to space required by the algorithm.
