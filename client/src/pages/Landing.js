import React from 'react'
import styled from 'styled-components'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'



const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt='job' className='logo' />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
                        bottle single-origin coffee chia. Aesthetic post-ironic venmo,
                        quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
                        narwhal.
                    </p>
                    <button className='btn btn-hero'> Login/rg</button>
                    <btn> hello </btn>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.main`
nav {
    border:solid 1px;
}
.btn {
    color: green;
}
@media (max-width: 700px){
    .body {
        background-color: red;
        color: green;
    }
}
`

export default Landing