import { Link } from "react-router-dom";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/form/Input";
import "./Footer.css"

const Footer = () => {
  const footerLinks = [
    {
      title: "Information",
      subtitle: [
        {
          name: "About us",
          link: "/pages/about-us",
        },
        {
          name: "Blog",
          link: "/pages/blog",
        },
        {
          name: "Wholesale Enquiry",
          link: "/pages/wholesale-enquiry",
        },
        {
          name: "Sitemp",
          link: "/pages/sitemap",
        },
      ],
    },
    {
      title: "Customer Resources",
      subtitle: [
        {
          name: "Cancellation Policy",
          link: "/pages/cancellation-policy",
        },
        {
          name: "Delivery Poicy",
          link: "/pages/delivery-policy",
        },
        {
          name: "Return Policy",
          link: "/pages/return-policy",
        },
        {
          name: "Terms & Condition",
          link: "/pages/terms-condition",
        },
        {
          name: "Privacy Policy",
          link: "/pages/privacy-policy",
        },
      ],
    },
  ];
  return (
    <footer className="">
        <div className="container">

        <div className="d-flex col-12 justify-content-between flex-wrap">
        {footerLinks.map(({ title, subtitle }, index) => (
          <div className="mx-2">
            <h4>{title}</h4>
            <ul>
              {subtitle.map((item) => (
                <li>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="contact mx-2">
          <h4>Contact us</h4>
          <ul>
            <li>
              <strong>Email</strong> : hello@redrickshaw.com
            </li>
            <li>
              <strong>Call</strong> : 0207 993 4988,
              <br />
              Monday - Friday,
              <br />
              9am to 6pm{" "}
            </li>
          </ul>
        </div>

        <div className="Newsletter mx-2">
          <h4>Sign up to our Newsletter</h4>
          <div className="sign-up-form">
            <form className="row gap-3">
              <div>
                <Input placeholder="Enter your email here" />
              </div>
              <div>
                <Button title={"SIGN UP"} pl="30px" pr={"25px"} bRadius="8px" />
              </div>
            </form>
            <small>
              <span
                class="ql-font-helvetica"
                // style="font-size: 10px; background-color: rgba(95, 70, 70, 0); color: rgb(0, 0, 0);"
              >
                {" "}
              </span>
              <span
                // style="font-size: 10px; background-color: rgba(95, 70, 70, 0); color: rgb(0, 0, 0);"
                class="ql-font-sofia-pro-regular"
              >
                By signing up, you're agreeing to our{" "}
              </span>
              <a
                href="https://www.redrickshaw.com/pages/privacy-policy"
                target="_blank" rel="noreferrer"
                // style="font-size: 10px; background-color: rgba(95, 70, 70, 0); color: rgb(0, 0, 0);"
              >
                Privacy Policy
              </a>
              <span
                // style="font-size: 10px; background-color: rgba(95, 70, 70, 0); color: rgb(0, 0, 0);"
                class="ql-font-sofia-pro-regular"
              >
                {" "}
                and{" "}
              </span>
              <a
                href="https://www.redrickshaw.com/pages/terms-conditions"
                target="_blank" rel="noreferrer"
                // style="font-size: 10px; background-color: rgba(95, 70, 70, 0); color: rgb(0, 0, 0);"
              >
                Terms &amp; Conditions
              </a>
              <span
                // style="font-size: 10px; background-color: rgba(95, 70, 70, 0); color: rgb(0, 0, 0);"
                class="ql-font-sofia-pro-regular"
              >
                . You can unsubscribe at any time.
              </span>
            </small>
          </div>
        </div>
      </div>

      <div></div>
        </div>

    </footer>
  );
};

export default Footer;
