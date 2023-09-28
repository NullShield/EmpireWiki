export class Planet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;

    constructor(){
        this.name = "Tatooine";
        this.rotation_period = "23";
        this.orbital_period = "304";
        this.diameter = "10465";
        this.climate = "arid";
        this.gravity = "1 standard";
        this.terrain = "desert";
        this.surface_water = "1";
        this.population = "200000";
    }
}