export class Product {

    public id: number = 0;
    private _idCat?: number = 1;
    public price: number = 0.01;
    private _name?: string = 'Inconnu';
    public desc: string;
    public image: string = 'defaut.jpg';

    constructor(product:any={}){

        //* initialisation de l'objet transmis
        this.id = product.id || 0;
        this.idCat = product.idCat;
        this.price = product.price || product.prix || product.preiz || 0.01;
        this.name = product.name || product.nom || 'Inconnu';
        this.desc = product.desc;
        this.image = product.image || 'defaut.jpg';
    }

    //* méthodes privées
    private checkIdCat(idCat:number){
        return [1,2,3,4].indexOf(idCat)!==-1;
    }

    private checkName(name:string){
        return /^[A-Z0-9].+$/.test(name);
    }

    //setters / getters
    set idCat(idCat:number){
        if( this.checkIdCat(idCat)){
            this._idCat = idCat;
        }
    }

    get idCat():number{
        return this._idCat;
    }

    set name(name:string){
        if( this.checkName(name)){
            this._name = name;
        }
    }

    get name():string{
        return this._name;
    }

    toJSON():any{
        return {
            id: this.id
            , idCat: this.idCat
            , price: this.price
            , name: this.name
            , desc: this.desc
            , image: this.image
        };
    }

    toString():string{
        return JSON.stringify(this.toJSON());
    }

}
