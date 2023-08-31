class Animals {
    constructor(name, type, habitat) {
        this.name = name;
        this.type = type;
        this.habitat = habitat;
    }

    animalsSound() {
        console.log("roar");
    }

}

class Mamalia extends Animals { }