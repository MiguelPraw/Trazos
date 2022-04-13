export interface IResults {
    count:    number;
    next:     string;
    previous: null;
    results:  IPokemonBase[];
}

export interface IPokemonBase {
    name: string;
    url:  string;
}
