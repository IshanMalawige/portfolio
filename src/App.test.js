import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./components/Particle", () => () => null);
jest.mock("react-pdf", () => ({
  Document: ({ children }) => children,
  Page: () => null,
  pdfjs: { GlobalWorkerOptions: {} },
}));

beforeEach(() => {
  window.scrollTo = jest.fn();
  window.history.replaceState({}, "", "/");
});

test("renders the scrollable portfolio with Career and Education sections", () => {
  render(<App />);

  expect(screen.getByRole("main")).toBeInTheDocument();
  expect(document.getElementById("home")).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: /calm cat companion/i })
  ).toBeInTheDocument();
  expect(document.getElementById("about")).toBeInTheDocument();
  expect(document.getElementById("career")).toBeInTheDocument();
  expect(document.getElementById("education")).toBeInTheDocument();
  expect(document.getElementById("projects")).toBeInTheDocument();
  expect(document.getElementById("articles")).toBeInTheDocument();
  expect(document.getElementById("contact")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /education/i })).toHaveAttribute(
    "href",
    "/education"
  );
  expect(screen.getByRole("link", { name: /career/i })).toHaveAttribute(
    "href",
    "/experience"
  );
  expect(screen.queryByText(/lankajobs/i)).not.toBeInTheDocument();
  expect(screen.queryByRole("link", { name: /^resume$/i })).not.toBeInTheDocument();
  expect(screen.getByRole("link", { name: /download cv/i })).toHaveAttribute(
    "download",
    "Ishan_Malawige-CV.pdf"
  );
});

test("renders education milestones on its dedicated page", () => {
  window.history.pushState({}, "", "/education");
  render(<App />);

  expect(
    screen.getByRole("heading", { name: "My Education" })
  ).toBeInTheDocument();
  expect(screen.getByText("2018")).toBeInTheDocument();
  expect(screen.getByText("2021")).toBeInTheDocument();
  expect(screen.getByText("2023–2026")).toBeInTheDocument();
  expect(
    screen.getByText("General Sir John Kotelawala Defence University")
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Bachelor of Technology (Hons) in Information and Communication Technology"
    )
  ).toBeInTheDocument();
  expect(screen.getByText("Results: 3 As and 6 Bs")).toBeInTheDocument();
  expect(screen.getByText("Stream: Technology")).toBeInTheDocument();
  expect(screen.getByText("Results: 3 As and 1 S")).toBeInTheDocument();
  expect(screen.getByText("Engineering Technology: C")).toBeInTheDocument();
  expect(screen.getByText("Science for Technology: S")).toBeInTheDocument();
  expect(
    screen.getByText("Information and Communication Technology: C")
  ).toBeInTheDocument();
  expect(screen.getByText("Z-Score: 0.7122")).toBeInTheDocument();
  expect(screen.getByText("GPA: 3.3")).toBeInTheDocument();
  expect(screen.getByText("MSc")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /certifications/i })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", {
      name: /a comprehensive framework for strengthening iot security/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/KDU International Research Conference \(IRC\) 2024/)).toBeInTheDocument();
  expect(screen.getByText(/Conference track: Technology/)).toBeInTheDocument();
  expect(screen.getByText(/Paper ID 587/)).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /view publication/i })
  ).toHaveAttribute(
    "href",
    "https://irc.kdu.ac.lk/2024/publications/fot.pdf"
  );
  expect(screen.getByText("Firewall Administration")).toBeInTheDocument();
  expect(screen.getByText("Innovation Tech IT")).toBeInTheDocument();
  expect(screen.getByText("Network Security")).toBeInTheDocument();
  expect(
    screen.getByText("CCNA: Enterprise Networking, Security, and Automation")
  ).toBeInTheDocument();
  expect(screen.getByText("Python for Beginners")).toBeInTheDocument();
  expect(screen.getByText("AI/ML Engineer - Stage 1")).toBeInTheDocument();
  expect(screen.getByText("Credential ID: dbxgaj37ka")).toBeInTheDocument();
  expect(
    screen.getByText("CCNA: Switching, Routing, and Wireless Essentials")
  ).toBeInTheDocument();
  expect(screen.getByText("CCNA: Introduction to Networks")).toBeInTheDocument();
  expect(screen.getByText("Web Design For Beginners")).toBeInTheDocument();
  expect(screen.queryByText(/courses/i)).not.toBeInTheDocument();
});

test("keeps the original Career experience page", () => {
  window.history.pushState({}, "", "/experience");
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /professional experience/i })
  ).toBeInTheDocument();
  expect(screen.getByText("Junior Executive - IT Support")).toBeInTheDocument();
  expect(screen.getByText("Zincat Technology")).toBeInTheDocument();
  expect(
    screen.getByText("November 20, 2026 - Present")
  ).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: "Zincat Technology logo" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: "Vocational Training Center Dehiwala logo" })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("img", { name: "Sri Lanka Telecom PLC logo" })
  ).toBeInTheDocument();
  expect(screen.getByText("Network Engineer Intern")).toBeInTheDocument();
});
