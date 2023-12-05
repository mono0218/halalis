import React from "react";
import {Box, Checkbox, NativeBaseProvider, Pressable, Row, Text, VStack,} from "native-base";

const data =[
    {attributeName:"ヒンドゥー教",attribute:"Japanese"},
    {attributeName:"イスラム教",attribute:"English"},
    {attributeName:"ユダヤ教",attribute:"Chinese"},
    {attributeName:"ビーガン",attribute:"a"},
]
const AttributeScreen: () => Node = (props) => {
    const info =props.route.params
    info.attribute.splice(0);
    console.log(info.lang)
    return (
        <NativeBaseProvider>
            <Text textAlign={"center"} mb={10} fontSize={100}>HALALIS</Text>
            <Text　textAlign={"center"} fontSize={25}>この中に該当するものはありますか？</Text>

            <VStack space={6} alignItems="center">
                {data.map((_data)=>
                    <Box alignItems="center" key={_data.attribute}>
                        <Pressable borderWidth="3" borderColor="black" w="96" shadow="3" bg="white" p="5">
                            <Row alignItems={"center"}>
                                <Checkbox　 id={_data.attribute} value={_data.attribute+"b"} onChange={state => {changeCheckbox(state,_data.attribute,info)}} />
                                <Box>
                                    <Text color="coolGray.800" fontWeight="medium" fontSize="4xl">
                                        {_data.attributeName}
                                    </Text>
                                </Box>
                            </Row>
                        </Pressable>
                    </Box>
                )}
                <Row>
                    <Box alignItems="center">
                        <Pressable onPress={() => props.navigation.navigate('MainScreen',info)} borderWidth="3" borderColor="black" w="48" shadow="3" bg="white" p="5">
                            <Box>
                                <Text color="coolGray.800" fontWeight="medium" fontSize="4xl">
                                    戻る
                                </Text>
                            </Box>
                        </Pressable>
                    </Box>

                    <Box alignItems="center">
                        <Pressable onPress={() => props.navigation.navigate('AllergyScreen',info)} borderWidth="3" borderColor="black" w="48" shadow="3" bg="white" p="5">
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
    );
};

function changeCheckbox(boolean,attribute,info){
    if(boolean){
        info.attribute.push(attribute)
    }else{
        info.attribute.splice(info.attribute.indexOf(attribute), 1)
    }
}

export default AttributeScreen;