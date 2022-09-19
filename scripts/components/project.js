let dataAll = []

function addData(event) {
    event.preventDefault()

    let name    = document.getElementById('input-name').value;
    let start   = document.getElementById('start-date').value;
    let end     = document.getElementById('end-date').value;
    let desc    = document.getElementById('desc').value;
    let img     = document.getElementById('img').files;

    let nodeJs  = document.getElementById("node-js").checked;
    let laravel = document.getElementById("laravel").checked;
    let react   = document.getElementById("react").checked;
    let golang  = document.getElementById("go").checked;

    if (nodeJs) {
        nodeJs = document.getElementById('node-js').value
    } else {
        nodeJs = ''
    }

    if (laravel) {
        laravel = document.getElementById('laravel').value
    } else {
        laravel = ''
    }

    if (react) {
        react = document.getElementById('react').value
    } else {
        react = ''
    }

    if (golang) {
        golang = document.getElementById('go').value
    } else {
        golang = ''
    }

    img = URL.createObjectURL(img[0])

    let data = {
        name,
        start,
        end,
        desc,
        img,
        nodeJs,
        laravel,
        react,
        golang
    }

    dataAll.push(data);
    renderCard()
}

function renderCard() {
    document.getElementById("card").innerHTML = ''

    for (let i = 0; i < dataAll.length; i++) {
        document.getElementById("card").innerHTML += `
            <a href="detail.html" target="_blank">
                <div class="card">
                    <div>
                        <img style="
                            width: 100%;
                            border-radius: 10px;
                            " src="${dataAll[i].img}" alt="code">
                        <div class="card-text">
                            <h3>${dataAll[i].name}</h3>
                            <p>Durasi: ${getDuration(dataAll[i].start, dataAll[i].end)}</p>
                        </div>
                    </div>
                    <div class="card-desc">
                        <p>${dataAll[i].desc}</p>
                        <div style="margin-bottom: 10px;">
                            <i class="fa-brands fa-xl fa-${dataAll[i].nodeJs}" size:20px></i>
                            <i class="fa-brands fa-xl fa-${dataAll[i].laravel}"></i>
                            <i class="fa-brands fa-xl fa-${dataAll[i].react}"></i>
                            <i class="fa-brands fa-xl fa-${dataAll[i].golang}"></i>
                        </div>
                    </div>
                    <div style="display: flex; justify-content:center">
                        <button class="button-edit">Edit</button>
                        <button class="button-delete">Delete</button>
                    </div>
                </div>
            </a>
        `
    }
}

function getDuration(start, end){
    let startDate   = new Date(start)
    let endDate     = new Date(end)
    // console.log(start);

    let duration = endDate - startDate
    // console.log (duration)

    let monthInYear     = 12
    let dayInMonth      = 30
    let hoursInDay      = 24 
    let secondInHours   = 3600 
    let milisecond      = 1000

    let durationYear    = Math.floor(duration / (milisecond * secondInHours * hoursInDay * dayInMonth * monthInYear))
    let durationMonth   = Math.floor(duration / (milisecond * secondInHours * hoursInDay * dayInMonth))
    let durationDay     = Math.floor(duration / (milisecond * secondInHours * hoursInDay))

    if (durationYear > 0) {
        return `${durationYear} year`
    } else if (durationMonth > 0) {
        return `${durationMonth} month`
    } else if (durationDay > 0) {
        return `${durationDay} day`
    }
}




