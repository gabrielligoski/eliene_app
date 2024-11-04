import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import Card from "@/components/Card";
import {Modal, Text, Button, Card as KittenCard} from "@ui-kitten/components";
import ItemModalForm from "@/components/ItemModalForm";
import {useForm} from "react-hook-form";

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
    const { register, handleSubmit, control } = useForm()
    const [selectedItem, setSelectedItem] = useState<string>('');
    const [itemDetailsOpen, setItemDetailsOpen] = useState(false);

    const onSubmit = (data: any) => console.log(data);

    const handlePress = (item: string) => {
        setSelectedItem(item)
        setItemDetailsOpen(true)
    }

    const addItemToCart = (item: string) => {
        setSelectedItem(item)
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
                    <ItemModalForm selectedItem={selectedItem} control={control}/>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 6}}>
                        <Button appearance={'ghost'} onPress={() => setItemDetailsOpen(false)}>
                            Fechar
                        </Button>
                        <Button onPress={() => setItemDetailsOpen(false)}>
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
