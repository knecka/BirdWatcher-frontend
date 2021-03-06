import { User } from 'src/app/user/shared/user.model';
import { Species } from 'src/app/species/shared/species.model';

export class Observation {
    _id: String;
    owner: User;
    species: Species;
    date: Date;
    exactLocation: { coordinates: [number, number] };
    editable: Boolean;

    constructor() {
        this.species = { id: 0, commonName: '', scientificName: '' };
        this.exactLocation = { coordinates: [0,0] };
        this.editable = false;
    }
}