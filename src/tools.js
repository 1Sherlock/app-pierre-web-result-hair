/**
 * Created by Sherlock on 23.02.2022.
 */
 
export const calculateValue = (item, value) => {
    if (item === "density"){
        if (value <= 10){
            return value * 20 / 10;
        } else if (value > 10 && value <= 25){
            return 20 + (value * 20 / 25);
        } else if (value > 25 && value <= 50){
            return 40 + (value * 20 / 50);
        } else if (value > 50 && value <= 70){
            return 60 + (value * 20 / 70);
        } else if (value > 70 && value <= 100){
            return 80 + (value * 20 / 100);
        }
    } else if (item === "thickness"){
        if (value <= 22){
            return value * 20 / 22;
        } else if (value > 22 && value <= 45){
            return 20 + (value * 20 / 45);
        } else if (value > 45 && value <= 52){
            return 40 + (value * 20 / 52);
        } else if (value > 52 && value <= 76){
            return 60 + (value * 20 / 76);
        } else if (value > 76 && value <= 100){
            return 80 + (value * 20 / 100);
        }
    } else if (item === "scalpKeratin" || item === "scalpRedness"){
        if (value <= 14){
            return 100 - (value * 20 / 14);
        } else if (value > 14 && value <= 30){
            return 100 - (20 + (value * 20 / 30));
        } else if (value > 30 && value <= 50){
            return 100 - (40 + (value * 20 / 50));
        } else if (value > 50 && value <= 70){
            return 100 - (60 + (value * 20 / 70));
        } else if (value > 70 && value <= 100){
            return 100 - (80 + (value * 20 / 100));
        }
    }
    return value;
}