import Link from "next/link"

export default function CustomHeadingFour(props) {
  return (
    <>
      <h4>{props.children}</h4>

      <style jsx>{`
        h4 {
          color: tomato;
        }
      `}</style>
    </>
  )
}
