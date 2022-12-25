const carsList = document.querySelector('.dreams__card-box');
const compactBtn = document.querySelector('#compactBtn');
const sportsBtn = document.querySelector('#sportsBtn');
const vansBtn = document.querySelector('#vansBtn');

carsList.innerHTML = '';

compactBtn.style.background = '#299764';
compactBtn.style.color = 'white';
compactCars.map((el) => {
	const item = document.createElement('li');
	item.className = 'dreams__card';
	item.innerHTML = `
            <h4 class="dreams__card-head">${el.name}</h4>
            <p class="dreams__card-text">${el.model}</p>
            <img class="dreams__card-img" src="${el.img}" />
            <ul class="card__item">
                <li>
                    <img src="${el.personIcon}" alt="" />
                    <span>5 Seats</span>
                </li>
                <li>
                    <img src="${el.AutomaticIcon}" alt="" />
                    <span>Automatic</span>
                </li>
                <li>
                    <img src="${el.personImgIcon}" alt="" />
                    <span>21+ Years</span>
                </li>
                <li>
                    <img src="${el.WaterIcon}" alt="" />
                    <span>1-lit / 2.5 km</span>
                </li>
            </ul>
        `;
	carsList.append(item);
});

compactBtn.addEventListener('click', (e) => {
	e.preventDefault();
	carsList.innerHTML = '';
	sportsBtn.style.color = '';
	sportsBtn.style.background = '';
	vansBtn.style.color = '';
	vansBtn.style.background = '';
	compactBtn.style.background = '#299764';
	compactBtn.style.color = 'white';
	compactCars.map((el) => {
		const item = document.createElement('li');

		item.className = 'dreams__card';
		item.innerHTML = `
            <h4 class="dreams__card-head">${el.name}</h4>
            <p class="dreams__card-text">${el.model}</p>
            <img class="dreams__card-img" src="${el.img}" />
        `;
		carsList.append(item);
	});
});
sportsBtn.addEventListener('click', (e) => {
	e.preventDefault();
	carsList.innerHTML = '';
	compactBtn.style.color = '';
	compactBtn.style.background = '';
	vansBtn.style.color = '';
	vansBtn.style.background = '';
	sportsBtn.style.background = '#299764';
	sportsBtn.style.color = 'white';
	sportsCars.map((el) => {
		const item = document.createElement('li');

		item.className = 'dreams__card';
		item.innerHTML = `
            <h4 class="dreams__card-head">${el.name}</h4>
            <p class="dreams__card-text">${el.model}</p>
            <img class="dreams__card-img" src="${el.img}" />
        `;
		carsList.append(item);
	});
});
vansBtn.addEventListener('click', (e) => {
	e.preventDefault();
	carsList.innerHTML = '';
	compactBtn.style.color = '';
	compactBtn.style.background = '';
	sportsBtn.style.color = '';
	sportsBtn.style.background = '';
	vansBtn.style.background = '#299764';
	vansBtn.style.color = 'white';
	vars.map((el) => {
		const item = document.createElement('li');

		item.className = 'dreams__card';
		item.innerHTML = `
            <h4 class="dreams__card-head">${el.name}</h4>
            <p class="dreams__card-text">${el.model}</p>
            <img class="dreams__card-img" src="${el.img}" />
        `;
		carsList.append(item);
	});
});
