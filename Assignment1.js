class Stack {
  array;
  upper;
  size;

  constructor(size) {
    this.array = [];
    this.upper = -1;
    this.size = size;
  }

  push(value) {
    if (this.upper == this.size - 1) {
      console.log("Stack overflow so can't be Inserted !!! ");
    } else {
      this.upper = this.upper + 1;
      this.array[this.upper] = value;
      console.log(`Added element to the stack is ${value}`);
      return this.upper;
    }
  }

  pop() {
    if (this.upper == -1) console.log("underfow!!");
    else {
      console.log("Stack pop process started ");
      console.log(`${this.array[this.upper]} is popped`);
      this.upper = this.upper - 1;
      return this.upper;
    }
  }
  peek() {
    if (this.upper == -1) {
      console.log("empty stack");
    } else {
      console.log("First value in the Stack is " + this.array[this.upper]);
    }
  }
}
