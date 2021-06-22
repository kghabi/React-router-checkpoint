import {v4 as uuidv4} from 'uuid';
const movies=[
    {
        id: uuidv4(),
        title: 'Hitman',
        img: 'https://images-na.ssl-images-amazon.com/images/I/511grO-XajL._AC_.jpg',
        rate: 5,
        desc: 'Inside a secure facility, a group of young boys receive tattoos of bar codes on the backs of their shaved heads and are then trained in weapons, demolitions, unarmed combat...',
        trailer:"https://www.youtube.com/watch?v=XJhNzHyq-IE"
    },
    {
        id: uuidv4(),
        title: 'Pompéi',
        img: 'https://1.bp.blogspot.com/-1TWJupXqzqc/UwYYs7yrGaI/AAAAAAAAABs/SvQ5XK8xcDg/s1600/Pompeii+Australian+Poster.jpg',
        rate: 4,
        desc: 'In the year 79, the city of Pompeii saw its most prosperous period in the shelter of Mount Vesuvius. Milo, slave of a powerful merchant, dreams of the day when he can redeem...',
        trailer:"https://www.youtube.com/watch?v=t6TRwfxDICM"
    },
    { id:uuidv4(),
        title: 'The Revenant',
        img: 'https://m.media-amazon.com/images/I/A1BjliXNDPL._AC_SL1500_.jpg',
        rate: 5,
        desc: 'In a deeply wild America, a group of trappers, led by captain and fur trader Andrew Henry, suffered heavy losses in an attack led by the Native Americans. Indeed, while the...'
       ,trailer:"https://www.youtube.com/watch?v=LoebZZ8K5N0"
    },
];
export default movies;