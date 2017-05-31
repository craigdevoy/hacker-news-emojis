const [...points] = document.querySelectorAll('td.subtext span:first-child');
const [...age] = document.querySelectorAll('span.age');
const [...titles] = document.querySelectorAll('a.storylink');

const pointsText = points.map(points => parseInt(points.innerText));
const ageText = age.map(age => parseInt(age.innerText));
const sums = pointsText.map( (num, idx) => Math.round(num / ageText[idx]));

let sumsMin = Math.min(...sums);
let sumsMax = Math.max(...sums);

for (i = 0; i < (titles.length + 1); i++) { 
	if (sums[i] <= (sumsMin + 5)) {
    	titles[i].innerText += '💩';
	} 

	if (sums[i] >= (sumsMin + 6) ) {
		titles[i].innerText += '🔥';
	}

	if (sums[i] > (sumsMin + 20) ) {
		titles[i].innerText += '🔥🔥';
	}

	if (sums[i] >= sumsMax ) {
		titles[i].innerText += '🔥🔥';
	}

};

