import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const CardWrapper = ({ heading, title, children }) => {
  return (
    <Card>
      <CardHeader>
        <h1 className="font-semibold tracking-tight text-2xl">{heading}</h1>
        <p className="text-sm text-muted-foreground">{title}</p>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
