import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
    },
    titleText: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 10,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        borderColor: '#ddd',
        fontSize: 18,
    },
    errorText: {
        color: 'red',
        
    }

})

export const images = {
    ratings: {
        '1': require('../assets/images/rating-1.png'),
        '2': require('../assets/images/rating-2.png'),
        '3': require('../assets/images/rating-3.png'),
        '4': require('../assets/images/rating-4.png'),
        '5': require('../assets/images/rating-5.png'),

    }
}