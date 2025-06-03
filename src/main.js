// Import Tailwind styles
import "./styles/main.css";

// Initialize Alpine.js
import Alpine from "alpinejs";
window.Alpine = Alpine;

document.addEventListener("alpine:init", () => {
  // Emergency Exit Button
  Alpine.data("emergencyExit", () => ({
    hover: false,
    exit() {
      // Redirect to Google home page for emergency exit
      window.location.href = "https://www.google.com";
    },
  }));

  // Primary Button (with prop support)
  // Usage: <div x-data="primaryButton({ size: 'md', label: 'Continue Learning', action: yourActionFunction })">
  Alpine.data("primaryButton", ({ size = "md", label, action } = {}) => ({
    hover: false,
    size,
    label: label || (size === "sm" ? "Continue" : "Continue Learning"),
    action: action || (() => {}),
  }));

  // Secondary Button
  Alpine.data("secondaryButton", () => ({
    hover: false,
    label: "Learn More",
    action() {
      // Implement secondary action
      console.log("Secondary action triggered");
    },
  }));

  // Tertiary Button
  Alpine.data("tertiaryButton", () => ({
    hover: false,
    label: "Skip Content",
    action() {
      // Implement skip functionality
      const mainContent = document.querySelector("main");
      mainContent?.focus();
    },
  }));

  // Form Elements
  Alpine.data("textInput", () => ({
    value: "",
    label: "Text Input",
    placeholder: "Enter your text here",
    error: "",
    touched: false,
    validate() {
      this.touched = true;
      // Implement validation logic
    },
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
    ],
  }));

  Alpine.data("selectDropdown", () => ({
    selected: "",
    options: [
      { value: "", label: "Please select an option" },
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
    ],
  }));

  // Typography
  Alpine.data("typography", () => ({
    headings: [
      { level: 1, text: "Heading 1" },
      { level: 2, text: "Heading 2" },
      { level: 3, text: "Heading 3" },
      { level: 4, text: "Heading 4" },
      { level: 5, text: "Heading 5" },
      { level: 6, text: "Heading 6" },
    ],
    bodyText:
      "This is a sample body text that demonstrates our typography system.",
    caption: "This is a caption text example",
  }));

  // Status Indicators
  Alpine.data("progressBar", () => ({
    progress: 0,
    init() {
      this.progress = 75; // Demo value
    },
  }));

  Alpine.data("statusBadge", () => ({
    status: "success",
    getStatusClasses() {
      return {
        success: "bg-chrysocolla-green-50 text-chrysocolla-green",
        warning: "bg-rhodochrosite-rose-50 text-rhodochrosite-rose",
        info: "bg-azurite-blue-50 text-azurite-blue-600",
      }[this.status];
    },
  }));

  Alpine.data("loadingStates", () => ({
    loading: true,
    init() {
      setTimeout(() => {
        this.loading = false;
      }, 2000); // Demo timeout
    },
  }));
});

Alpine.start();
