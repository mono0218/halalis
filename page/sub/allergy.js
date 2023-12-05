import React from "react";
import {Box, Checkbox, NativeBaseProvider, Pressable, Row, Text, VStack,} from "native-base";

const data =[
    {allergyName:"えび",allergy:"shrimp"},
    {allergyName:"かに",allergy:"crab"},
    {allergyName:"くるみ",allergy:"walnut"},
    {allergyName:"小麦",allergy:"wheat"},
    {allergyName:"蕎麦",allergy:"soba"},
    {allergyName:"卵",allergy:"egg"},
    {allergyName:"乳",allergy:"milk"},
    {allergyName:"落花生",allergy:"peanut"},
]

const AllergyScreen: () => Node = (props) => {
    const info =props.route.params
    info.allergy.splice(0);
    console.log(info.allergy)
    return (
        <NativeBaseProvider>
            <Text textAlign={"center"} mb={10} fontSize={100}>HALALIS</Text>
            <Text　textAlign={"center"} fontSize={25}>この中に該当するアレルギーはありますか？</Text>

            <VStack space={6} alignItems="center">
                {data.map((_data)=>
                    <Box alignItems="center" key={_data.allergy}>
                        <Pressable  borderWidth="3" borderColor="black" w="96" shadow="3" bg="white" p="5">
                            <Row alignItems={"center"}>
                                <Checkbox　 id={_data.allergy} value={_data.allergy} onChange={state => {changeCheckbox(state,_data.allergy,info)}} />
                                <Box>
                                    <Text color="coolGray.800" fontWeight="medium" fontSize="4xl">
                                        {_data.allergyName}
                                    </Text>
                                </Box>
                            </Row>
                        </Pressable>
                    </Box>
                )}
                <Row>
                    <Box alignItems="center">
                        <Pressable onPress={() => props.navigation.navigate('AttributeScreen',info)} borderWidth="3" borderColor="black" w="48" shadow="3" bg="white" p="5">
                            <Box>
                                <Text color="coolGray.800" fontWeight="medium" fontSize="4xl">
                                    戻る
                                </Text>
                            </Box>
                        </Pressable>
                    </Box>

                    <Box alignItems="center">
                        <Pressable onPress={() => props.navigation.navigate('CustomScreen',info)} borderWidth="3" borderColor="black" w="48" shadow="3" bg="white" p="5">
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

function changeCheckbox(boolean,allergy,info){
    if(boolean){
        info.allergy.push(allergy)
    }else{
        info.allergy.splice(info.allergy.indexOf(allergy), 1)
    }
}

export default AllergyScreen;