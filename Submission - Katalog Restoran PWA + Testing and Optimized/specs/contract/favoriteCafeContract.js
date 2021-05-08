const itActsAsFavoriteCafeModel = (favoriteCafe) => {
  it("should return the Cafe that has been added", async () => {
    favoriteCafe.putCafe({ id: "rqdv5juczeskfw1e867" });
    favoriteCafe.putCafe({ id: "s1knt6za9kkfw1e867" });

    expect(await favoriteCafe.getCafe("rqdv5juczeskfw1e867")).toEqual({
      id: "rqdv5juczeskfw1e867",
    });
    expect(await favoriteCafe.getCafe("s1knt6za9kkfw1e867")).toEqual({
      id: "s1knt6za9kkfw1e867",
    });
    expect(await favoriteCafe.getCafe("w9pga3s2tubkfw1e867")).toEqual(
      undefined
    );
  });

  it("should refuse a Cafe from being added if it does not have the correct property", async () => {
    favoriteCafe.putCafe({ aProperty: "property" });

    expect(await favoriteCafe.getAllCafe()).toEqual([]);
  });

  it("can return all of the Cafes that have been added", async () => {
    favoriteCafe.putCafe({ id: "rqdv5juczeskfw1e867" });
    favoriteCafe.putCafe({ id: "s1knt6za9kkfw1e867" });

    expect(await favoriteCafe.getAllCafe()).toEqual([
      { id: "rqdv5juczeskfw1e867" },
      { id: "s1knt6za9kkfw1e867" },
    ]);
  });

  it("should remove favorite Cafe", async () => {
    favoriteCafe.putCafe({ id: "rqdv5juczeskfw1e867" });
    favoriteCafe.putCafe({ id: "s1knt6za9kkfw1e867" });
    favoriteCafe.putCafe({ id: "w9pga3s2tubkfw1e867" });

    await favoriteCafe.deleteCafe("rqdv5juczeskfw1e867");

    expect(await favoriteCafe.getAllCafe()).toEqual([
      { id: "s1knt6za9kkfw1e867" },
      { id: "w9pga3s2tubkfw1e867" },
    ]);
  });

  it("should handle request to remove a Cafe even though the Cafe has not been added", async () => {
    favoriteCafe.putCafe({ id: "rqdv5juczeskfw1e867" });
    favoriteCafe.putCafe({ id: "s1knt6za9kkfw1e867" });
    favoriteCafe.putCafe({ id: "w9pga3s2tubkfw1e867" });

    await favoriteCafe.deleteCafe(4);

    expect(await favoriteCafe.getAllCafe()).toEqual([
      { id: "rqdv5juczeskfw1e867" },
      { id: "s1knt6za9kkfw1e867" },
      { id: "w9pga3s2tubkfw1e867" },
    ]);
  });
};

export { itActsAsFavoriteCafeModel };
