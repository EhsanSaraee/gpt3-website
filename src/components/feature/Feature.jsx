const Feature = ({ title, text }) => {
   return (
      <section className="gpt3__features-container__feature">
         <div className="gpt3__features-container__feature-title">
            <div />
            <h1>{title}</h1>
         </div>
         <div className="gpt3__features-container__feature-text">
            <p>{text}</p>
         </div>
      </section>
   );
};

export default Feature;
