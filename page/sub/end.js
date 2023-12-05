import uuid from 'react-native-uuid';
import {Box, NativeBaseProvider, Pressable, Text} from "native-base";
import React from "react";
import {firebase_add} from "../db"
const EndScreen: () => Node = (props) => {
    const info = props.route.params
    const id = uuid.v4()
    firebase_add(id, info)

    localStorage.setItem(
        "firebase_key",
        JSON.stringify({value: id})
    );
    return (
        <NativeBaseProvider>
            <Text textAlign={"center"} mb={10} fontSize={100}>HALALIS</Text>
            <Text textAlign={"center"} fontSize={25}>設定が完了しました</Text>
            <Pressable onPress={() => props.navigation.navigate('MainScreen', info)} alignItems={"center"}
                       borderWidth="3" borderColor="black" w="96" shadow="3" bg="white" p="5">
                <Box>
                    <Text color="coolGray.800" fontWeight="medium" fontSize="4xl">
                        完了
                    </Text>
                </Box>
            </Pressable>
        </NativeBaseProvider>
    )
}

export default EndScreen