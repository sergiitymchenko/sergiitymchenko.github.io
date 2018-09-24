import './css/style.css';
import './css/today.scss';
import './css/main-block.css';
import {fetchForecast} from './services/api';
import gridTpl from './templates/grid-item.hbs';

const input = document.querySelector('.form-input');
const btnSearch = document.querySelector('.btn-search');
const mainContent = document.querySelector('.main-content');
const enter = document.querySelector('.enter');

btnSearch.addEventListener('click', handleClick);

function handleView() {

	const optionWeekday = {
		weekday: 'long',
	}
	const optionMonth = {
		month: 'long',
	}
	const date = new Date();
	const weeks = ["неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя", "понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота"];


	fetchForecast(input.value)
	.then(data => {
		// console.log(data);
		mainContent.innerHTML = gridTpl({
			city: data.location.name,
			region: data.location.region,

			update: data.current.last_updated.slice(10),
			imgCurrent: data.current.condition.icon,
			textCurrent: data.current.condition.text,
			tempCurrent: data.current.temp_c,
			feelsCurrent: data.current.feelslike_c,
			humidityCurrent: data.current.humidity,
			windCurrent: data.current.wind_kph,
			cloudCurrent: data.current.cloud,
			visCurrent: data.current.vis_km,
			precipCurrent: data.current.precip_mm,

			dayToday: date.toLocaleString('Uk-uk', optionWeekday),

			dayOne: weeks[date.getDay()],
			dayTwo: weeks[date.getDay()+1],
			dayThree: weeks[date.getDay()+2],
			dayFour: weeks[date.getDay()+3],
			dayFive: weeks[date.getDay()+4],
			daySix: weeks[date.getDay()+5],
			daySeven: weeks[date.getDay()-1],

			numberOne: data.forecast.forecastday[0].date.slice(8),
			numberTwo: data.forecast.forecastday[1].date.slice(8),
			numberThree: data.forecast.forecastday[2].date.slice(8),
			numberFour: data.forecast.forecastday[3].date.slice(8),
			numberFive: data.forecast.forecastday[4].date.slice(8),
			numberSix: data.forecast.forecastday[5].date.slice(8),
			numberSeven: data.forecast.forecastday[6].date.slice(8),

			month: date.toLocaleString('Uk-uk', optionMonth),

			imgOne: data.forecast.forecastday[0].day.condition.icon,
			imgTwo: data.forecast.forecastday[1].day.condition.icon,
			imgThree: data.forecast.forecastday[2].day.condition.icon,
			imgFour: data.forecast.forecastday[3].day.condition.icon,
			imgFive: data.forecast.forecastday[4].day.condition.icon,
			imgSix: data.forecast.forecastday[5].day.condition.icon,
			imgSeven: data.forecast.forecastday[6].day.condition.icon,

			textOne: data.forecast.forecastday[0].day.condition.text,
			textTwo: data.forecast.forecastday[1].day.condition.text,
			textThree: data.forecast.forecastday[2].day.condition.text,
			textFour: data.forecast.forecastday[3].day.condition.text,
			textFive: data.forecast.forecastday[4].day.condition.text,
			textSix: data.forecast.forecastday[5].day.condition.text,
			textSeven: data.forecast.forecastday[6].day.condition.text,

			minTempOne: data.forecast.forecastday[0].day.mintemp_c,
			minTempTwo: data.forecast.forecastday[1].day.mintemp_c,
			minTempThree: data.forecast.forecastday[2].day.mintemp_c,
			minTempFour: data.forecast.forecastday[3].day.mintemp_c,
			minTempFive: data.forecast.forecastday[4].day.mintemp_c,
			minTempSix: data.forecast.forecastday[5].day.mintemp_c,
			minTempSeven: data.forecast.forecastday[6].day.mintemp_c,

			maxTempOne: data.forecast.forecastday[0].day.maxtemp_c,
			maxTempTwo: data.forecast.forecastday[1].day.maxtemp_c,
			maxTempThree: data.forecast.forecastday[2].day.maxtemp_c,
			maxTempFour: data.forecast.forecastday[3].day.maxtemp_c,
			maxTempFive: data.forecast.forecastday[4].day.maxtemp_c,
			maxTempSix: data.forecast.forecastday[5].day.maxtemp_c,
			maxTempSeven: data.forecast.forecastday[6].day.maxtemp_c,

			riseOne: data.forecast.forecastday[0].astro.sunrise,
			riseTwo: data.forecast.forecastday[1].astro.sunrise,
			riseThree: data.forecast.forecastday[2].astro.sunrise,
			riseFour: data.forecast.forecastday[3].astro.sunrise,
			riseFive: data.forecast.forecastday[4].astro.sunrise,
			riseSix: data.forecast.forecastday[5].astro.sunrise,
			riseSeven: data.forecast.forecastday[6].astro.sunrise,

			setOne: data.forecast.forecastday[0].astro.sunset,
			setTwo: data.forecast.forecastday[1].astro.sunset,
			setThree: data.forecast.forecastday[2].astro.sunset,
			setFour: data.forecast.forecastday[3].astro.sunset,
			setFive: data.forecast.forecastday[4].astro.sunset,
			setSix: data.forecast.forecastday[5].astro.sunset,
			setSeven: data.forecast.forecastday[6].astro.sunset,
		})
	})
};

function handleClick(e) {
	e.preventDefault();
	if (input.value === '') {
		alert('Введіть назву міста');
		return;
	}

	enter.classList.add('none');

	handleView();

	input.value = '';
};

