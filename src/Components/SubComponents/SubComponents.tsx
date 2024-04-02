import React from 'react'


// Container Component
interface MyContainerProps {
    children: any
}
export const Container: React.FC<MyContainerProps> = ({ children }) => {
    return (
        <div className="max-w-[1520px] mx-auto px-5">{children}</div>
    )
}


// Flex Component
interface MyFlexProps {
    children: any
    className?: string | undefined,
}
export const Flex: React.FC<MyFlexProps> = ({ children, className }) => {
    return (
        <div className={`${className} flex`}>{children}</div>
    )
}


// Image Component
interface MyImageProps {
    src: string | undefined,
    alt: string | undefined,
    className?: string | undefined,
}
export const Image: React.FC<MyImageProps> = ({ src, alt, className }) => {
    return (
        <img src={src} alt={alt} className={`${className}`} />
    )
}


// Main Heading Component
interface MyMainHeadingProps {
    className?: string | undefined,
    children: any
}
export const MainHeading: React.FC<MyMainHeadingProps> = ({ children, className }) => {
    return (
        <h1 className={`${className} text-4xl lg:text-7xl text-secondary font-bold`}>{children}</h1>
    )
}


// Common Peragraph Component
interface MyPeragraphProps {
    className?: string | undefined,
    children: any
}
export const Peragraph: React.FC<MyPeragraphProps> = ({ children, className }) => {
    return (
        <p className={`${className} text-sm lg:text-xl text-pera leading-[160%]`}>{children}</p>
    )
}


// Common Section Head Component
interface MySectionHeadProps {
    className?: string | undefined,
    name: string,
    info?: string
}
export const SectionHead: React.FC<MySectionHeadProps> = ({ name, info, className }) => {
    return (
        <>
            <h2 className='text-secondary text-3xl lg:text-6xl font-bold'>{name}</h2>
            <p className={`${className} text-base lg:text-xl text-pera leading-[160%] max-w-[470px] mt-6`}>{info}</p>
        </>
    )
}


// Common About Us Component
interface MyAboutUsProps {
    className?: string | undefined,
    name: string,
    info: string,
    count: number
}
export const AboutUsItems: React.FC<MyAboutUsProps> = ({ count, name, info, className }) => {
    return (
        <>
            <div className={`${className}`}>
                <div className='flex items-end lg:flex-col lg:items-start'>
                    <h2 className='text-primary text-4xl lg:text-6xl font-bold'>{count}</h2>
                    <h4 className='text-secondary text-xl lg:text-2xl font-bold lg:mt-5 pl-3 lg:pl-0'>{name}</h4>
                </div>
                <p className='text-pera text-base lg:text-lg mt-3 lg:mt-5'>{info}</p>
            </div>
        </>
    )
}