import { HttpHeaders } from "@angular/common/http";

export interface IOptions {
    headers: HttpHeaders
}

export interface ITeams {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:           number;
    abbreviation: string;
    city:         string;
    conference:   Conference;
    division:     string;
    full_name:    string;
    name:         string;
}

export enum Conference {
    East = "East",
    West = "West",
}

export interface Meta {
    total_pages:  number;
    current_page: number;
    next_page:    null;
    per_page:     number;
    total_count:  number;
}
