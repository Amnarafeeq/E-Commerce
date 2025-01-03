import "./style.css";
import Div1 from "./div1";
import Div2 from "./div2";

const ProductPage = () => {
  return (
    <>
      <Div1
        img1="/Images/blush1.jpeg"
        img2="/Images/blush6.jpeg"
        img3="/Images/blush2.png"
        para=" Add a pop of color to your cheeks with our perfect blush—click 'View All' to explore!"
        btnText="View All"
        link="/products"
      />
      <Div2
        img1="/Images/bronze1.jpeg"
        img2="/Images/bronze2.jpeg"
        img3="/Images/bronze3.jpeg"
        para="Get that sun-kissed glow with our must-have bronzer—click 'View All' to discover your shade!"
        btnText="View All"
        link="/bronze"
      />
      <Div1
        img1="/Images/eyebrow1.jpeg"
        img2="/Images/eyebrow2.jpeg"
        img3="/Images/eyebrow3.jpeg"
        para="Frame your face with our ultimate eyebrow collection—click 'View All' to discover!"
        btnText="View All"
        link="/eyebrow"
      />
      <Div2
        img1="/Images/eyeliner1.jpeg"
        img2="/Images/eyeliner2.jpeg"
        img3="/Images/eyeliner3.jpeg"
        para="From subtle lines to dramatic wings, we’ve got the eyeliner for you—click 'View All' to shop!"
        btnText="View All"
        link="/eyeliner"
      />
      <Div1
        img1="/Images/eyeshadow1.jpeg"
        img2="/Images/eyeshadow2.jpeg"
        img3="/Images/eyeshadow3.jpeg"
        para="Unleash your creativity with our richly pigmented eyeshadows—click 'View All' to explore the range!"
        btnText="View All"
        link="/eyeshadow"
      />
      <Div2
        img1="/Images/foundation1.jpeg"
        img2="/Images/foundation2.jpeg"
        img3="/Images/foundation3.jpeg"
        para="Smooth, radiant skin starts here—click 'View All' to shop our foundation collection!"
        btnText="View All"
        link="/foundation"
      />
      <Div1
        img1="/Images/lipliner1.jpeg"
        img2="/Images/lipliner2.jpeg"
        img3="/Images/lipliner3.jpeg"
        para="Define your lips beautifully with our perfect lipliners—click 'View All' to explore every shade!"
        btnText="View All"
        link="/lipliner"
      />
      <Div2
        img1="/Images/lipstick1.jpeg"
        img2="/Images/lipstick2.jpeg"
        img3="/Images/lipstick3.jpeg"
        para="Add a touch of glam with our creamy, long-lasting lipsticks—click 'View All' to see more!"
        btnText="View All"
        link="/lipstick"
      />
      <Div1
        img1="/Images/mascara1.jpeg"
        img2="/Images/mascara2.jpeg"
        img3="/Images/mascara3.jpeg"
        para="Achieve dramatic eyes with our long-lasting mascaras—click 'View All' to find your favorite!"
        btnText="View All"
        link="/mascara"
      />
      <Div2
        img1="/Images/nailpaint1.jpeg"
        img2="/Images/nailpaint2.jpeg"
        img3="/Images/nailpaint3.png"
        para="From classic to trendy hues—find your perfect nail paint—click 'View All' to see more!"
        btnText="View All"
        link="/nailpolish"
      />
    </>
  );
};

export default ProductPage;
