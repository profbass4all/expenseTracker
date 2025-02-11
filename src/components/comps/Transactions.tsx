import { Heading, Table } from "@chakra-ui/react"

function Transactions() {

    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});
    return (
    <>
    <Heading fontSize={'3xl'} mb={'10'}>Latest Trasactions</Heading>
    <Table.Root size="sm">
        <Table.Header>
            <Table.Row>
                <Table.ColumnHeader>Date</Table.ColumnHeader>
                <Table.ColumnHeader>Product</Table.ColumnHeader>
                <Table.ColumnHeader>Category</Table.ColumnHeader>
                <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {items.map((item) => (
            <Table.Row key={item.id}>
                <Table.Cell >{item.date}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell textAlign="end">{formatter.format(item.price)}</Table.Cell>
            </Table.Row>
            ))}
        </Table.Body>
    </Table.Root>
    </>
    )
}

const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99, date: '2025-02-11' },
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99, date: '2025-02-08' },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0, date: '2025-02-04' },
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99, date: '2025-02-02' },
    { id: 5, name: "Headphones", category: "Accessories", price: 199.99, date: '2025-01-30' },
]



export default Transactions