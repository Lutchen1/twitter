const RelativeFormatter = new Intl.RelativeTimeFormat('pt',{
    style: 'long'
})

export const DataService = {

    difference(date){
        const now = new Date();

        //divisão por mil pois a função gettime retorna em milisegundos ... transformando em segundos.
        let difference = (now.gettime() - new Date(date).gettime()) / 1000;
        let type = '';

        if (difference< 60){
            type = 'second';
            difference = Math.round(difference);
        } else if (difference < 60 * 60){
            type = 'minutes';
            difference = Math.round(difference / 60 );
        } else if (difference < 60 * 60 * 24){
            type = 'hours';
            difference = Math.round(difference / 60 / 60 );
        } else {
            type = 'days';
            difference = Math.round(difference / 60 / 60 / 24);
        }
        return {
            difference, 
            type,
        };

    },

    relativeTime(date){
        const {diference,type} = new this.diference(date);
        return RelativeFormatter.format(-diference,type); //negativa difference pois queremos ver o passado.
    }

}

