import { extendTheme } from '@chakra-ui/react'

const config = {
    initialColorMode: 'dark'
}

// Custom button styles
const Button = {
    // Styles for the base style
    baseStyle: {},
    // Styles for the size variations
    sizes: {},
    // Styles for the visual style variations
    variants: {
        navbar: {
            color: "gray.500",
            display: "inline-flex",
            alignItems: "center",
            fontSize: "md",
        }
    },
    // The default `size` or `variant` values
    defaultProps: {},
}

const Theme = extendTheme(
    { 
        config,
        components: {
            Button,
        } 
    })

export default Theme