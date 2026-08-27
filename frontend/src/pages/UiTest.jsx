import { useState } from "react";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Loader from "../components/ui/Loader";
import Modal from "../components/ui/Modal";
import SectionContainer from "../components/ui/SectionContainer";
import SectionLabel from "../components/ui/SectionLabel";

function UiTest() {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputError, setInputError] = useState(false);

  return (
    <div className="min-h-screen bg-background py-10 text-on-surface">
      <SectionContainer>
        {/* Header */}
        <header className="mb-10">
          <SectionLabel>Design System</SectionLabel>

          <h1 className="text-3xl font-semibold tracking-tight text-on-surface sm:text-4xl">
            UI Component Test
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-on-surface-variant">
            A visual playground for checking the shared Kartsho GST UI
            components, states, spacing, typography, borders and dark theme.
          </p>
        </header>

        <div className="space-y-8">
          {/* Buttons */}
          <section>
            <SectionLabel>Buttons</SectionLabel>

            <Card>
              <div className="flex flex-wrap items-center gap-3">
                <Button>Primary</Button>

                <Button variant="secondary">Secondary</Button>

                <Button variant="danger">Danger</Button>

                <Button variant="navy">Navy</Button>

                <Button variant="whatsapp">WhatsApp</Button>

                <Button variant="outline-brand">Outline Brand</Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>

                <Button size="md">Medium</Button>

                <Button size="lg">Large</Button>

                <Button disabled>Disabled</Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button as="a" href="#button-link">
                  Link Button
                </Button>
              </div>
            </Card>
          </section>

          {/* Inputs */}
          <section>
            <SectionLabel>Inputs</SectionLabel>

            <Card>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Input
                  name="normal"
                  label="Normal Input"
                  placeholder="Enter something..."
                />

                <Input
                  name="password"
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  showPasswordToggle
                />

                <Input
                  name="light"
                  label="Light Variant"
                  placeholder="Light input"
                  variant="light"
                />

                <Input
                  name="disabled"
                  label="Disabled Input"
                  placeholder="Cannot edit"
                  disabled
                />

                <Input
                  name="error"
                  label="Error Input"
                  placeholder="Invalid value"
                  value={inputError ? "Invalid value" : ""}
                  onChange={() => {}}
                  error={inputError ? "This field contains an error" : ""}
                />
              </div>

              <div className="mt-5">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setInputError((value) => !value)}
                >
                  Toggle Error State
                </Button>
              </div>
            </Card>
          </section>

          {/* Badges */}
          <section>
            <SectionLabel>Badges</SectionLabel>

            <Card>
              <div className="flex flex-wrap items-center gap-3">
                <Badge>Default</Badge>

                <Badge variant="success">Success</Badge>

                <Badge variant="warning">Warning</Badge>

                <Badge variant="error">Error</Badge>

                <Badge variant="info">Information</Badge>
              </div>
            </Card>
          </section>

          {/* Cards */}
          <section>
            <SectionLabel>Cards</SectionLabel>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <Card>
                <p className="text-sm font-medium text-on-surface">
                  Basic Card
                </p>

                <p className="mt-2 text-sm text-on-surface-variant">
                  Default card with standard padding.
                </p>
              </Card>

              <Card className="bg-surface-container">
                <p className="text-sm font-medium text-on-surface">
                  Container Card
                </p>

                <p className="mt-2 text-sm text-on-surface-variant">
                  Useful for grouping secondary content.
                </p>
              </Card>

              <Card padding={false}>
                <div className="p-5">
                  <p className="text-sm font-medium text-on-surface">
                    No Padding
                  </p>

                  <p className="mt-2 text-sm text-on-surface-variant">
                    Card padding can be disabled when custom layout is needed.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Typography & surfaces */}
          <section>
            <SectionLabel>Theme & Typography</SectionLabel>

            <Card>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-on-surface-variant">
                    Heading
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold text-on-surface">
                    GST Registration
                  </h2>

                  <p className="mt-2 text-sm text-on-surface-variant">
                    Supporting text should remain readable against the dark
                    surface.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="rounded-md border border-outline-variant bg-background p-4">
                    <p className="text-xs text-on-surface-variant">
                      Background
                    </p>
                    <p className="mt-2 text-sm font-medium text-on-surface">
                      bg-background
                    </p>
                  </div>

                  <div className="rounded-md border border-outline-variant bg-surface p-4">
                    <p className="text-xs text-on-surface-variant">Surface</p>
                    <p className="mt-2 text-sm font-medium text-on-surface">
                      bg-surface
                    </p>
                  </div>

                  <div className="rounded-md border border-outline-variant bg-surface-container p-4">
                    <p className="text-xs text-on-surface-variant">Container</p>
                    <p className="mt-2 text-sm font-medium text-on-surface">
                      bg-surface-container
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="text-on-surface">Primary text</span>

                  <span className="text-on-surface-variant">
                    Secondary text
                  </span>

                  <span className="text-success">Success</span>

                  <span className="text-warning">Warning</span>

                  <span className="text-error">Error</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Loader */}
          <section>
            <SectionLabel>Loaders</SectionLabel>

            <Card>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex flex-col items-center gap-3">
                  <Loader size="sm" />
                  <span className="text-xs text-on-surface-variant">Small</span>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <Loader size="md" />
                  <span className="text-xs text-on-surface-variant">
                    Medium
                  </span>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <Loader size="lg" />
                  <span className="text-xs text-on-surface-variant">Large</span>
                </div>
              </div>
            </Card>
          </section>

          {/* Modal */}
          <section>
            <SectionLabel>Modal</SectionLabel>

            <Card>
              <p className="text-sm text-on-surface-variant">
                Test the shared modal overlay and surface styling.
              </p>

              <div className="mt-4">
                <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              </div>
            </Card>
          </section>

          {/* Form example */}
          <section>
            <SectionLabel>Combined Example</SectionLabel>

            <Card className="max-w-3xl">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-on-surface">
                  Business Details
                </h2>

                <p className="mt-1 text-sm text-on-surface-variant">
                  Example of how the shared components look when combined in an
                  actual application form.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <Input
                  name="businessName"
                  label="Legal Business Name"
                  placeholder="Enter business name"
                />

                <Input
                  name="tradeName"
                  label="Trade Name"
                  placeholder="Enter trade name"
                />

                <Input
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="name@example.com"
                />

                <Input
                  name="mobile"
                  label="Mobile Number"
                  type="tel"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button variant="secondary">Cancel</Button>

                <Button>Continue</Button>
              </div>
            </Card>
          </section>
        </div>
      </SectionContainer>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Test Modal"
      >
        <p className="text-sm leading-6 text-on-surface-variant">
          This is the shared Kartsho GST modal component. Use this area to
          verify modal content, spacing, borders and dark-theme contrast.
        </p>

        <div className="mt-5 flex justify-end">
          <Button onClick={() => setModalOpen(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
}

export default UiTest;
