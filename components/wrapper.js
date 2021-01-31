import React, { useState, useEffect } from "react"

const Wrapper = props => {
  const [large, setLarge] = useState(true)
  console.log(props)
  useEffect(() => {
    if (props.size == "small") {
      setLarge(false)
    } else {
      setLarge(true)
    }
  }, [props.size])

  return (
    <div size={props.size} className={large ? "large" : "small"}>
      {props.children}
      <style jsx>{`
        .large {
          max-width: 816px;
          padding: 0 5% 0 5%;
          margin: 0 auto;
        }

        .small {
          max-width: 624px;
          padding: 0;
          margin: 0 auto;
        }
      `}</style>
    </div>
  )
}

export default Wrapper
