async function animation(range:number, maxrange:number) {
    while (range > 0) {
        console.log(range);
        
        if (range == 1) {
            let element1 = document.getElementById(`btn${range}`);
            let element2 = document.getElementById(`btn${range-1}`)
            let img = document.createElement("img");
            img.setAttribute("src", "../images/bread_1080px.png");
            img.setAttribute("class", "btnimg")
            element1.innerHTML = "";
            element2.innerHTML = "";
            element2.appendChild(img);
            range--;
        } else if (range == maxrange) {
            let element1 = document.getElementById(`btn${range}`);
            let img = document.createElement("img");
            img.setAttribute("src", "../images/bread_1080px.png");
            img.setAttribute("class", "btnimg")
            element1.innerHTML = "";
            element1.appendChild(img);
            range--;
        } else {
            let element1 = document.getElementById(`btn${range}`);
            let element2 = document.getElementById(`btn${range-1}`)
            let img = document.createElement("img");
            img.setAttribute("src", "../images/bread_1080px.png");
            img.setAttribute("class", "btnimg")
            element1.innerHTML = "";
            element2.innerHTML = "";
            element2.appendChild(img);
            range--;
        }
        await sleep(1000);
    }
}