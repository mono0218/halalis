import React from "react";
import {
    Text,
    Link,
    NativeBaseProvider,
    VStack,
    Box,
    Pressable,
} from "native-base";

const data =[
    {langName:"日本語",lang:"Japanese"},
    {langName:"English",lang:"English"},
    {langName:"中文",lang:"Chinese"},
]

const info = {
    lang:"",
    attribute:[],
    allergy:[],
    custom:"",
    face:[],
}

const MainScreen: () => Node = (props) => {
    return (
        <NativeBaseProvider>
            <Text textAlign={"center"} mb={20} fontSize={100}>HALALIS</Text>
            <VStack space={6} alignItems="center">
                {data.map((_data)=>
                    <Box alignItems="center" key={_data.lang}>
                        <Pressable onPress={() => {
                            info.lang = _data.lang
                            props.navigation.navigate('AttributeScreen',info)
                        }} borderWidth="3" borderColor="black" w="96" shadow="3" bg="white" p="5">

                            <Box>
                                <Text color="coolGray.800" fontWeight="medium" fontSize="6xl">
                                    {_data.langName}
                                </Text>
                            </Box>
                        </Pressable>
                    </Box>
                )}
            </VStack>
        </NativeBaseProvider>
    );
};
export default MainScreen;