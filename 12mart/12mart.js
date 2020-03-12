// const x = 10;
// y= x+2;
// console.log(x);

// var y = 10;
// y = 5;
// console.log(y);

// let u = 3;
// u = 10;
// console.log(u)

// {
const x = 7;
y = x + 5

// }

// kvadrat
{
    let a = 10
    let p = a * a
    let o = 4 * a
    console.log(p, o)

}
// pravougaonik
{
    let a = 8
    let b = 13
    let p = a * b
    let o = a + a + b + b
    console.log(p, o)
}

// trougao
{
    let a = 4
    let b = 5
    let c = 6
    let s = (a + b + c) / 2
    let o = a + b + c;
    let p = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log(p, o)
}


// provera vrednosti
{
    let a = 8
    let b = 6
    if (a < 0) {
        let p = a * b
        let o = 4 * a
        console.log(p, o)
    }
    else {
        console.error('GRESKA')
    }
}

{
    let a = 8
    if (a > 10) {
        console.log('ako je vece od 10')
    }
    else if (a > 7) {
        console.log('ako je a izmedju 7 i 10')
    } else {
        console.log('ako je manje od 7')
    }
}

// slucajevi

{
    let x = 2
    switch (x) {
        case 0:
            console.log('ponedeljak')
            break
        case 1:
            console.log('utorak')
            break
        case 2:
            console.log('sreda')
            break
        default:
            console.log('los unos')
    }
}


// zadatak
{
    let godina = 2020
    if ((godina % 4 === 0 && godina % 100 != 0) || godina % 400 === 0) {
        console.log('godina je prestupna')
    } else {
        console.log('godina nije prestupna')
    }
}

// zadatak2

{
    let mesec = 2
    let godina= 1976
    switch (mesec) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(31)
            break
        
        case 4:
        case 6:
        case 8:
        case 9:
        case 11:
            console.log(30)
            break
            case 2:
                if ((godina % 4 === 0 && godina % 100 != 0) || godina % 400 === 0) {
                    console.log(29)
                } else {
                    console.log(28)
                }
                break
                default:
                    console.log('podaci su neispravni')




    }
}