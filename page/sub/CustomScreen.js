import {Box, NativeBaseProvider, Pressable, Row, Text, TextArea, VStack} from "native-base";
import React from "react";

const CustomScreen: () => Node = (props) => {
    const info =props.route.params
    info.custom = ""
    return(
        <NativeBaseProvider>
            <Text textAlign={"center"} mb={10} fontSize={100}>HALALIS</Text>
            <Text　textAlign={"center"} fontSize={25}>お店側へのメッセージを記載してください</Text>
            <VStack space={6} alignItems="center">
                <TextArea w="96" onChangeText={(text)=>{info.custom = text}}/>

                <Row>
                    <Box alignItems="center">
                        <Pressable onPress={() => props.navigation.navigate('AllergyScreen',info)} borderWidth="3" borderColor="black" w="48" shadow="3" bg="white" p="5">
                            <Box>
                                <Text color="coolGray.800" fontWeight="medium" fontSize="4xl">
                                    戻る
                                </Text>
                            </Box>
                        </Pressable>
                    </Box>

                    <Box alignItems="center">
                        <Pressable onPress={() => props.navigation.navigate('EndScreen',info)} borderWidth="3" borderColor="black" w="48" shadow="3" bg="white" p="5">
                            <Box>
                                <Text color="coolGray.800" fontWeight="medium" fontSize="4xl">
                                    次へ
                                </Text>
                            </Box>
                        </Pressable>
                    </Box>
                </Row>
            </VStack>

        </NativeBaseProvider>
    )
}

export default CustomScreen;