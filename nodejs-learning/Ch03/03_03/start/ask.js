var questions = [
    "What is your name?",
    "What is your fav hobby?",
    "What is your preferred programming language?"
]

var answers = []

function ask(i) {
    process.stdout.write(`\n${questions[i]} > `)
}

process.stdin.on("data", function (data) {
    answers.push("data")
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.stdout.write("\n")
        process.exit()
    }
})

process.on("exit", function () {
    process.stdout.write("Good, you have answered all the questions! Nicely done!")
})

ask(0)