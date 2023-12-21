const workD = {
    nights: 2,
    days: 1,
    evenings: 3,
}

const sunD = {
    nights: 0,
    days: 0,
    evenings: 1,
}

basePay = 10.76;

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

    const payEveningD = totalWorkEveningH * (basePay * 1.2);
    const payNightsD = totalWorkNightH * (basePay * 1.3);

    const paySunDays = totalSunDayH * (basePay * 1.5);
    const paySunNights = totalSunNightH * (basePay * 1.6);

    return payEveningD + payNightsD + paySunDays + paySunNights;

}

console.log(calcStip(basePay, workD.nights, workD.days, workD.evenings, sunD.nights, sunD.days, sunD.evenings));


