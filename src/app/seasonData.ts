import { Season } from './season';

export const SEASONS:Season[] = [
    {
        startYear:2019,
        topScorers: [
            {
                name:'Jamie Vardy',
                club: {
                    name:'Leicester City'
                },
                seasonGoals:23,
                seasonAssists:5
            },
            {
                name:'Pierre-Emerick Aubameyang',
                club: {
                    name:'Arsenal'
                },
                seasonGoals:22,
                seasonAssists:3
            },
            {
                name:'Danny Ings',
                club: {
                    name:'Southampton'
                },
                seasonGoals:22,
                seasonAssists:2
            }
        ],
        topAssists: [
            {
                name: "Kevin De Bruyne",
                club: {
                    name: "Manchester City"
                },
                seasonGoals:13,
                seasonAssists: 20
            },
            {
                name: "Trent Alexander-Arnold",
                club: {
                    name: "Liverpool"
                },
                seasonGoals: 4,
                seasonAssists: 13
            },
            {
                name: "Andrew Robertson",
                club: {
                    name: "Liverpool"
                },
                seasonGoals: 2,
                seasonAssists: 12
            }
        ],
        winner: {
            name: "Liverpool"
        },
        relegated : [
            {
                name:"AFC Bournemouth"
            },
            {
                name:"Watford"
            },
            {
                name:"Norwich City"
            }
        ]
    },
    {
        startYear:2018,
        topScorers: [
            {
                name:'Mohammed Salah',
                club: {
                    name:'Liverpool'
                },
                seasonGoals:22,
                seasonAssists:8
            },
            {
                name:'Pierre-Emerick Aubameyang',
                club: {
                    name:'Arsenal'
                },
                seasonGoals:22,
                seasonAssists:5
            },
            {
                name:'Sadio Mane',
                club: {
                    name:'Liverpool'
                },
                seasonGoals:22,
                seasonAssists:1
            }
        ],
        topAssists: [
            {
                name: "Eden Hazard",
                club: {
                    name: "Chelsea"
                },
                seasonGoals:16,
                seasonAssists: 15
            },
            {
                name: "Ryan Fraser",
                club: {
                    name: "AFC Bournemouth"
                },
                seasonGoals: 7,
                seasonAssists: 14
            },
            {
                name: "Christian Eriksen",
                club: {
                    name: "Tottenham"
                },
                seasonGoals: 8,
                seasonAssists: 12
            }
        ],
        winner: {
            name: "Manchester City"
        },
        relegated : [
            {
                name:"Cardiff City"
            },
            {
                name:"Fulham"
            },
            {
                name:"Huddersfield Town"
            }
        ]
    }
]