const ErrorBuilder = {
  error : null,
  statusCode : null,
  contents : null,
  common: function(e) {
    this.error = e

    return this
  },
  code: function(code) {
    this.statusCode = code

    return this
  },
  contents: function(contents) {
    this.contents = contents

    return this
  },
  build: function() {
    return  {
      error: this.error,
      statusCode: this.statusCode,
      contents: this.contents,
    }
  },
}

const newError1 = ErrorBuilder.common('test Error1').code('test code1').build()
const newError2 = ErrorBuilder.common('test Error2').code('test code2').build()

console.log(newError2)
console.log(newError1)

const newError3 = ErrorBuilder
console.log(newError3)