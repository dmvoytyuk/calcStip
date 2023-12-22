const workD = {
    nights: 6,
    days: 1,
    evenings: 6,
}

const sunD = {
    nights: 1,
    days: 1,
    evenings: 1,
}

basePay = 10.76;

function readValues(callback) {
    const basePay = document.getElementById('basepay');
    console.log(basePay);
}

function calcStip(basePay, workNight, workDay, workEvening, sunNights, sunDays, sunEvenings) {
    
    // const totalWorkDayH = workNight * 2 + workDay * 8 + workEvening * 4;
    const totalWorkEveningH = workEvening * 2;
    const totalWorkNightH = workNight * 6 + workEvening * 2;
    console.log(`ore lavorate giorni feriali la sera ${totalWorkEveningH}`);
    console.log(`ore lavorate giorni feriali la notte ${totalWorkNightH}`);

    const totalSunDayH = sunDays * 8 + sunEvenings * 6;
    const totalSunNightH = sunEvenings * 2 + sunNights * 6;
    console.log(`ore lavorate giorni festivi ${totalSunDayH}`);
    console.log(`ore lavorate giorni festivi note ${totalSunNightH}`);

    const payEveningD = totalWorkEveningH * (basePay * 0.2);
    const payNightsD = totalWorkNightH * (basePay * 0.3);

    const paySunDays = totalSunDayH * (basePay * 0.5);
    const paySunNights = totalSunNightH * (basePay * 0.6);

    return payEveningD + payNightsD + paySunDays + paySunNights;

}

const button = document.getElementById('calc');
button.addEventListener('click', readValues());

console.log(calcStip(basePay, workD.nights, workD.days, workD.evenings, sunD.nights, sunD.days, sunD.evenings));


