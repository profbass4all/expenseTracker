import { Box, Flex } from "@chakra-ui/react";
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,ArcElement, Tooltip} from "chart.js"
import { Bar, Doughnut  } from "react-chartjs-2";
ChartJS.register(CategoryScale,ArcElement, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
            label: 'Income',
            data: [2000, 4000, 3000, 7000, 2000, 5000, 8000, 9000, 1000, 2500, 6000, 10000],
            backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.27)'

                    ],
                    borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                    ],
                    hoverOffset: 4,
                    hoverBackgroundColor: '#FF8C38',
                    borderWidth: 1
            },
        ],
    } 
function Display() {
    return (
        <>
            <Flex flexDirection={['column', 'column', 'column', 'row']} mt='20' align={'center'} maxW={'37rem'} justify={['center', 'center', 'space-between']} gap='16' mb='20' >
                
                <Bar data={data} style={{marginBottom: '3rem'}} options={{
            responsive: true,
            plugins: {
                legend: {
                position: "top",
                },
            },
            scales: {
                x:{
                grid: {
                    display: false,
                    }
                },
                y: {
                beginAtZero: true,
                    grid:{
                        display: false,
                } ,
                },
            },
                
                }}/>
                <Box>
                    <Doughnut data={data}   options={{
            responsive: true,
            plugins: {
                legend: {
                position: "top",
                },
            },
            }}/>
                </Box>  
                
                
            </Flex>
        </>
    )
}

export default Display