import { getContent, translations } from "./content.js";

describe("getContent", () => {
  it("returns the English content by default", () => {
    expect(getContent()).toEqual(translations.en);
  });

  it("returns Tamil content when requested", () => {
    expect(getContent("ta").profile.name).toBe("ஜெபர்சன் தற்குரூஸ்");
  });
});
