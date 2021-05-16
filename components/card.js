import Image from "next/image"
import { device } from "@/components/device"

const Card = props => {
  let doubleWidth = false

  if (props.width == "double") {
    doubleWidth = true
  } else {
    doubleWidth = false
  }

  return (
    <div
      className={doubleWidth ? "card-base-wide" : "card-base"}
      width={props.width}
    >
      <style jsx>{`
      
      .card-base, .card-base-wide {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background-color: var(--primary-200);
        border-radius: 8px;
        max-width: 100%;
        padding-bottom: 8px; 
        overflow: hidden;
      }
      
      .image-container {
       height: 294px;
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       align-items: center;
       align-self: stretch;
       flex-grow: 0;
       box-shadow: 0px 4px 0px var(--primary-100);
       background-color: var(--primary-200); 
      }
      
      .bottom {
       display: flex;
       flex-grow: 0;
       flex-direction: row;
       align-items: center;
       padding: 0px 1rem;
       margin-top: 12px;
       align-self: stretch;
        
      }
      
      .text {
       display: flex;
       flex-grow: 1;
       flex-direction: column;
       align-items: flex-start;
       margin-right: 8px; 
      }
      
      .subtext {
       font-size: var(--small);
       line-height: var(--lh-xs);
       color: var(--text-accent); 
      }
      
      .header {
       margin: 0; 
      }
      
      @media ${device.desktop} {
        .card-base-wide {
          max-width: 816px;
          grid-column: 1 / span 2; 
        }
        
        .card-base {
         max-width: 408px; 
         grid-column: ;
        }
        
       .bottom {
           padding: 0px 0.5rem;
         }
      }    
    
    `}</style>
      <div className="image-container">
        <Image
          src={props.imageSrc}
          alt=""
          width={`${props.imageWidth}`}
          height={`${props.imageHeight}`}
          layout="fixed"
        />
      </div>
      <div className="bottom">
        <div className="text">
          <h2 className="header">{props.title}</h2>
          <p className="subtext">{props.subtitle}</p>
          <p className="subtext">
            <i>{props.time}</i>
          </p>
        </div>
        {props.children}
      </div>
    </div>
  )
}

export default Card
