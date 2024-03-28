const $container = document.querySelector(".image-container");

setInterval(()=> {
    const $last = $container.firstElementChild;
    $last.remove();
    $container.appendChild($last);
}, 2000);


const addPhotos = () => {
    fetch("http://localhost:3000/config")
        .then((res) => res.json())
        .then((response) => {
            let birthday = new Date(Date.parse(response.birthday));
            let now = new Date();
            let diffInMonths = now.getMonth() - birthday.getMonth();
            let diffInYears = now.getFullYear() - birthday.getFullYear();
            diff = diffInYears * 12 + diffInMonths
            let imagePath = response.imagePath
            for (let month = 0; month <= diff; month++) {
                const divBox = document.createElement("div")
                divBox.setAttribute("class", "box")
                const img = document.createElement("img");
                let src = imagePath + month + ".jpg";
                img.setAttribute("src", src);
                divBox.appendChild(img);
                $container.appendChild(divBox);
            }
        })
}

addPhotos()