import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Expenses from "./Expenses"
import { GrMoney } from "react-icons/gr";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import Display from "./Display";
import Transactions from "./Transactions";
import Footer from "./Footer";
import { FcDebt } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";




function Body() {
    return (
        <>
        <Box px='8' mt='10'>
            <Heading fontSize={['3xl', '3xl', '5xl']}>Dashboard</Heading>
            <Text fontSize={['base', 'base', 'xl']} pt='4'>Monitor your financial activities</Text>
            
            <Flex gap='6' mt='8' flexDirection={['column', 'column', 'column', 'row']} justify={'space-between'}> 
            
                <Expenses amount={'100,000.00'} color="green.500" title="Your Total Balance" iconPercent={<FaArrowUp />} symbol={<GrMoney />} percentAmount={10.9} />

                <Expenses amount={'150,000.00'} color="green.500" title="Total Income" iconPercent={<FaArrowUp />} symbol={<FcMoneyTransfer />
} percentAmount={8.9} />

                <Expenses amount={'50,000.00'} color="red.500" title="Total Expense" iconPercent={<FaArrowDown />} symbol={<FcDebt />} percentAmount={8.9} />
            </Flex>

            <Display />
            <Transactions />
        </Box>
        <Footer />
        </>
    )
}

export default Body