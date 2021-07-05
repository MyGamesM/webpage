var count = 0;
function fillGrid(gridsize, grid) {
    let parent = document.getElementById(grid);
    if (count == 1) { // if grid exists
        count = 0;
        for (let i = 0; i < gridsize; i++) { //if grid exitsts clear grid
            let element = document.getElementById(`btn${i}`);
            element.remove();
        }
        for (let i = 0; i < gridsize; i++) { //then fill grid
            let element = document.createElement("button");
            element.setAttribute("id", `btn${i}`);
            element.setAttribute("class", "btn");
            element.setAttribute("onclick", `game.money.sellItem(game.items.bread, ${i})`);
            element.innerHTML = "x";
            parent.appendChild(element);
        }
    }
    else { // if grid does not exist
        for (let i = 0; i < gridsize; i++) { // fill grid
            let element = document.createElement("button");
            element.setAttribute("id", `btn${i}`);
            element.setAttribute("class", "btn");
            element.setAttribute("onclick", `game.money.sellItem(game.items.bread, ${i})`);
            element.innerHTML = "x";
            parent.appendChild(element);
        }
    }
    count++;
}
function sleep(s) { return new Promise(resolve => setTimeout(resolve, s * 1000)); }
function y() { console.log(game.info.level.curlevel); } // console.log(`Bread: ${game.money.coins} | Coins: ${game.items.bread.ininv}`)
let game = {
    items: {
        bread: {
            cost: 1,
            worth: 2,
            ininv: 2,
            updateSelf: function () {
                let element = document.getElementById("breadInv");
                element.innerHTML = `${this.ininv} bread`;
            }
        }
    },
    money: {
        coins: 4,
        updateSelf: function () {
            let element = document.getElementById("money");
            element.innerHTML = `${this.coins} coins`;
        },
        sellItem: async function (item, id) {
            if (item.ininv > 0) {
                let element = document.getElementById(`btn${id}`);
                let img = document.createElement("img");
                console.log(element.getRootNode);
                item.ininv -= 1;
                game.items.bread.updateSelf();
                img.setAttribute("src", "../../images/bread_1080px.png");
                img.setAttribute("class", "btnimg");
                element.innerHTML = "";
                element.appendChild(img);
                await sleep(1.5);
                element.removeChild(element.firstChild);
                element.innerHTML = "x";
                this.coins += item.worth;
                this.updateSelf();
            }
        },
        buyItem: function (item) {
            if (this.coins > 0) {
                this.coins -= item.cost;
                item.ininv++;
                item.updateSelf();
                this.updateSelf();
            }
        }
    },
    info: {
        level: {
            curlevel: "one",
            one: {
                maintext: "Initial start",
                secondtext: "Earn 64 coins by selling bread",
                requirement: {
                    coinsrequired: 64,
                    breadrequired: 0
                }
            },
            two: {
                maintext: "Growing the store",
                secondtext: "Earn 512 coins by selling items",
                requirement: {
                    coinsrequired: 512,
                    breadrequired: 0
                }
            }
        },
        makeInfoBox: function (parentid, data) {
            let parent = document.getElementById(parentid);
            let maintext = document.createElement("h3");
            let secondtext = document.createElement("p");
            let submit = document.createElement("button");
            maintext.setAttribute("class", "infomaintext");
            maintext.setAttribute("id", "infomaintext");
            maintext.innerHTML = data.maintext;
            parent.appendChild(maintext);
            secondtext.setAttribute("class", "infosecondtext");
            secondtext.setAttribute("id", "infosecondtext");
            secondtext.innerHTML = data.secondtext;
            parent.appendChild(secondtext);
            submit.setAttribute("class", "infosubmitbutton");
            submit.setAttribute("id", "infosubmitbutton");
            submit.setAttribute("onclick", `game.info.submit(game.info.level.curlevel, game.info.level.${this.level.curlevel}.requirement, game.money.coins, game.items.bread.ininv)`);
            parent.appendChild(submit);
            submit.innerHTML = "Submit";
        },
        submit: function (atlevel, required, coins, bread) {
            if (required.coinsrequired <= coins && required.breadrequired <= bread) {
                this.level.curlevel = x(atlevel, 1);
                this.makeInfoBox("infobox", x(atlevel, 2));
            }
        }
    }
};
function x(a, d) {
    if (d == 1) {
        let b = ["one", "two"];
        for (let i = 0; i < b.length; i++) {
            if (b[i] == a)
                return b[i + 1];
        }
    }
    if (d == 2) {
        let c;
        let b = ["one", "two"];
        for (let i = 0; i < b.length; i++) {
            if (b[i] == a)
                c = b[i + 1];
        }
        switch (c) {
            case "one":
                return game.info.makeInfoBox('infobox', game.info.level.one);
            case "two":
                return game.info.makeInfoBox('infobox', game.info.level.two);
            default:
                break;
        }
    }
}
function onLoad() {
    game.money.updateSelf();
    game.items.bread.updateSelf();
    game.info.makeInfoBox("infobox", game.info.level.one);
    fillGrid(16, 'maingrid');
}
