import {View} from "react-native";
import React from "react";
import {Select, SelectItem, Text} from "@ui-kitten/components";
import {Controller} from "react-hook-form";

export const Tecidos = ['Linhão', 'Suede', 'Couro', 'Outro']
export const Tamanhos = ['40x40', '40x50', '50x50', 'Outro']

const ItemModalForm = ({selectedItem, control, errors}: { selectedItem: string, control: any, errors: any }) => {
    switch (selectedItem) {
        case 'saia-de-mesa':
        case 'almofada':
            return (<View>
                <Controller
                    name="tecido"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: {onChange, value} }) => <Select
                        onSelect={idx => onChange(idx)}
                        selectedIndex={value}
                        label={'Escolha seu tecido...'}
                        value={value && Tecidos[value.row]}
                        style={{marginVertical: 6}}
                    >
                        {Tecidos.map(tecido => <SelectItem key={tecido} title={<Text>{tecido}</Text>} />)}
                    </Select>}
                />
                {errors.tecido && <Text status='danger' appearance='alternative'>Escolha um tecido!</Text>}
                <Controller
                    name="tamanho"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: {onChange, value} }) => <Select
                        onSelect={idx => onChange(idx)}
                        selectedIndex={value}
                        label={'Escolha seu tamanho...'}
                        value={value && Tamanhos[value.row]}
                        style={{marginVertical: 6}}
                    >
                        {Tamanhos.map(tamanho => <SelectItem key={tamanho} title={<Text>{tamanho}</Text>} />)}
                    </Select>}
                />
                {errors.tamanho && <Text status='danger' appearance='alternative'>Escolha um tamanho!</Text>}
            </View>)
        case 'travesseiro':
            return (<View>
                <Controller
                    name="tecido"
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: {onChange, value} }) => <Select
                        onSelect={idx => onChange(idx)}
                        selectedIndex={value}
                        label={'Escolha seu tecido...'}
                        value={value && Tecidos[value.row]}
                        style={{marginVertical: 6}}
                    >
                        {Tecidos.map(tecido => <SelectItem key={tecido} title={<Text>{tecido}</Text>} />)}
                    </Select>}
                />
                {errors.tecido && <Text status='danger' appearance='alternative'>Escolha um tecido!</Text>}
            </View>)
        default:
            return <></>
    }

}

export default ItemModalForm
