import NextLink from 'next/link'
import { 
    Container,
    Box,
    Heading } from "@chakra-ui/react"

import Section from "../components/section"

const Page = () => {
    return( 
    <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
            Olá, Eu sou um Desenvolvedor Web em Portugal!
        </Box>

        <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    João Vitor Sasso
                </Heading>
            <p>Pedreiro Digital ( Artista / Programador / Designer )</p>    
            </Box>
        </Box>
    </Container>
    )
}
export default Page