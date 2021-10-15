

export default class DataGenerator {
    constructor() {
        ///Возвращает массив масивов 
        this.generate = (size, frontPictures, backPictures) => {

            let result = [];
            let keyIndex = 0;
            let countUnicumPic = Math.trunc(size.rows * size.columns / 2) + (size.rows * size.columns % 2);
            let preparedPictures = this.getUnicumPic(frontPictures, countUnicumPic, 2);
            let backPicture = this.getPicture(backPictures);
            console.log('countUnicumPic: ' + countUnicumPic);

            for (let row_index = 0; row_index < size.rows; row_index++) {
                result.push([]);
                for (let col_index = 0; col_index < size.columns; col_index++) {
                    result[row_index][col_index] = {
                        key: 'card' + keyIndex,
                        index: row_index.toString() + col_index.toString(),
                        frontPicture: this.getPicture(preparedPictures),
                        backPicture: backPicture,
                        frontShown: false
                    }
                    if (preparedPictures.length > 0) {
                        //Удаляем использованную картинку
                        preparedPictures.splice(preparedPictures.indexOf(result[row_index][col_index].frontPicture, 0), 1);
                    }
                    keyIndex++;
                }
            }

            return result;
        }
        //получаем случайную картинку из массива картинок
        this.getPicture = (pictures) => {
            if (pictures.length > 0) {
                let randIndex = this.getRandomInt(pictures.length);
                return pictures[randIndex];
            }
            else return {};
        }
        //получаем случайное число 
        this.getRandomInt = (max) => {
            return Math.floor(Math.random() * (max));
        }
        this.getUnicumPic = (allPics, howManyGet, repeet) => {
            let pictures = [...allPics];
            let result = [];
            for (let i = 0; i < howManyGet; i++) {
                let index = this.getRandomInt(pictures.length);
                for (let j = 0; j < repeet; j++) {
                    result.push(pictures[index])
                }
                pictures.splice(index, 1);
            }
            return result;
        }
    }
}
