import Header from '../header'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as="main">
            <Header/>

            <Container as="children-content">
                {children}
            </Container>
        </Box>
    )
}

export default Main