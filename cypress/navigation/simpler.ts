const Unclicked = {
  click: () => {
    cy.get(".toggle").click();
    return Clicked;
  }
};

const Clicked = {
  click: () => {
    cy.get(".toggle").click();
    return Unclicked;
  },

  write: (input: string) => {
    cy.get(".hidden").type(input);
    return Clicked;
  }
};

export const Initial = Unclicked;
