const statusOfWorkers = {
    1: { 1: "Will come on time",
        2: "Will be late"
}
    0: "Won't work"
}

module.exports.statusOfWorkers= statusOfWorkers

module.exports.workers = [{
    name: "Enkhbaatar",
    age: 20,
    status: 1,
    state: statusOfWorkers[1][2],
    phone_number: "080-8122-0794",
    image: "https://chat-bot-demo-nodejs.herokuapp.com/images/workers/eba.jpg"
},
{
    name: "Bat",
    age: 25,
    status: 0,
    state: statusOfWorkers[0],
    phone_number: "080-0000-0794",
    image: "https://chat-bot-demo-nodejs.herokuapp.com/images/workers/Bat.jpeg"
},
{
    name: "BatBold",
    age: 28,
    status: 1,
    state: statusOfWorkers[1][1],
    phone_number: "0120-3400-0544",
    image: "https://chat-bot-demo-nodejs.herokuapp.com/images/workers/BatBold.jpeg"
},
{
    name: "Dorj",
    age: 26,
    status: 1,
    state: statusOfWorkers[1][2],
    phone_number: "0120-3400-0544",
    image: "https://chat-bot-demo-nodejs.herokuapp.com/images/workers/Dorj.jpeg"
}]