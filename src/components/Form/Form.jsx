import React, { useRef } from 'react'
import { Input, Box, Flex, useColorMode, Button, VStack } from '@chakra-ui/react';
import getSummonerData from '../../../RiotApi';
function Form() {
    const { colorMode } = useColorMode()
    const inputEl = useRef(null)
    const handleSubmit = () => {
        getSummonerData(inputEl.current.value)
    }

    return (
        <Flex direction={'column'} align={'center'} justify={'center'}>
            <h1>ReactApiLol</h1>
            <Box>
                <form action="submit">
                    <VStack m={1}>
                        <Input
                            ref={inputEl}
                            size={'lg'}
                            w={500}
                            bg={'red.400'}
                            borderRadius={25}
                            placeholder={'Invocador'}
                            _placeholder={{ color: 'black', opacity: 1 }} />
                        <Button onClick={handleSubmit} bg={colorMode === 'light' ? 'blue.300' : 'black'}>buscar</Button>
                    </VStack>
                </form>
            </Box>
        </Flex>

    )
}

export default Form