import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SelectCategory from "@/app/components/SelectCategory";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
// import prisma from "../lib/db";
// import { SellForm } from "../components/form/Sellform";

import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function SellRoute() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell your product with ease</CardTitle>
            <CardDescription>
              Please describe your product in detail
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label>Name</Label>
              <Input type="text" placeholder="Product Name" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Category</Label>
              <SelectCategory />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Price</Label>
              <Input placeholder="£29" type="number"></Input>
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Summary</Label>
              <Textarea placeholder="Product Summary"></Textarea>
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
}
