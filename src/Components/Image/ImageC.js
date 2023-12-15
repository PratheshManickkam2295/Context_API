import Image from "react-bootstrap/Image";

function FluidImage({ imageURL = "" }) {
  return <Image src={imageURL[0]} fluid />;
}
export default FluidImage;
