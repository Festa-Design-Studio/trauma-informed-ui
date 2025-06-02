// Import Tailwind styles
import "./styles/main.css";

// Initialize Alpine.js
import Alpine from "alpinejs";
window.Alpine = Alpine;

// Register components
document.addEventListener("alpine:init", () => {
  Alpine.data("emergencyExit", () => ({
    exit() {
      window.location.href = "https://www.google.com";
    },
  }));

  Alpine.data("primaryButton", () => ({
    hover: false,
  }));

  Alpine.data("secondaryButton", () => ({
    hover: false,
  }));

  Alpine.data("tertiaryButton", () => ({
    hover: false,
  }));

  Alpine.data("textInput", () => ({
    label: "Text Input",
    required: true,
    value: "",
    placeholder: "Enter text...",
  }));

  Alpine.data("checkbox", () => ({
    checked: false,
    label: "Checkbox Option",
  }));

  Alpine.data("radioButton", () => ({
    selected: "",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  }));

  Alpine.data("selectDropdown", () => ({
    selected: "",
    options: [
      { value: "", label: "Select an option" },
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  }));
});

Alpine.start();
