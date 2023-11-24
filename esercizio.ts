interface Smartphone {
    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void;
}

class FirstUser implements Smartphone {
    protected numeroCarica: number = 0;
    private numeroChiamate: number = 0;

    ricarica(unaRicarica: number): void {
        this.numeroCarica += unaRicarica;
    }
    chiamata(minutiDurata: number): void {
        const costoChiamata: number = 0.20 * minutiDurata;
        if (this.numeroCarica >= costoChiamata) {
            this.numeroCarica -= costoChiamata;
            this.numeroChiamate++;
        } else {
            console.log("You don't have enough balance to make the call.");
        }
    }
    numero404(): number {
        return this.numeroCarica
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
    }
}

class SecondUser extends FirstUser {
    
}

class ThirdUser extends FirstUser{
    
}

let user1: Smartphone = new FirstUser();
user1.ricarica(50);
user1.chiamata(2.5);
user1.chiamata(10);
user1.chiamata(5);

let user2: Smartphone = new SecondUser();
user2.ricarica(20);
user2.chiamata(3);
user2.chiamata(25);
user2.chiamata(1);

let user3: Smartphone = new ThirdUser();
user3.ricarica(10);
user3.chiamata(1);
user3.chiamata(0.3);
user3.chiamata(7);


displayUserInfo(user1);
displayUserInfo(user2);
displayUserInfo(user3);

function displayUserInfo(user: Smartphone): void {
    console.log("User balance: " + user.numero404());
    console.log("Number of calls made: " + user.getNumeroChiamate())

    user.azzeraChiamate();
    console.log("After calls: " + user.getNumeroChiamate())
    console.log()
}