import { Card, Flex, HStack, Text, VStack } from "@chakra-ui/react"


interface Card{
    amount: string;
    color: string;
    title: string;
    iconPercent: JSX.Element;
    symbol: JSX.Element;
    percentAmount: number;
}

function Expenses({ amount, color, title, iconPercent, symbol, percentAmount }: Card) {
    return (
        <Card.Root flexDirection={'row'}>
            <HStack align= 'center'>
                <Flex align={'center'} bg='gray.400' p='2' borderRadius='full' ml='4' fontSize={'3xl'} mr='-7'>
                    {symbol}
                </Flex>
            <Card.Body>
                <Card.Title fontSize={'2xs'}>{title}</Card.Title>
                <Text fontWeight ='bold' fontSize={'md'}>${amount}</Text>
            </Card.Body>
            <Flex align='center' bg='green-500'>
                <VStack gap='-5' pr='4' align={'start'}>
                    <HStack  color={color} fontSize={'sm'}>{iconPercent} {percentAmount} %</HStack>
                    <Text fontSize={'2xs'}>Compare to last year</Text>
                </VStack>
            </Flex>
            </HStack>
        </Card.Root>
    )
}

export default Expenses