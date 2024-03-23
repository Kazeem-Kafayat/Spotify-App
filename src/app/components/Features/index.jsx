
import { features } from './data'
export const Features = () =>{
   
    return<section>
    <h3> The power of Premium</h3>
    <div>
        {features.map((feature) => (
            <div>
            <img src={feature.image}/>
        <h5>{feature.title}</h5>
        <p>{feature.description}</p>
            </div>
        ))}
       
    </div>
    </section>
}