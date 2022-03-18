import Feature from '../../components/feature/Feature';
import { featuresData } from '../../database/featureData';

const Features = () => {
   return (
      <section className="gpt3__features section__padding" id="features">
         <div className="gpt3__featured-heading">
            <h1 className="gradient__text">
               The Future is Now and You Just Need to Realize It. Step into
               Future Today. & Make it Happen.  
            </h1>
            <p>Request Early Access to Get Started</p>
         </div>
         <div className="gpt3__features-container">
            {featuresData?.map((features) => (
               <Feature key={features.id} {...features} />
            ))}
         </div>
      </section>
   );
};

export default Features;
