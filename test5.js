class ErrorBuilder {
  static common(e) {
    this.error = e

    return this
  }
}

const test1 = ErrorBuilder.common('test1')
const test2 = ErrorBuilder.common('test2')
const test3 = ErrorBuilder.common('test3')

console.log(test1)
console.log(test2)
console.log(test3)