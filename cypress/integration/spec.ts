import { Initial } from "../navigation/simpler";
// import { Initial } from "../navigation/dynamicer";

describe("Navigating", () => {
  it("shows learn link", function() {
    cy.visit("http://localhost:3000");

    Initial.click().write("hello");
  });
});
