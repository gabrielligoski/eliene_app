import {Stack} from "expo-router";
import * as eva from "@eva-design/eva";
import {ApplicationProvider, Button, Icon, IconRegistry} from "@ui-kitten/components";
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {Image} from "react-native";
import React from "react";

export default function RootLayout() {
    return (
        <>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
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
                            />
                        ),
                    }} name="index"/>
                </Stack>
            </ApplicationProvider>
        </>
    );
}
