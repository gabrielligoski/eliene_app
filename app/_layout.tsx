import {Stack} from "expo-router";
import * as eva from "@eva-design/eva";
import {ApplicationProvider, Button, Icon, IconRegistry} from "@ui-kitten/components";
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {Image} from "react-native";
import {Provider} from 'react-redux'
import React, {useState} from "react";
import {store} from "@/app/store/store";
import ShoppingCartModal from "@/components/ShoppingCartModal";

export default function RootLayout() {
    const [cartOpen, setCartOpen] = useState(false)

    return (
        <>
            <IconRegistry icons={EvaIconsPack}/>
            <Provider store={store}>
                <ApplicationProvider {...eva} theme={eva.light}>
                    <ShoppingCartModal cartOpen={cartOpen} setCartOpen={setCartOpen} />
                    <Stack>
                        <Stack.Screen options={{
                            headerTitle: (props) => <Image style={{
                                width: 72,
                                height: 72,
                                objectFit: 'cover',
                            }} source={require('@/assets/images/logo.png')}
                                                           alt="Logo"/>,
                            headerRight: () => (
                                <Button
                                    appearance='ghost'
                                    status='danger'
                                    accessoryLeft={<Icon name='shopping-cart'/>}
                                    onPress={() => setCartOpen(true)}
                                />
                            ),
                        }} name="index"/>
                    </Stack>
                </ApplicationProvider>
            </Provider>
        </>
    );
}
