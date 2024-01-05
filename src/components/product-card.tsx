import { Product } from "@/app/page";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { toast } from "sonner";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  function purchaseItem() {
    setIsDialogOpen(false);
    toast.success("Item purchased successfully!");
  }

  return (
    <>
      <Card key={product.id}>
        <CardHeader>
          <img src={product.image} alt={product.name} className="rounded-xl" />
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium">{product.name}</p>
          <p className="line-clamp-3">{product.description}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setIsDialogOpen(true)} className="w-full">
            Purchase
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={isDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Proceed with purchase?</DialogTitle>
            <DialogDescription>
              Upon successful purchase, the item will be delivered through your
              e-mail linked to this account. Note that this is a fake purchase
              screen to demonstrate shadcn/ui in action. Proceed?
            </DialogDescription>
          </DialogHeader>

          <div className="flex gap-5">
            <Button onClick={purchaseItem}>Purchase</Button>
            <Button
              onClick={() => setIsDialogOpen(false)}
              variant="outline"
              className="h-full"
            >
              Cancel
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
