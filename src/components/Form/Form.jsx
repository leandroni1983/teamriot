import React, { useRef, useEffect, useState } from 'react'
import { Input, Box, Flex, useColorMode, Button, VStack, Image } from '@chakra-ui/react';
import { sumCont } from '../../context/UserContext'
function Form() {
    const { summoner, summonerRanks, getSummonerRanks, getChampionsMaestries, getSummonerV4, championsMaestries } = sumCont()
    const { colorMode } = useColorMode()
    const inputEl = useRef(null)


    const handleSubmit = () => {
        try {
            getSummonerV4(inputEl.current.value)

        }
        catch (error) {
            console.log(error)
        }
    }
    const handleRankeds = (e) => {
        e.preventDefault()
        console.log(summoner)
        getSummonerRanks(summoner.id)
        console.log(summonerRanks)
    }
    const handleChampions = (e) => {
        e.preventDefault()
        getChampionsMaestries(summoner.id)
        console.log(championsMaestries)
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
            {JSON.stringify(summoner) != '{}'
                ? <>
                    <span>Invocador: {summoner.name}</span><br />
                    <span>Accoun Level: {summoner.summonerLevel}</span>
                    <img width={100} height={100} src={`https://ddragon.leagueoflegends.com/cdn/12.19.1/img/profileicon/${summoner.profileIconId}.png`} alt=" ProfileIcon" />
                    <Button onClick={e => handleRankeds(e)} bg={colorMode === 'light' ? 'blue.300' : 'black'}>Ranks</Button>
                    <Button onClick={e => handleChampions(e)} bg={colorMode === 'light' ? 'blue.300' : 'black'}>Champions</Button>

                </>
                : <>No data</>
            }
        </Flex>

    )
}

export default Form