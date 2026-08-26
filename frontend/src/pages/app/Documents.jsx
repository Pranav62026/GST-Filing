import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

const MAX_SIZE = 5 * 1024 * 1024;

const DOCUMENTS = [
  {
    key: "aadhaar",
    label: "Aadhaar Card",
    accept: ".jpg,.jpeg,.png,.pdf",
    formats: "JPG, JPEG, PNG or PDF",
  },
  {
    key: "pan",
    label: "PAN Card",
    accept: ".jpg,.jpeg,.png,.pdf",
    formats: "JPG, JPEG, PNG or PDF",
  },
  {
    key: "photo",
    label: "Applicant Photo",
    accept: ".jpg,.jpeg,.png",
    formats: "JPG, JPEG or PNG",
  },
  {
    key: "signature",
    label: "Signature",
    accept: ".jpg,.jpeg,.png",
    formats: "JPG, JPEG or PNG",
  },
  {
    key: "businessDocument",
    label: "Business Related Document",
    accept: ".jpg,.jpeg,.png,.pdf",
    formats: "JPG, JPEG, PNG or PDF",
  },
];

function Documents() {
  const navigate = useNavigate();

  const [files, setFiles] = useState({
    aadhaar: null,
    pan: null,
    photo: null,
    signature: null,
    businessDocument: null,
  });

  const handleFileChange = (event, fieldName) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.size > MAX_SIZE) {
      toast.error(`${file.name} is larger than 5 MB.`);
      event.target.value = "";
      return;
    }

    setFiles((previous) => ({
      ...previous,
      [fieldName]: file,
    }));
  };

  const handleReview = (event) => {
    event.preventDefault();

    const missingDocument = DOCUMENTS.find(({ key }) => !files[key]);

    if (missingDocument) {
      toast.error(`Please upload your ${missingDocument.label}.`);
      return;
    }

    const hasLargeFile = Object.values(files).some(
      (file) => file && file.size > MAX_SIZE
    );

    if (hasLargeFile) {
      toast.error("All documents must be 5 MB or less.");
      return;
    }

    navigate("/review-documents", {
      state: { files },
    });
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Card className="p-5 sm:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-semibold text-on-surface sm:text-3xl">
              Upload Documents
            </h1>

            <p className="mt-2 text-sm text-on-surface-variant">
              All documents are required. Maximum size is 5 MB per file.
            </p>
          </div>

          <form onSubmit={handleReview} className="space-y-5">
            {DOCUMENTS.map((document) => (
              <div key={document.key}>
                <label
                  htmlFor={document.key}
                  className="mb-2 block text-sm font-medium text-on-surface"
                >
                  {document.label}
                  <span className="ml-1 text-error">*</span>
                </label>

                <input
                  id={document.key}
                  type="file"
                  accept={document.accept}
                  required
                  onChange={(event) =>
                    handleFileChange(event, document.key)
                  }
                  className="block w-full cursor-pointer rounded-md border border-outline-variant bg-surface-container text-sm text-on-surface file:mr-4 file:border-0 file:bg-primary file:px-4 file:py-2.5 file:text-sm file:font-medium file:text-on-primary hover:file:bg-primary-hover focus:outline-none"
                />

                <p className="mt-1.5 text-xs text-on-surface-variant">
                  {document.formats} — Maximum 5 MB
                </p>

                {files[document.key] && (
                  <p className="mt-1 truncate text-xs text-success">
                    Selected: {files[document.key].name}
                  </p>
                )}
              </div>
            ))}

            <div className="flex justify-center pt-3">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Review Documents
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Documents;
