describe("통합 Happy Path Testing", () => {
  const vanillaValue = 2;
  const invalidChocolateValue = 2.5;
  it("Load Main Page", () => {
    cy.visit("http://localhost:3000/");
  });

  it("사용자가 Vanilla Scoops 개수를 조작 테스팅: 버튼활성화/소계반영", () => {
    cy.get("button").contains("Order Sundae").should("be.disabled");

    // valid input
    cy.get("div")
      .contains("label", "Vanilla scoop")
      .parent()
      .find("input[type='number']")
      .type(vanillaValue + "")
      .should("not.have.class", "is-invalid");

    cy.get("button").contains("Order Sundae").should("be.enabled");

    cy.get("h2").contains("Grand total: $4.00");

    // invalid input
    cy.get("div")
      .contains("label", "Chocolate scoop")
      .parent()
      .find("input[type='number']")
      .type(invalidChocolateValue + "")
      .should("have.class", "is-invalid");

    cy.get("h2").contains("Grand total: $4.00");
  });

  it("사용자가 Toppings 를 조작하고 이는 소계에 반영된다.", () => {
    cy.get("div")
      .contains("label", "Chocolate topping")
      .parent()
      .find("input")
      .check();

    cy.get("h2").contains("Grand total: $5.50");
  });

  it("사용자가 주문 요청 버튼을 클릭하여 OrderSummary Page 로 이동된다", () => {
    cy.get("button").contains("Order Sundae").click();
    cy.get("h2").contains("Order Summary");
    cy.get("li").contains(vanillaValue + ".Vanilla");
    cy.get("li").contains(0 + ".Chocolate");
  });

  it("OrderSummary Page에서는 기본으로 이용정보 동의 체크가 해제되어있으며 체크 시 주문확인 버튼이 활성화 된다.", () => {
    const confirmOrderButton = cy.get("button").contains("Confirm order");
    confirmOrderButton.should("not.be.enabled");
    const confirmCheckbox = cy
      .get("div")
      .contains("label", "I agree toTerms and Conditions")
      .parent()
      .find("input[type='checkbox']")
      .should("not.be.checked");

    confirmCheckbox.check();
    confirmOrderButton.should("be.enabled");
  });

  it("OrderSummary Page의 agree 하이라이트 텍스트에 마우스 오버 시 부가 정보를 보여준다. ", () => {
    const confirmHighlightText = cy
      .get("span")
      .contains("Terms and Conditions")
      .should("have.css", "color", "rgb(0, 0, 255)");

    confirmHighlightText.trigger("mouseover");
    const additionalText = cy.get(".popover").contains("실제로는 안준다");
    additionalText.should("be.visible");
    confirmHighlightText.trigger("mouseout");
    cy.get(".popover").should("not.exist");
  });

  it("OrderSummary Page에서 Confirm Order 버튼 클릭 시 주문 결정 페이지로 이동한다.", () => {
    const confirmOrderButton = cy
      .get("button")
      .contains("Confirm order")
      .should("be.enabled");

    confirmOrderButton.click();
    cy.get("h1").contains("Thank you");
    // 올바른 주문 정보 id가 있다.
    cy.get("p")
      .contains("Your Order number is")
      .then((text) => {
        expect(
          text
            .text()
            .replace("Your Order number is", "")
            .trim()
            .match(/[0-9]/gi)
        ).to.not.be.null;
      });
  });

  it("Create new Order 버튼 클릭 시 초기 페이지로 이동하며 모든 주문 사용자 정보가 초기화 된다.", () => {
    const createNewOrderButton = cy
      .get("button")
      .contains("Create new order")
      .should("be.enabled");
    createNewOrderButton.click();

    cy.get("button").contains("Order Sundae").should("be.disabled");
    cy.get("h2").contains("Scoops Total: $0.00");
    cy.get("h2").contains("Toppings Total: $0.00");
  });
});
