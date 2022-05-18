import Banner from "../../atoms/Banner";
import Button from "../../atoms/Button/Button";
import { CarIcon } from "../../atoms/Vectors/CarIcon";
import { FlowerIcon } from "../../atoms/Vectors/FlowerIcon";
import { StarIcon } from "../../atoms/Vectors/StarIcon";
import Layout from "../../templates/layout/Layout";
import "./Hompage.css";

const Homepage = () => {
    const banners = [
        {
            title: "Mangoes",
            imageSrc: "https://cdn.shopify.com/s/files/1/3028/7274/files/Mangoes_693da4f2-3436-416d-8edf-c69b3215794e_600x.jpg?v=1652456616"
        },
        {
            title: "Gifts",
            imageSrc: "https://cdn.shopify.com/s/files/1/3028/7274/files/Gifts_600x.jpg?v=1652456684"
        },
        {
            title: "Carriebean",
            imageSrc: "https://cdn.shopify.com/s/files/1/3028/7274/files/Caribbean_600x.jpg?v=1652456647"
        },
    ]

  return (
    <Layout className=" py-5 homepage">
      <section className="d-flex justify-content-around message-bar">
        <div className="py-2 gap-2 d-flex align-items-center">
        <CarIcon />
          <p class="m-0">
            <span class="rr-message-bar-message">
              Home of Hard-To-Find Ingredients
            </span>
          </p>
        </div>

        <div className="py-2 gap-2 d-flex align-items-center">
        <FlowerIcon />
        <p class="m-0">
            <span class="rr-message-bar-message">
              Home of Hard-To-Find Ingredients
            </span>
          </p>
        </div>

        <div className="py-2 gap-2 d-flex align-items-center">
        <StarIcon />
        <p class="m-0">
            <span class="rr-message-bar-message">
              Home of Hard-To-Find Ingredients
            </span>
          </p>
        </div>
      </section>

      <section className="container mt-4 px-0">
          <div className="slide1 p-5 text-white">
              <div>
                <h2 className="border-bottom pb-3">Fire Up Your BBQ!</h2>
                <p>Upgrade your grilling game by making <br/>
the unusual usual this BBQ season!</p>
                <Button title={"SHOP NOW"} pl="30px" pr={"25px"} bRadius="8px" bgColor="white" color="black"/>
                </div>
          </div>

          <div className="d-flex justify-content-center flex-wrap mx-auto mt-5">
                    {
                        banners.map((banner, index) => (
                            <div key={index} className="mb-4 mx-3">
                                <Banner imageSrc={banner.imageSrc} title={banner.title} />

                            </div>
                        )
                        )
                    }
                </div>
      </section>

      <section className="product-reccomendation my-5">
          <div className="d-flex justify-content-center gap-3 flex-wrap">
          <Button title={"Recently viewed"} bRadius="15px" />
                <Button title={"Choosing for you"} bRadius="15px" bgColor={"white"} color={"#dbdbdb"} border="1px solid #dbdbdb" />
                <Button title={"Best sellers"} bRadius="15px" bgColor={"white"} color={"#dbdbdb"} border="1px solid #dbdbdb" />
                <Button title={"New"} bRadius="15px" bgColor={"white"} color={"#dbdbdb"} border="1px solid #dbdbdb" />
          </div>
      </section>
    </Layout>
  );
};

export default Homepage;
