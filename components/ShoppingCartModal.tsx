import {Card as KittenCard} from "@ui-kitten/components/ui/card/card.component";
import {Linking, View} from "react-native";
import {Button, Icon, List, ListItem, Modal, Text} from "@ui-kitten/components";
import React from "react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {removeFromCart, ShoppingCartItem} from "@/app/store/shoppingCartReducer";

const ShoppingCartModal = ({cartOpen, setCartOpen}: any) => {
    const dispatch = useAppDispatch()
    const shoppingCart = useAppSelector(state => state.shoppingCart)

    const SendMessage = () => {
        Linking.openURL(`https://wa.me/5506496458073?text="Olá, Eliene! Estou interessada(o) em comprar,
        \n${shoppingCart.map((item: ShoppingCartItem) => `${item.quantidade} ${item.tipo}` +
            (item.tecido && `, tecido: ${item.tecido}`) +
            (item.tamanho && `, tamanho: ${item.tamanho}`) + "\n")}"`)
        setCartOpen(false)
    }

    return <Modal
        visible={cartOpen}
        backdropStyle={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
        onBackdropPress={() => setCartOpen(false)}
    >
        <KittenCard>
            {shoppingCart?.length === 0 && <Text style={{margin: 12}}>Carrinho de compras está vazio</Text>}
            <List
                data={shoppingCart}
                renderItem={({item}: { item: ShoppingCartItem }) => <ListItem
                    onPress={() => dispatch(removeFromCart(item))}
                    accessoryRight={<Icon name='trash'/>}
                    title={`${item.quantidade} ${item.tipo}`}/>}
            />
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 6}}>
                <Button appearance={'ghost'} onPress={() => setCartOpen(false)}>
                    Fechar
                </Button>
                <Button disabled={shoppingCart?.length === 0} onPress={SendMessage}>
                    Finalizar
                </Button>
            </View>
        </KittenCard>
    </Modal>
}

export default ShoppingCartModal
