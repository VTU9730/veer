import { screen, render } from "@testing-library/react";
import About from './About'

describe('About',()=>{
    test('about renders correctly',()=>{
        render(<About />)
        const aboutElement = screen.getByText('about')
        expect(aboutElement).toBeInTheDocument()
         
    })
    test('add button renders correctly',()=>{
        render(<About />)
        
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument()
    })
})
