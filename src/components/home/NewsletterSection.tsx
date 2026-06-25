"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-lg space-y-6 text-center">
        <h2 className="text-3xl font-bold text-primary">Subscribe to our emails</h2>
        <p className="text-muted-foreground">
          Subscribe to our mailing list for announcements and news from Chesed Philly.
        </p>

        {submitted ? (
          <p className="font-medium text-primary">
            Thank you for subscribing. We&apos;ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="space-y-2">
              <Label htmlFor="newsletter-email">Email</Label>
              <Input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <Button type="submit" className="w-full">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
