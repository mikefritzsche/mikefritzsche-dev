import Card from "./Card";
import CardBody from "./CardBody.jsx";
import CardHeader from "./CardHeader.jsx";
import CardFooter from "./CardFooter.jsx";

import '../services.scss';

const services = [
  {
    title: 'Website Design/Development',
    description: '',
    image: ''
  },
  {
    title: 'Social Media Management',
    description: '',
    image: ''
  },
  {
    title: 'Mobile App Development',
    description: '',
    image: ''
  },
  {
    title: '',
    description: '',
    image: ''
  },
]
const Services = () => {
  return (
    <>
      <h1>Services</h1>
      <div className="services-container">
        <Card>
          <CardHeader className="services-card services-card__header">
            Header
          </CardHeader>
          <CardBody className="services-card service-card__body">
            Service #1
          </CardBody>
          <CardFooter className="services-card service-card__footer">
            Footer
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="services-card services-card__header">
            Header
          </CardHeader>
          <CardBody className="services-card service-card__body">
            Service #1
          </CardBody>
          <CardFooter className="services-card service-card__footer">
            Footer
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="services-card services-card__header">
            Header
          </CardHeader>
          <CardBody className="services-card service-card__body">
            Service #1
          </CardBody>
          <CardFooter className="services-card service-card__footer">
            Footer
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="services-card services-card__header">
            Header
          </CardHeader>
          <CardBody className="services-card service-card__body">
            Service #1
          </CardBody>
          <CardFooter className="services-card service-card__footer">
            Footer
          </CardFooter>
        </Card>
      </div>
    </>
  )
}

export default Services
