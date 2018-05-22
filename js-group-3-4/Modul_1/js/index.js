'use strict';
const SHARM = `Sharm-el-Shaikh`;
const HURGADA = `Hurgada`;
const TABA = `Taba`;

const SHARMPLACE = 15;
const HURGADAPLACE = 25;
const TABAPLACE = 6;

let placeLeft;



let choiceCountry = Number(prompt(`Ведіть кількість місць,`));
const isValidNumber = choiceCountry !== null && !Number.isNaN(choiceCountry) && choiceCountry > 0;

if( isValidNumber ){
	if( choiceCountry <= TABAPLACE ){
		let choiceTaba = confirm ( `Є вільні місця в ${TABA}` );
		if (choiceTaba) {
			alert(`Гарного відпочинку в ${TABA}`);
			placeLeft = TABAPLACE - choiceCountry;
		} else if ( choiceCountry <= SHARMPLACE ){
			let choiceSharm = confirm( `Тоді є вільні місця в групі ${SHARM}` );
			if (choiceSharm) {
				alert( `Гарного відпочинку в ${SHARM}` );
				placeLeft = SHARMPLACE - choiceCountry;
			} else if (choiceCountry <= HURGADAPLACE) {
				let choiceHurgada = confirm( `Залишилися місця в останній групі ${HURGADA}` );
				if (choiceHurgada) {
					alert( `Гарного відпочинку в ${HURGADA}` );
					placeLeft = HURGADAPLACE - choiceCountry;
				} else {
					alert( `Ви нічого не вибрали` );
				}
			} 
		}
	} else if (choiceCountry <= SHARMPLACE) {
		let choiceSharm = confirm( `Є вільні місця в групі ${SHARM}` );
		if (choiceSharm) {
			alert( `Гарного відпочинку в ${SHARM}` );
			placeLeft = SHARMPLACE - choiceCountry;
		} else if (choiceCountry <= HURGADAPLACE) {
			let choiceHurgada = confirm( `Залишилися місця в останній групі ${HURGADA}` );
			if (choiceHurgada) {
				alert( `Гарного відпочинку в ${HURGADA}` );
				placeLeft = HURGADAPLACE - choiceCountry;
			} else {
				alert( `Ви нічого не вибрали` );
			}
		}
	} else if (choiceCountry <= HURGADAPLACE) {
		let choiceHurgada = confirm( `Місця залишилися тільки в групі ${HURGADA}` );
		if (choiceHurgada) {
			alert( `Гарного відпочинку в ${HURGADA}` );
			placeLeft = HURGADAPLACE - choiceCountry;
		} else {
			alert( `Ви нічого не вибрали` );
		}
	} else if (choiceCountry >= 26) {
		alert( `Місць не залишилося` );
	} 
} else {
	alert( `Ви ввели не число або число менше одиниці` );
}



console.log( `Залишилося місць ${placeLeft}` );

