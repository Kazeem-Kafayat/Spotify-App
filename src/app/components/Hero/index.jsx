import {CustomButton} from '../Button'
import style from './Hero.module.css'
// import { Component } from 'react'
export const Hero = () => {
    return( <section className={style.hero}>
        <h1 className={style.title}>Get Premium free for 1 month</h1>
        <p className={style.description}> Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
<div className={style['button-group']}>

<CustomButton onClick ={()=> {}} type ='btn' title = {''}>
Get Started
</CustomButton>

<CustomButton onClick ={()=> {}} type ='outline' title = {''}>
See Other Plans
</CustomButton>
</div>

        
        <div className={style.terms}>
            <a href="#"> Terms and conditions apply</a>
            1 month free not available for users who have already
        </div>
    </section>
    
    )
}