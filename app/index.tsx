import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Card from "@/components/Card";
import {Modal, Text, Button, Card as KittenCard, Select, SelectItem, Input} from "@ui-kitten/components";
import ItemModalForm, {Tamanhos, Tecidos} from "@/components/ItemModalForm";
import {Controller, useForm} from "react-hook-form";
import {useAppDispatch} from "@/app/store/hooks";
import {addToCart, ShoppingCartItem} from "@/app/store/shoppingCartReducer";

const AlmofadaDescription = [
    'Escolha o tecido',
    'Escolha o tamanho',
]

const TravesseiroDescription = [
    'Escolha o tecido',
    'Escolha o tamanho',
]

const SaiaDeMesaDescription = [
    'Escolha o tecido',
]

const Home = () => {
    const dispatch = useAppDispatch()

    const { formState:{ errors }, handleSubmit, control, reset } = useForm()
    const [selectedItem, setSelectedItem] = useState<string>('');
    const [itemDetailsOpen, setItemDetailsOpen] = useState(false);

    const onSubmit = (data: any) => addItemToCart(data);

    const handlePress = (item: string) => {
        setSelectedItem(item)
        setItemDetailsOpen(true)
    }

    const addItemToCart = (item: any) => {
        const formatItem: ShoppingCartItem = {
            quantidade: item?.quantidade,
            ...(item?.tecido?.row && {tecido: Tecidos[item.tecido.row],}),
            ...(item?.tamanho?.row && {tamanho: Tamanhos[item.tamanho.row],}),
            tipo: selectedItem,
        }
        dispatch(addToCart(formatItem))
        reset()
        setItemDetailsOpen(false)
    }

    return (
        <View style={{flex: 1}}>
            <Modal
                visible={itemDetailsOpen}
                backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
                onBackdropPress={() => setItemDetailsOpen(false)}
            >
                <KittenCard>
                    <ItemModalForm selectedItem={selectedItem} control={control} errors={errors} />
                    <Controller
                        name="quantidade"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({field: {onChange, value}}) => <Input
                            keyboardType={'numeric'}
                            onChangeText={onChange}
                            label={'Escolha a quantidade...'}
                            value={value}
                            style={{marginVertical: 6}}
                        />}
                    />
                    {errors.quantidade && <Text status='danger' appearance='alternative'>Digite a quantidade!</Text>}
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 6}}>
                        <Button appearance={'ghost'} onPress={() => setItemDetailsOpen(false)}>
                            Fechar
                        </Button>
                        <Button onPress={handleSubmit(onSubmit)}>
                            Adicionar ao Carrinho
                        </Button>
                    </View>
                </KittenCard>
            </Modal>
            <ScrollView style={{display: 'flex', flex: 1, padding: 24, height: '100%'}}>
                <Card imageSource={require('../assets/images/almofadas.jpg')} title={'Almofadas'}
                      subTitle={'A partir de R$ 39,90'} description={AlmofadaDescription}
                      onPress={() => handlePress('almofada')}
                />
                <Card imageSource={require('../assets/images/travesseiros.jpg')} title={'Travesseiros'}
                      subTitle={'A partir de R$ 59,90'} description={TravesseiroDescription}
                      onPress={() => handlePress('travesseiro')}/>
                <Card imageSource={require('../assets/images/saia-de-mesa.jpg')} title={'Saia de mesa'}
                      subTitle={'A partir de R$ 29,90'} description={SaiaDeMesaDescription}
                      onPress={() => handlePress('saia-de-mesa')}/>
            </ScrollView>
        </View>
    )
};

export default Home
