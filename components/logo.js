import { Heading } from '@chakra-ui/react'
import Link from 'next/link'


const Logo = () => {
    return (
        <Link href="/">
            <a>
                <Heading as="h1" size="sm" color="gray.400">Altered Escape</Heading>
            </a>
        </Link>
    )
    
}

export default Logo