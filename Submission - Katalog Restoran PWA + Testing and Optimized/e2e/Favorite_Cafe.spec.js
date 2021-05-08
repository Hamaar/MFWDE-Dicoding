const assert = require("assert");

Feature("Favorite Cafe");

Before(({ I }) => {
  I.amOnPage("/#/favorite");
});

Scenario("showing empty liked cafes", ({ I }) => {
  //   I.seeElement("#query");
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see("Tidak ada cafe untuk ditampilkan", ".Cafe-item__not__found");
});

Scenario("liking one cafe", async ({ I }) => {
  I.see("Tidak ada cafe untuk ditampilkan", ".Cafe-item__not__found");

  I.amOnPage("/");

  I.seeElement(".cafe__title");

  const firstcafe = locate(".cafe__title").first();
  const firstcafeTitle = await I.grabTextFrom(firstcafe);
  I.click(firstcafe);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".cafe-item");
  const likedcafeTitle = await I.grabTextFrom(".cafe__title");

  assert.strictEqual(firstcafeTitle, likedcafeTitle);
});

Scenario("Unlinking one cafes", async ({ I }) => {
  I.see("Tidak ada cafe untuk ditampilkan", ".Cafe-item__not__found");

  I.amOnPage("/");

  I.seeElement(".cafe__title");

  const firstcafe = locate(".cafe__title").first();
  I.click(firstcafe);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");
  I.seeElement(".cafe-item");
  const likedcafeTitle = await I.grabTextFrom(".cafe__title");

  I.click(likedcafeTitle);

  I.seeElement("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favorite");

  I.see("Tidak ada cafe untuk ditampilkan", ".Cafe-item__not__found");
});
