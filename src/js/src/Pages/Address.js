import Container from "../UI/Container";
import classes from "./Address.module.css";
import Card from "../UI/Card";
const Address = () => {
  const DUMMY_ADDRESS = [
    {
      address: "Vamhaz korut 11",
      link:"https://goo.gl/maps/S2RQFiFq7AvNNeeB6",
      iframeSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.0985084517088!2d19.057540915549612!3d47.48799430415714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc5aa4559df1%3A0x2b4f30e1e650f417!2zQnVkYXBlc3QsIFbDoW1ow6F6IGtydC4gMTEsIDEwOTQ!5e0!3m2!1saz!2shu!4v1664977342473!5m2!1saz!2shu",
    },
    {
      address: "Stollar Bela 12B",
      link:"https://goo.gl/maps/kzgNtqPeNZdC2Yt2A",
      iframeSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.960765203409!2d19.049499315550257!3d47.51015530262875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc0de17ce883%3A0x97d5163cb11520a!2sBudapest%2C%20Stoll%C3%A1r%20B%C3%A9la%20u.%2012%2C%201055!5e0!3m2!1saz!2shu!4v1664977640422!5m2!1saz!2shu",
    },
  ];

  return (
    <section>
      <Container>
        <Card>
          <div className="allAddress">
            <h1 className={classes.title}>Our Addresses</h1>
            {DUMMY_ADDRESS.map((item) => {
              return (
                <div key={item.link}>
                  <div className={classes.singleAddress}>
                    <h2>{item.address}</h2>
                    <a href={item.link}>Google Maps</a>
                  </div>
                  <iframe
                     title="myFrame"
                    src={item.iframeSrc}
                    width="600"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              );
            })}
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default Address;
