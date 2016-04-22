module.exports = function(robot) {
    robot.hear(/millionare/i, function(res) {
        res.envelope.fb = {
            richMsg: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "button",
                        text: "Do you wanna be millionare? ",
                        buttons: [
                        {
                            type: "web_url",
                            url: "http://i.imgur.com/dPzC1o6.gif",
                            title: "Yes"
                        },
                        {
                            type: "web_url",
                            url: "http://i0.kym-cdn.com/photos/images/original/000/593/159/ee6.gif",
                            title: "No"
                        }
                        ]
                    }
                }
            }
        }
        res.send()
    })
}
