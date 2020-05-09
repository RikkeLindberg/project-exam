const urlNextLaunch = "https://api.spacexdata.com/v3/launches/next";

async function fetchNextLaunch() {
    try {
        const response = await fetch(urlNextLaunch);
        const nextLaunch = await response.json();

        displayNextLaunch(nextLaunch);

    } catch (error) {
        console.log(error);
    }
}

fetchNextLaunch();

function createLaunchDate(launchDate) {
    let date = new Date(launchDate * 1000);
    return date.toLocaleDateString();
}

function displayNextLaunch(nextLaunch) {
    console.log(nextLaunch);

    const nextLaunchContainer = document.querySelector(".section-next-launch");

    let html = "";

    html += `<div class="next-launch__box">
                <div class="next-launch__details">
                    <h2 class="heading--secondary">${nextLaunch.mission_name}</h2>
                    <p class="next-launch__text">${createLaunchDate(nextLaunch.launch_date_unix)}</p>
                    <a href="launches.html" class="btn">See all launches</a>
                </div>
                <div class="next-launch__patch">
                    <img src="${nextLaunch.links.mission_patch_small}" alt="Mission patch image" class="mission-patch-small">
                </div>
            </div>
            `;

    nextLaunchContainer.innerHTML = html;
}

