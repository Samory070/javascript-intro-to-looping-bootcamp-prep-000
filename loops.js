var array = []

function forLoop(array) {
  for (let i = 1; i < 25; i++) {
    return (
      array.push(
        "I am ${i} strange loop${i === 0 ? \'\' : \'s\'}."
      )
    )
  }
}
