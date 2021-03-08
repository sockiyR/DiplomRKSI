class Popup {
    constructor(inputBTN, section) {
        this.inputBTN = inputBTN;
        this.section = section;
    }
    PopCreated(){
        let content = this.inputBTN.attr("data-popup");
        this.section.append(content);
        return  this.section;
    }   
}