import NextLink from 'next/link';
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react';

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Ops! =/</Heading>
            <Text>A pagina que voce procura não foi encontrada</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <NextLink href="/" passHref>
                    <Button colorScheme="teal">Voltar para homepage</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound;