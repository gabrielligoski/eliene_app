import {View} from "react-native";
import React from "react";
import {Select, SelectItem} from "@ui-kitten/components";
import {Controller} from "react-hook-form";

const Tecidos = ['Linhão', 'Suede', 'Couro', 'Outro']

const ItemModalForm = ({selectedItem, control}: { selectedItem: string, control: any }) => {
    switch (selectedItem) {
        case 'saia-de-mesa':
        case 'almofada':
            return (<View>
                {/*<Controller*/}
                {/*    name="tecido"*/}
                {/*    control={control}*/}
                {/*    render={({ field }) => <Select*/}
                {/*        onSelect={idx => field.onChange(idx)}*/}
                {/*        selectedIndex={field?.value}*/}
                {/*        label={'Escolha seu tecido...'}*/}
                {/*        {...field}*/}
                {/*    >*/}
                {/*        {Tecidos.map(tecido => <SelectItem title={tecido}/>)}*/}
                {/*    </Select>}*/}
                {/*/>*/}
                {/*<Controller*/}
                {/*    name="tamanho"*/}
                {/*    control={control}*/}
                {/*    render={({ field }) => <Select*/}
                {/*        style={{marginVertical: 12}}*/}
                {/*        {...field}*/}
                {/*    >*/}
                {/*        <SelectItem title='40x40'/>*/}
                {/*        <SelectItem title='40x50'/>*/}
                {/*        <SelectItem title='50x50'/>*/}
                {/*        <SelectItem title='Outro'/>*/}
                {/*    </Select>}*/}
                {/*/>*/}
            </View>)
        case 'travesseiro':
            return (<View>
                {/*<Controller*/}
                {/*    name="tecido"*/}
                {/*    control={control}*/}
                {/*    render={({ field }) => <Select*/}
                {/*        {...field}*/}
                {/*    >*/}
                {/*        <SelectItem title='Linhão'/>*/}
                {/*        <SelectItem title='Suede'/>*/}
                {/*        <SelectItem title='Couro'/>*/}
                {/*        <SelectItem title='Outro'/>*/}
                {/*    </Select>}*/}
                {/*/>*/}
            </View>)
        default:
            return <></>
    }

}

export default ItemModalForm
