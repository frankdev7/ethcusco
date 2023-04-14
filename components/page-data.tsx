import { Footer } from "./footer";
import { Illustration } from "./illustration";

interface Props {
  temperature: string;
}
export function PageData({ temperature }: Props) {

  return (
    <>
      <main>
        <a
          target="_blank"
          href="https://chatg.pt/weather"
          rel="noreferrer"
          className="pill"
        >
          Simonxpe
        </a>
        <h1>ETH Cusco</h1>
        <p className="description">
          Smoke Detector
        </p>
        <Illustration />
        <div className="meta">
          <div className="info">
            <span>Your Location</span>
            <span className="region">
              <strong>Cusco</strong>
            </span>
          </div>
          <div className="info">
            <span>Current Temperature</span>
            <strong>
              {temperature}
            </strong>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
