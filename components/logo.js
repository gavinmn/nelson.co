import Ztext from "react-ztext"
import { device } from "./device"

const Logo = props => (
  <div className="container">
    <style jsx>{`
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }

      .svg {
        width: 74px;
        height: 74px;
      }

      @media ${device.desktop} {
        .conatiner {
          justify-content: start;
        }

        .svg {
        }
      }
    `}</style>

    {/* <Ztext
      depth=".4rem"
      direction="both"
      event="pointer"
      eventRotation="18deg"
      eventDirection="default"
      fade={false}
      layers={15}
      perspective="500px"
    > */}
    {/* <svg className="svg" viewBox="0 0 210 190" version="1.1">
      <path
        d="M154.503 0.034373C153.399 -0.00375831 152.5 0.895252 152.5 1.99982V188C152.5 189.104 153.399 190.003 154.503 189.965C185.056 188.91 209.5 163.809 209.5 133V56.9998C209.5 26.1902 185.056 1.08972 154.503 0.034373Z"
        fill="var(--logo-primary)"
      />
      <path
        d="M76.5 1.99983C76.5 0.895256 77.3995 -0.00375828 78.5034 0.0343731C109.056 1.08972 133.5 26.1902 133.5 56.9998V188C133.5 189.104 132.601 190.003 131.497 189.965C100.944 188.91 76.5 163.809 76.5 133V1.99983Z"
        fill="var(--logo-primary)"
      />
      <path
        d="M55.4966 0.0343731C56.6005 -0.00375828 57.5 0.895256 57.5 1.99983V112C57.5 113.104 56.6005 114.003 55.4966 113.965C24.9442 112.91 0.5 87.8095 0.5 56.9998C0.5 26.1902 24.9442 1.08972 55.4966 0.0343731Z"
        fill="var(--logo-primary)"
      />
      <path
        d="M2.5 133C1.39543 133 0.496417 133.899 0.534548 135.003C1.56692 164.891 25.6091 188.933 55.4966 189.965C56.6005 190.003 57.5 189.104 57.5 188V135C57.5 133.895 56.6046 133 55.5 133H2.5Z"
        fill="var(--logo-primary)"
      />
    </svg> */}
    {/* </Ztext> */}

    <svg
      width="62"
      height="58"
      viewBox="0 0 62 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 34C18 35.1046 17.1011 36.0117 16.0032 35.8905C7.00176 34.8971 0 27.2662 0 18C0 8.73379 7.00176 1.10293 16.0032 0.109504C17.1011 -0.011665 18 0.895431 18 2V34Z"
        fill="var(--text-primary)"
      />
      <path
        d="M16 40C17.1046 40 18 40.8954 18 42V56C18 57.1046 17.1011 58.0117 16.0032 57.8905C7.65739 56.9694 1.03058 50.3426 0.109504 41.9968C-0.011665 40.8989 0.895431 40 2 40L16 40Z"
        fill="var(--text-primary)"
      />
      <path
        d="M44 1.43283C44 0.6415 44.6415 0 45.4328 0V0C54.5826 0 62 7.41737 62 16.5672V32.4328C62 41.5826 54.5826 49 45.4328 49V49C44.6415 49 44 48.3585 44 47.5672V1.43283Z"
        fill="var(--text-primary)"
      />
      <path
        d="M22 1.43283C22 0.6415 22.6415 0 23.4328 0V0C32.5826 0 40 7.41737 40 16.5672V47.5672C40 48.3585 39.3585 49 38.5672 49V49C29.4174 49 22 41.5826 22 32.4328V1.43283Z"
        fill="var(--text-primary)"
      />
    </svg>
  </div>
)

export default Logo
