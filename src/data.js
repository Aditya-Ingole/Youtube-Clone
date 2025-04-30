export const API_KEY = 'AIzaSyD1SmlQ6-gM0H4Yhk23_wGcZpXV44MvTWU';

export const valueConverter = (value) => {
    if(value >= 1000000)
    {
        return Math.floor(value/1000000)+"M";
    }

    else if(value >= 1000) 
    {
        return Math.floor(value/1000)+"K";
    }   
    else {
        return value;
    }
}

