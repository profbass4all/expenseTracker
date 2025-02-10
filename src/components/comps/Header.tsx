import { Box, Flex, HStack, Link, VStack } from '@chakra-ui/react'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";



function Header() {

    const [ isOpen, setIsOpen ] = useState(false)

    const toggleMenu = () => setIsOpen(prev => !prev)
    console.log(isOpen)
    return (
    <>
        <Box px='8' py="4">
            <Flex justify={'space-between'} align={'center'}>
                <Box fontSize={'3xl'}>Expense Tracker</Box>

                <Box hideFrom={'lg'} fontSize={'3xl'} onClick={toggleMenu}> <GiHamburgerMenu /></Box>
                <HStack gap="8" hideBelow={'lg'}>
                    <Link href='#' variant={'underline'}>Dashboard</Link>
                    <Link href='#' variant={'underline'}>About</Link>
                    <Link href='#' variant={'underline'}>Contact</Link>
                    <Link href='#' variant={'underline'}>Info</Link>
                    <Link href='#' variant={'underline'}>Help</Link>

                </HStack>
            </Flex>
            { isOpen && <VStack gap={'4'} mt='4' align={'start'} fontSize={'xl'} hideFrom={'lg'}>
                <Link href='#'>Dashboard</Link>
                <Link href='#'>About</Link>
                <Link href='#'>Contact</Link>
                <Link href='#'>Info</Link>
                <Link href='#'>Help</Link>
            </VStack>}


        </Box>
    
    </>
    )
}

export default Header