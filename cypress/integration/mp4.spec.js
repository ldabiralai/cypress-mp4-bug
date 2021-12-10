describe("mp4", () => {
  it("should be able to mock an mp4", () => {
    cy.intercept("video.mp4", { fixture: "video.mp4" });

    cy.visit("http://localhost:3000/");

    cy.get("video")
      .should("have.prop", "paused", false)
      .should("have.prop", "ended", false);
  });
});
