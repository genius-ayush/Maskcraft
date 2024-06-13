import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  interface EcommerceCardProps{
    imageUrl : string ; 
    productName : string ; 
    price : string ; 
    onClick : () => void ; 
  }
   
  export function EcommerceCard({imageUrl , productName , price , onClick} : EcommerceCardProps) : JSX.Element  {
    return (
      <Card className="w-96" >
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={imageUrl}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {productName}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              {price}
            </Typography>
          </div>
          
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            onClick={onClick}
          >
            Buy Now
          </Button>
        </CardFooter>
      </Card>
    );
  }