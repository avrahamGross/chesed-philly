"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { donationAmounts, donationFunds, site } from "@/lib/content";
import { cn } from "@/lib/utils";

type DonationFrequency = "one-time" | "monthly";

function SelectableCard({
  id,
  selected,
  title,
  description,
}: {
  id: string;
  selected: boolean;
  title: string;
  description?: string;
}) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-colors",
        selected ? "border-primary bg-primary/5" : "hover:bg-muted/50",
      )}
    >
      <RadioGroupItem value={id} id={id} className="mt-0.5" />
      <div className="space-y-1">
        <p className="font-medium leading-none">{title}</p>
        {description ? (
          <p className="text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </label>
  );
}

export function DonationForm() {
  const [frequency, setFrequency] = useState<DonationFrequency>("one-time");
  const [selectedAmount, setSelectedAmount] = useState("180");
  const [customAmount, setCustomAmount] = useState("");
  const [fund, setFund] = useState<string>(donationFunds[0].id);
  const [submitted, setSubmitted] = useState(false);

  const amount = useMemo(() => {
    if (selectedAmount === "custom") {
      const parsed = Number(customAmount);
      return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
    }
    return Number(selectedAmount);
  }, [customAmount, selectedAmount]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card>
        <CardContent className="space-y-4 pt-6 text-center">
          <h2 className="text-xl font-semibold text-primary">Thank you for your generosity</h2>
          <p className="text-muted-foreground">
            Your {frequency === "monthly" ? "monthly " : ""}pledge of ${amount.toLocaleString()}{" "}
            to {donationFunds.find((item) => item.id === fund)?.label} has been recorded. Payment
            processing will be connected in a future step.
          </p>
          <p className="text-sm text-muted-foreground">Tax ID: {site.taxId}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-primary">Donation type</h2>
            <RadioGroup
              value={frequency}
              onValueChange={(value) => setFrequency(value as DonationFrequency)}
              className="grid gap-3 sm:grid-cols-2"
            >
              <SelectableCard
                id="one-time"
                selected={frequency === "one-time"}
                title="One-time gift"
                description="Make a single donation today"
              />
              <SelectableCard
                id="monthly"
                selected={frequency === "monthly"}
                title="Monthly partner"
                description="Sustain families throughout the year"
              />
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-primary">Select an amount</h2>
            <RadioGroup
              value={selectedAmount}
              onValueChange={setSelectedAmount}
              className="grid gap-3 sm:grid-cols-3"
            >
              {donationAmounts.map((value) => (
                <SelectableCard
                  key={value}
                  id={String(value)}
                  selected={selectedAmount === String(value)}
                  title={`$${value}`}
                />
              ))}
              <SelectableCard
                id="custom"
                selected={selectedAmount === "custom"}
                title="Custom"
              />
            </RadioGroup>

            {selectedAmount === "custom" ? (
              <div className="space-y-2">
                <Label htmlFor="custom-amount">Custom amount</Label>
                <Input
                  id="custom-amount"
                  type="number"
                  min={1}
                  step={1}
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount in USD"
                  required
                />
              </div>
            ) : null}
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-primary">Designate your gift</h2>
            <RadioGroup value={fund} onValueChange={setFund} className="space-y-3">
              {donationFunds.map((item) => (
                <SelectableCard
                  key={item.id}
                  id={item.id}
                  selected={fund === item.id}
                  title={item.label}
                  description={item.description}
                />
              ))}
            </RadioGroup>
          </div>

          <Separator />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" name="lastName" required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="comments">Dedication or comments (optional)</Label>
              <Textarea id="comments" name="comments" rows={3} />
            </div>
          </div>

          <div className="space-y-3">
            <Button type="submit" variant="accent" size="lg" className="w-full" disabled={amount <= 0}>
              Continue to payment — ${amount.toLocaleString()}
              {frequency === "monthly" ? " / month" : ""}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Secure payment processing (Stripe or similar) will be integrated here. Chesed Philly is
              a 501(c)(3) organization. Tax ID: {site.taxId}.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
