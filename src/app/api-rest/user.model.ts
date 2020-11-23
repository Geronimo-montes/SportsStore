export class UserModel {
    constructor (
        public id?: number,
        public email?: string,
        public first_name?: string,
        public last_name?: string,
        public avatar?: string  )
    {

    }
}

export class PruebaModel {
    constructor (
        public idDiagnostico? : number,
        public idAreaFormacion? : number,
        public descripcion? : string ) { }
}

