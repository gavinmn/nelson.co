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
      <div className="image-container">
        <Image
          src={props.src}
          alt=""
          width={816}
          heigh={294}
          layout="fixed"
          placeholder="blur"
        />
      </div>

      <div className="bottom">
        <div className="text">
          <h3 className="header">{props.title}</h3>
          <p className="subtext">{props.subtitle}</p>
        </div>
        {props.children}
      </div>
      <style jsx>{`
      
      .card-base, .card-base-wide {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 100%;
        padding-bottom: 8px; 
        overflow: hidden;
      }

      .image-container {
       height: 294px;
       display: flex;
       flex-direction: column;
       align-items: center;
       align-self: stretch;
       border-radius: 4px;
       overflow: hidden;
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
       color: var(--text-accent);
       font-size: var(--small);
      }
      
      .header {
       margin: 0;
       color: var(--text-primary);
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
    </div>
  )
}

export default Card
