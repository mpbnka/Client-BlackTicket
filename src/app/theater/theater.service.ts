import { Injectable } from "@angular/core";

import { Theater } from "./theater.model";

@Injectable()

export class TheaterService {
    private theaters:Theater[] = [
        new Theater (        
            1,
            'PVR Cinemas InOrbit Mall',
            [
                {
                    showTime : '4.00 pm',
                    bookingPercent : '60',
                    showId : 123456
                },
                {
                    showTime : '7.00 pm',
                    bookingPercent : '80',
                    showId : 123457
                }
            ]
        ),
        new Theater (        
            2,
            'PVR Cinemas Central',
            [
                {
                    showTime : '5.00 pm',
                    bookingPercent : '60',
                    showId : 123456
                },
                {
                    showTime : '8.00 pm',
                    bookingPercent : '80',
                    showId : 123457
                }
            ]
        ),
        new Theater (        
            3,
            'Inox Cinemas InOrbit Mall',
            [
                {
                    showTime : '6.00 pm',
                    bookingPercent : '60',
                    showId : 123456
                },
                {
                    showTime : '9.00 pm',
                    bookingPercent : '80',
                    showId : 123457
                }
            ]
        )
    ]
    constructor(){}

    getTheaters(){
        return this.theaters.slice();
    }

    getTheater(id:number){
        return this.theaters[id];
    }

}