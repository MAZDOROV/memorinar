export default class DataGenerator {
    constructor() {
        this.generate = (size, frontPictures, backPicture) => {

            let result = [];
            let keyIndex = 0;

            for (let row_index = 0; row_index < size.rows; row_index++) {
                result.push([]);
                for (let col_index = 0; col_index < size.columns; col_index++) {
                    result[row_index][col_index] = {
                        key: 'card' + keyIndex,
                        index: row_index.toString() + col_index.toString(),
                        frontPicture: this.getFrontPicture(frontPictures),
                        backPicture: backPicture
                    }
                    if (frontPictures.length > 0) {
                        //Удаляем использованную картинку
                        frontPictures.splice(frontPictures.indexOf(result[row_index][col_index].frontPicture, 0), 1);
                    }
                    keyIndex++;
                }
            }

            return result;
        }
        //получаем случайную картинку из массива картинок
        this.getFrontPicture = (frontPictures)=> {
            if (frontPictures.length > 0) {
                let randIndex = this.getRandomInt(frontPictures.length);
                return frontPictures[randIndex];
            }
            else return {};
        }
        this. getRandomInt = (max)=> {
            return Math.floor(Math.random() * (max));
        }
    }
}
