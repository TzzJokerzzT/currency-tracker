import { Card } from "./card/index";

const CardComponent = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <Card className={className}>
      {children}
    </Card>
  );
};

export default CardComponent;
