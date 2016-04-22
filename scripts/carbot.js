module.exports = (robot) => {
    robot.hear(/getting chilly/i, (res) => {
        res.envelope.fb = {
            richMsg: {
                attachment: {
                    type: "template",
                    payload: {
                        template_type: "button",
                        text: "Do you wanna build a snowman?",
                        buttons: [
                        {
                            type: "web_url",
                            url: "http://www.dailymotion.com/video/x1fa7w8_frozen-do-you-wanna-build-the-snowman-1080p-official-hd-music-video_music",
                            title: "Yes"
                        },
                        {
                            type: "web_url",
                            title: "No",
                            url: "http://wallpaper.ultradownloads.com.br/275633_Papel-de-Parede-Meme-Okay-Face_1600x1200.jpg"
                        }
                        ]
                    }
                }
            }
        }
        res.send()
    })
}
