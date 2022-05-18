import Banner from "../../atoms/Banner"
import Input from "../../atoms/form/Input"
import SearchInput from "../../atoms/form/SearchInput"
import Layout from "../../templates/layout/Layout"
import Button from "../../atoms/Button/Button"

const AllComponents = () => {

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
        <Layout>
    <div className="d-flex flex-column gap-5 col-4">
                <Button title={"SIGN UP"} pl="30px" pr={"25px"} />
                <Button title={"Recently viewed"} bRadius="15px" />
                <Button title={"Choosing for you"} bRadius="15px" bgColor={"white"} color={"#dbdbdb"} border="1px solid #dbdbdb" />
                <Button title={"Best sellers"} bRadius="15px" bgColor={"white"} color={"#dbdbdb"} border="1px solid #dbdbdb" />


                <Input type={"text"} placeholder="Enter your email here" />
                <SearchInput placeholder="Search here" />


                <div className="d-flex gap-3 flex-wrap">
                    {
                        banners.map((banner, index) => (
                            <div key={index}>
                                <Banner imageSrc={banner.imageSrc} title={banner.title} />

                            </div>
                        )
                        )
                    }
                </div>

            </div>
        </Layout>
    )
}

export default AllComponents ;