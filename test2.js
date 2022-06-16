const ErrorBuilder = () => {
  let error = null
  let statusCode = null
  let contents = null

  return {
    common: function(e) {
      this.error = e

      return this
    },
    code: function(code) {
      this.statusCode = code

      return this
    },
    contents: (contents) => {
      this.contents = contents

      return this
    },
    build: function() {
      return  {
        error: this.error,
        statusCode: this.statusCode,
        contents: this.contents,
      }
    }
  }
}

const newError1 = ErrorBuilder().common('test Error1').code('test code1').build()
const newError2 = ErrorBuilder().common('test Error2').code('test code2').build()

console.log(newError2)
console.log(newError1)
console.log(ErrorBuilder())