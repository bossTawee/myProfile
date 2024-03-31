import { AspectRatio, BoxProps, Image } from "@chakra-ui/react"

export const Carousel:React.FC<BoxProps> = ({ ...props }: BoxProps) => { return ( 
    <AspectRatio maxW='400px' ratio={1} {...props}>
        <Image src='https://bit.ly/naruto-sage' alt='naruto' objectFit='cover' />
    </AspectRatio>
)}