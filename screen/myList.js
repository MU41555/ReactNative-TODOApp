import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function MyList(props) {
    return(
        <View style={styles.lists}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    );
}
export default MyList;

const styles = StyleSheet.create({
    lists : {
        backgroundColor : "#fff",
        padding : 15,
        borderRadius : 10,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginBottom : 20 
    },
    itemLeft : {
        flexDirection : 'row',
        itemLeft : 'center',
        flexWrap : 'wrap'
    },
    square : {
        width  : 24,
        height : 24,
        backgroundColor : "#55c7e8",
        opacity : 0.4,
        marginRight : 15,
        borderRadius : 5        
    },
    itemText : {
        maxWidth : '80%',
        fontWeight : 'bold',
    },
    circle : {
        width : 12,
        height : 12,
        borderColor : "#55c7e8",
        borderRadius : 5,
        borderWidth : 2
    },

})