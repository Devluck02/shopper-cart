import ProductSlider from "../../components/productSlider/ProductSlider";
import Title from "../../components/title/Title";
import ProductList from "../../components/productList/ProductList";
const Home = () => {
  return (
    <>
      <Title title="Featured Products" />
      <ProductSlider />
      <Title title="All Products" />
      <ProductList />
    </>
  );
};

export default Home;
