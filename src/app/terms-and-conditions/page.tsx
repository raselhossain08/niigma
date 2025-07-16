'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function TermsAndConditionsPage() {
  return (
    <>
      <div className=" relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 relative z-10">
          <Card className=" shadow-none border-0 bg-transparent">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">
                Terms and Conditions (Beta-Test & Waitlist)
              </CardTitle>
              <p className="text-lg text-center text-gray-600">
                Niigma™ Health Platform
                <br />
                A division of Hybek Generic Inc.
                <br />
                Last Updated: 16 July 2025
              </p>
            </CardHeader>
            <CardContent className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold">1. Definitions</h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="font-medium">Term</p>
                    <p>
                      <strong>“Agreement”</strong>: These Terms and Conditions,
                      the Privacy Policy, and any supplementary policies or
                      guidelines we publish.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">“Hybek,” “we,” “our,” “us”</p>
                    <p>
                      Hybek Generic Inc., a corporation organized under the laws
                      of Manitoba, Canada, including its officers, directors,
                      employees, contractors, and affiliates.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">“Niigma” or “Platform”</p>
                    <p>
                      The suite of mobile and web software, services, and
                      related documentation branded as Niigma, including the
                      Mood-Mana mental-wellness module, Calorie Tracker,
                      Ovulation/Cycle Tracker, Symptom Tracker, AI Health
                      Chatbot, and Nimbus Trivia & Rewards system.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">“Beta Services”</p>
                    <p>
                      Any part of Niigma that is made available for testing
                      prior to full commercial launch.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">“Waitlist Services”</p>
                    <p>
                      Registration and pre-launch functionality allowing
                      prospective users to receive updates, early access, or
                      promotional offers.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">“User,” “you,” “your”</p>
                    <p>
                      Any individual who joins the waitlist, accesses,
                      downloads, installs, or otherwise uses the Beta Services.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">“Content”</p>
                    <p>
                      All data, text, images, video, audio, questions, answers,
                      feedback, or other material provided on or through the
                      Platform, whether by Hybek or by Users.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">“Third-Party API Providers”</p>
                    <p>
                      External services integrated into Niigma: (a) Open Food
                      Facts® (openfoodfacts.org) for barcode-based food data;
                      (b) OpenAI LLC for natural-language and predictive
                      analytics; (c) Cloudinary Ltd. for media upload,
                      transformation, and storage.
                    </p>
                  </div>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  2. Acceptance of Agreement
                </h2>
                <p className="mt-4">
                  By (a) clicking “Agree,” “Join,” or a similar button; (b)
                  joining the waitlist; (c) installing or using any part of the
                  Platform; or (d) otherwise indicating assent, you affirm that
                  you are at least 18 years of age (or have verifiable parental
                  consent if 13–17) and legally competent to enter into this
                  Agreement. If you do not agree, do not access or use the
                  Platform.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  3. License Grant & Restrictions
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>3.1 Limited, Revocable License.</strong> We grant
                    you a personal, non-exclusive, non-transferable, revocable,
                    and royalty-free license to install and use the Beta
                    Services solely for the purpose of evaluating functionality
                    and providing feedback to Hybek.
                  </p>
                  <p>
                    <strong>3.2 Prohibited Conduct.</strong> You shall not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Reverse engineer, decompile, disassemble, or otherwise
                      attempt to derive source code;
                    </li>
                    <li>Circumvent security or usage rules;</li>
                    <li>
                      Use automated scripts, bots, or scraping tools (including
                      for Nimbus Trivia);
                    </li>
                    <li>Commercialize, sublicense, sell, or resell access;</li>
                    <li>
                      Upload or transmit viruses, malware, or harmful code;
                    </li>
                    <li>Misrepresent your identity, age, or affiliation;</li>
                    <li>
                      Infringe any intellectual-property or privacy rights;
                    </li>
                    <li>
                      Use the Platform for emergency medical diagnosis or
                      treatment.
                    </li>
                  </ul>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  4. Beta-Specific Warnings
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>4.1 Experimental Nature.</strong> The Beta Services
                    are pre-release software that may be incomplete, contain
                    errors, malfunction, or change without notice.
                  </p>
                  <p>
                    <strong>4.2 No Service-Level Guarantee.</strong> Hybek may
                    suspend, modify, or terminate the Beta Services at any time
                    without liability.
                  </p>
                  <p>
                    <strong>4.3 Data Loss.</strong> Test data, logs, or settings
                    may be deleted or reset. Maintain your own backup copies.
                  </p>
                  <p>
                    <strong>4.4 Feedback License.</strong> You hereby grant
                    Hybek a perpetual, worldwide, irrevocable, sublicensable,
                    transferable, royalty-free license to use, reproduce,
                    modify, and otherwise exploit any suggestions, bug reports,
                    or other feedback you submit, without compensation or
                    attribution.
                  </p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  5. Health & Wellness Disclaimers
                </h2>
                <p className="mt-4">
                  The Platform does not provide medical advice, diagnosis, or
                  treatment and is not a regulated medical device. Always
                  consult a qualified healthcare professional before acting on
                  any information provided.
                </p>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>5.1 Mindspace (Mental-Wellness Suite)</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Content is educational and not a substitute for
                      counseling, psychotherapy, or crisis intervention.
                    </li>
                    <li>
                      If you are in distress, call 911 (Canada/USA) or your
                      local emergency number immediately.
                    </li>
                  </ul>
                  <p>
                    <strong>5.2 Calorie Tracker</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Provides calorie and macronutrient estimates only (no
                      micronutrient tracking).
                    </li>
                    <li>
                      Nutritional databases may be inaccurate or incomplete.
                    </li>
                    <li>
                      Consult a dietitian or physician before making dietary
                      changes.
                    </li>
                  </ul>
                  <p>
                    <strong>5.3 Ovulation & Cycle Tracker</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Predictions are estimates and must not be relied on for
                      contraception or fertility treatment.
                    </li>
                    <li>
                      Data may be used in aggregate to improve prediction
                      algorithms.
                    </li>
                  </ul>
                  <p>
                    <strong>5.4 Symptom Tracker</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Symptom correlations or advice are informational and not
                      diagnostic.
                    </li>
                    <li>
                      Seek professional evaluation for any medical concern.
                    </li>
                  </ul>
                  <p>
                    <strong>5.5 AI Health Chatbot</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Responses are generated algorithmically and may be
                      incomplete, outdated, or wrong.
                    </li>
                    <li>
                      The chatbot is not suitable for emergencies or
                      time-critical decisions.
                    </li>
                  </ul>
                  <p>
                    <strong>5.6 Nimbus Trivia & Rewards</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Educational Purpose. Questions aim to promote health
                      literacy; they are not medical advice.
                    </li>
                    <li>
                      Points Have No Monetary Value. They cannot be redeemed for
                      cash or transferred.
                    </li>
                    <li>
                      Cheating Prohibited. Use of multiple accounts, scripts, or
                      exploits will void points and may result in suspension.
                    </li>
                    <li>
                      Hybek may modify, suspend, or terminate the Trivia system
                      or its reward thresholds at any time.
                    </li>
                  </ul>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  6. Privacy & Data Handling
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>6.1 Collection.</strong> We collect registration
                    data, device information, usage analytics, health-related
                    inputs, and feedback.
                  </p>
                  <p>
                    <strong>6.2 Legal Basis & Consent.</strong> By using the
                    Platform, you consent to the processing of personal data as
                    described in our Privacy Policy, pursuant to the Personal
                    Information Protection and Electronic Documents Act (PIPEDA)
                    and other applicable laws.
                  </p>
                  <p>
                    <strong>6.3 Storage & Security.</strong> Data is stored on
                    secure servers in Canada or other jurisdictions with
                    comparable protections and transmitted using TLS encryption.
                  </p>
                  <p>
                    <strong>6.4 De-Identification & Research.</strong> We may
                    anonymize and aggregate data for analytics, product
                    improvement, or academic research.
                  </p>
                  <p>
                    <strong>6.5 Third-Party Service Providers.</strong> We may
                    share data with trusted processors (e.g., cloud hosting,
                    crash analytics, nutrition databases) subject to contractual
                    confidentiality and security obligations.
                  </p>
                  <p>
                    <strong>6.6 Retention.</strong> Test-phase data may be
                    retained for as long as reasonably necessary for research
                    and product-development purposes, unless deletion is
                    required by law.
                  </p>
                  <p>
                    <strong>6.7 Third-Party API Calls.</strong> Certain Platform
                    features require real-time or cached calls to Third-Party
                    API Providers. Your queries (e.g., barcode numbers, text
                    prompts, media files) and related metadata may be
                    transmitted to these providers to fulfil your request.
                  </p>
                  <p>
                    <strong>6.8 Open Food Facts.</strong> Barcode look-ups
                    utilize the Open Food Facts public database, licensed under
                    the Open Database License (ODbL). Responses are cached by
                    Hybek; accuracy is not guaranteed by Hybek or Open Food
                    Facts.
                  </p>
                  <p>
                    <strong>6.9 OpenAI & Cloudinary.</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>OpenAI:</strong> Prompt text, health questions,
                      and conversation history may be processed on OpenAI
                      servers located outside Canada. Data sent is minimized and
                      anonymized where feasible.
                    </li>
                    <li>
                      <strong>Cloudinary:</strong> Images and documents you
                      upload are stored and transformed via Cloudinary’s CDN
                      infrastructure, which may use servers worldwide. Files are
                      encrypted in transit; at-rest encryption follows
                      Cloudinary’s security policies.
                    </li>
                  </ul>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  7. Intellectual Property
                </h2>
                <p className="mt-4">
                  All software, trademarks (including Niigma, Nimbus, and
                  related logos), content, and technology are owned or licensed
                  by Hybek and protected by Canadian and international laws.
                  Except for the limited license granted herein, no rights are
                  conveyed to you.
                </p>
                <p className="mt-4">
                  <strong>Third-Party Licenses & Credits.</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Open Food Facts® data © contributors, licensed under ODbL
                    v1.0.
                  </li>
                  <li>OpenAI® and ChatGPT® are trademarks of OpenAI LLC.</li>
                  <li>
                    Cloudinary® is a registered trademark of Cloudinary Ltd.
                  </li>
                  <li>
                    Use of these services within Niigma is subject to their
                    respective licenses and terms; no endorsement is implied.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  8. Warranty Disclaimer
                </h2>
                <p className="mt-4">
                  THE PLATFORM, BETA SERVICES, AND ALL CONTENT ARE PROVIDED “AS
                  IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, EXPRESS
                  OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT,
                  ACCURACY, OR RESULTS. YOUR USE IS SOLELY AT YOUR OWN RISK.
                </p>
                <p className="mt-4">
                  <strong>Third-Party Services.</strong> Hybek makes no warranty
                  regarding the availability, completeness, accuracy, or fitness
                  of data supplied by Third-Party API Providers. Outages or
                  policy changes at those providers may reduce or disable
                  affected Niigma features.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  9. Limitation of Liability
                </h2>
                <p className="mt-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, HYBEK SHALL NOT BE
                  LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL,
                  EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, DATA,
                  GOODWILL, OR OTHER INTANGIBLE LOSSES, EVEN IF ADVISED OF THE
                  POSSIBILITY. HYBEK’S TOTAL CUMULATIVE LIABILITY UNDER THIS
                  AGREEMENT SHALL NOT EXCEED CAD 100.
                </p>
                <p className="mt-4">
                  Some jurisdictions do not allow certain exclusions or
                  limitations; in such cases, liability is limited to the
                  smallest extent legally permitted.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">10. Indemnification</h2>
                <p className="mt-4">
                  You agree to defend, indemnify, and hold harmless Hybek and
                  its officers, directors, employees, agents, and affiliates
                  from and against any claims, damages, losses, liabilities,
                  costs, and expenses (including reasonable legal fees) arising
                  from or related to (a) your breach of this Agreement; (b) your
                  misuse of the Platform; or (c) your violation of any law or
                  third-party right.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">11. Termination</h2>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>11.1 By Hybek.</strong> We may suspend or terminate
                    your access to the Platform at any time, for any reason,
                    with or without notice.
                  </p>
                  <p>
                    <strong>11.2 By You.</strong> You may cease all use and
                    delete the app at any time.
                  </p>
                  <p>
                    <strong>11.3 Effect.</strong> Upon termination, Sections 3–5
                    and 7–14 survive.
                  </p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  12. Modifications to Agreement
                </h2>
                <p className="mt-4">
                  We may update these Terms at our discretion. Material changes
                  will be notified via email or in-app notice. Continued use of
                  the Platform after the effective date constitutes acceptance.
                </p>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">
                  13. Governing Law & Dispute Resolution
                </h2>
                <div className="mt-4 space-y-4">
                  <p>
                    <strong>13.1 Governing Law.</strong> This Agreement is
                    governed by the laws of Manitoba and the federal laws of
                    Canada, without regard to conflict-of-laws principles.
                  </p>
                  <p>
                    <strong>13.2 Arbitration.</strong> Any dispute not
                    informally resolved within 30 days shall be finally resolved
                    by binding arbitration under the Arbitration Act (Manitoba)
                    by a single arbitrator, seated in Winnipeg, conducted in
                    English.
                  </p>
                  <p>
                    <strong>13.3 Class-Action Waiver.</strong> You may only
                    resolve disputes individually; class or representative
                    actions are not permitted.
                  </p>
                  <p>
                    <strong>13.4 Injunctive Relief.</strong> Hybek may seek
                    injunctive or equitable relief in any competent court to
                    protect intellectual-property or confidential information.
                  </p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-semibold">14. Miscellaneous</h2>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>
                    <strong>Entire Agreement.</strong> This Agreement
                    constitutes the entire understanding, superseding all prior
                    oral or written agreements.
                  </li>
                  <li>
                    <strong>Severability.</strong> If any provision is invalid,
                    the remainder will remain in full force.
                  </li>
                  <li>
                    <strong>Assignment.</strong> You may not assign or transfer
                    your rights; Hybek may assign without restriction.
                  </li>
                  <li>
                    <strong>Force Majeure.</strong> Hybek is not liable for
                    failure to perform due to events beyond reasonable control.
                  </li>
                  <li>
                    <strong>Priority of Third-Party Terms.</strong> Where a
                    Third-Party API Provider’s published terms conflict with
                    this Agreement, those terms govern exclusively for the
                    portion of the Platform that relies on that provider.
                  </li>
                  <li>
                    <strong>Contact.</strong> Questions? Email:
                    hybekgeneric@gmail.com or write Hybek Generic Inc.
                  </li>
                </ul>
              </section>

              <Separator />

              <section>
                <p className="text-center font-semibold">
                  BY CONTINUING, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD,
                  AND AGREE TO BE BOUND BY THIS AGREEMENT.
                </p>
              </section>

              <Separator />

              <section>
                <p className="text-center text-sm text-gray-500">
                  Copyright © 2025 Hybek Generic Inc. All rights reserved.
                </p>
              </section>

              <div className="w-full flex items-center justify-center">
                <Button asChild>
                  <a href="/" className="w-full sm:w-auto">
                    Return to Home
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className=" fixed -bottom-0 lg:-top-20 right-0">
          <Image
            src="/img/bg.png"
            width={900}
            height={900}
            alt=""
            className=" blur-[2px] h-[100vh]"
          />
        </div>
      </div>
    </>
  );
}
