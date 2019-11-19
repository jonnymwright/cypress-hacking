type Transitions = {
  [key: string]: () => Transitions;
};

const Unclicked = (rest: Transitions) => ({
  click: () => {
    cy.get(".toggle").click();
    return {
      ...rest,
      click: Clicked(rest).click,
      write: Clicked(rest).write
    };
  },

  check: () => {
    return { ...rest };
  }
});

const Clicked = (rest: Transitions) => ({
  click: () => {
    cy.get(".toggle").click();
    const nextState = {
      ...rest,
      click: Unclicked(rest).click,
      write: undefined
    };
    return nextState;
  },

  write: (input: string) => {
    cy.get(".hidden").type(input);
    return Clicked(rest);
  }
});

export const Initial = Unclicked({});
