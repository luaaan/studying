const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const items = [
        {
            title: "D",
            message: "ado"
        },
        {
            title: "E",
            message: "lefante"
        },
        {
            title: "M",
            message: "aria"
        },
        {
            title: "A",
            message: "lfinete"
        },
        {
            title: "I",
            message: "mprescindivel"
        },
        {
            title: "S",
            message: "onia"
        },

    ];

    const subtitle = "linguagem de modelagem pra criar página em HTML"
    res.render("pages/index", {
        qualitys: items,
        subtitle,
    });
})

app.get("/sobre", (req, res) => {
    res.render("pages/about");
})

app.listen(8080);
console.log('rodando...')