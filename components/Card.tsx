import {Image, TouchableOpacity, View} from "react-native";
import {Divider, Icon, Text} from "@ui-kitten/components";
import React from "react";

const Card = ({imageSource, description, title, subTitle, onPress, style}: any) => {
    return <TouchableOpacity onPress={onPress}>
        <View
            style={{
                borderRadius: 6,
                borderStyle: 'solid',
                borderWidth: 1.5,
                borderColor: 'lightgray',
                height: 200,
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginVertical: 4,
                ...style
            }}>
            <Image style={{
                height: '100%',
                width: '40%',
                objectFit: 'cover',
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6
            }} source={imageSource}
                   alt="Almofadas"/>
            <View>
                <Text style={{padding: 6}} category='h5'>
                    {title}
                </Text>
                <Text category='s2' style={{paddingLeft: 6, marginBottom: 12}}>
                    {subTitle}
                </Text>
                {description && description.map((item: any, index: number) => {
                    return (<View style={{display: 'flex', flexDirection: 'row'}}>
                        <Icon style={{width: 24, height: 24}} name='arrow-right'/>
                        <Text style={{}}>
                            {item}
                        </Text>
                        <Divider/>
                    </View>)
                })}
            </View>
        </View>
    </TouchableOpacity>
}

export default Card
