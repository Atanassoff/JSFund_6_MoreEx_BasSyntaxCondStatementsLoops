function nextDay(y, m, d) {
    if(y < 100){y = 1900 + y;}
    d += 1;
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
            if (d === 32) {
                d = 1;
                m += 1;
            }
            break;
        case 12:
            if (d === 32) {
                d = 1;
                m = 1;
                y += 1;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (d === 31) {
                d = 1;
                m += 1;
            }
            break;
        default:
            break;
    }
    if(m === 2 && y % 400 === 0 && d === 30){d = 1; m += 1}
    else if(m === 2 && y % 100 === 0 && d === 29){d = 1; m += 1}
    else if(m === 2 && y % 4 === 0 && d === 30){d = 1; m += 1}
    else if(m === 2 && y % 4 != 0 && d === 29){d = 1; m += 1}
    console.log(`${y}-${m}-${d}`); 
}

nextDay(2016, 9, 30)
//2016-10-1
nextDay(2020, 3, 24)
//2020-3-25