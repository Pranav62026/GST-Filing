import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Modal from "../components/ui/Modal";
import Loader from "../components/ui/Loader";

function UiTest() {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">UI Playground</h1>
        <p className="mt-1 text-sm text-on-surface-variant">
          Testing the shared frontend components.
        </p>
      </div>

      {/* Buttons */}
      <section>
        <h2 className="mb-3 text-lg font-semibold">Buttons</h2>

        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>

          <Button variant="secondary">Secondary</Button>

          <Button variant="danger">Danger</Button>

          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Inputs */}
      <section>
        <h2 className="mb-3 text-lg font-semibold">Inputs</h2>

        <div className="max-w-md space-y-4">
          <Input
            label="Name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <Input label="GSTIN" name="gstin" placeholder="Enter GSTIN" />

          <Input
            label="Example Error"
            name="error"
            placeholder="Something went wrong"
            error="This field is required"
          />

          <Input
            label="Disabled"
            name="disabled"
            placeholder="Disabled input"
            disabled
          />
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="mb-3 text-lg font-semibold">Cards</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="font-semibold">GST Registration</h3>

            <p className="mt-2 text-sm text-on-surface-variant">
              Complete your GST registration process.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold">Filing Status</h3>

            <p className="mt-2 text-2xl font-semibold">75%</p>
          </Card>
        </div>
      </section>

      {/* Badges */}
      <section>
        <h2 className="mb-3 text-lg font-semibold">Badges</h2>

        <div className="flex flex-wrap gap-3">
          <Badge>Pending</Badge>

          <Badge variant="success">Completed</Badge>

          <Badge variant="warning">In Progress</Badge>

          <Badge variant="error">Rejected</Badge>

          <Badge variant="info">Information</Badge>
        </div>
      </section>

      {/* Modal */}
      <section>
        <h2 className="mb-3 text-lg font-semibold">Modal</h2>

        <Button onClick={() => setShowModal(true)}>Open Modal</Button>

        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="Test Modal"
        >
          <p className="text-sm text-on-surface-variant">
            This is our shared modal component.
          </p>

          <div className="mt-5 flex justify-end gap-3">
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>

            <Button onClick={() => setShowModal(false)}>Confirm</Button>
          </div>
        </Modal>
      </section>

      {/* Loaders */}
      <section>
        <h2 className="mb-3 text-lg font-semibold">Loaders</h2>

        <div className="flex items-center gap-6">
          <Loader size="sm" />
          <Loader size="md" />
          <Loader size="lg" />
        </div>
      </section>
    </div>
  );
}

export default UiTest;
