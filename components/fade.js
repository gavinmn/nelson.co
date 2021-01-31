const Fade = props => (
  <div className="fade">
    <style jsx>{`
   
   .fade {
     animation: fadeIn .6s ease-out;
   }
   
   @keyframes fadeIn {
     from {
       opacity: 0;
     }

     to {
      opacity: 1;
     }
   
   `}</style>
    {props.children}
  </div>
)

export default Fade
