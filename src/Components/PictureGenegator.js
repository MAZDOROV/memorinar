import lexus from "../imgs/lexus.png"
import cadillac from "../imgs/cadillac.png"
import lamborghini from "../imgs/lamborghini.png"
import vaz from "../imgs/vaz.png"
import volkswagen from "../imgs/volkswagen.png"
import volvo from "../imgs/volvo.png"
import wiesmann from "../imgs/wiesmann.png"

export default class PictureGenerator {
    constructor(){
        this.getFrontPictures=()=>{
            return [lexus, cadillac, lamborghini, vaz, volkswagen, volvo, wiesmann];
        }
    }
}