"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";



export default function TermsAndConditionsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Card className="bg-[#F6FCFF] shadow-none border-0">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-gray-800">
            Terms & Conditions
          </CardTitle>
        </CardHeader>

        <Separator />

        <CardContent className="space-y-8 text-sm text-muted-foreground mt-6">
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using niiGma, you agree to be bound by these
              Terms. If you do not agree, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              2. Eligibility
            </h2>
            <p>
              You must be at least 16 years old to use niiGma. By using the app,
              you confirm that you meet this requirement.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              3. Health Disclaimer
            </h2>
            <p>
              niiGma provides wellness insights, not medical advice. Always
              consult a healthcare professional for any health-related concerns.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              4. User Data & Privacy
            </h2>
            <p>
              Your privacy matters. Please review our{' '}
              <a href="/privacy-policy" className="underline text-blue-600">
                Privacy Policy
              </a>{' '}
              to understand how your data is used.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              5. Intellectual Property
            </h2>
            <p>
              All content, graphics, and branding on niiGma are the property of
              niiGma and protected under intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              6. User Responsibilities
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use the app lawfully and ethically</li>
              <li>Respect the rights of others</li>
              <li>Do not misuse any feature or service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              7. Modifications
            </h2>
            <p>
              niiGma may modify these Terms or the app features at any time.
              Continued use implies acceptance of updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              8. Termination
            </h2>
            <p>
              We may suspend or terminate your account for violation of these
              Terms or misuse of our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              9. Limitation of Liability
            </h2>
            <p>
              niiGma is not responsible for any indirect damages. Use of the
              platform is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">
              10. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of your jurisdiction.
              Disputes will be handled through appropriate legal channels.
            </p>
          </section>

          <div className="pt-6 text-center">
            <p>
              If you have questions, contact us at{' '}
              <a
                href="mailto:info@niigma.com"
                className="underline text-blue-600"
              >
                info@niigma.com
              </a>
            </p>
          </div>

          <div className="flex justify-center pt-8">
            <Button asChild>
              <a href="/" className="w-full sm:w-auto">
                Return to Home
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
