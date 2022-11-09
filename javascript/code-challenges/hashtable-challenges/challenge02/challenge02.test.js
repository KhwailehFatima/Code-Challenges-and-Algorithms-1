"use strict";

const { firstRepeated } = require("./challenge02");

describe("Testing challenge 2", () => {
    it("It should return the first repeated word in a string", () => {
        expect(firstRepeated("I am learning programming at ASAC")).toStrictEqual("No Repetition");
        expect(firstRepeated("ASAC is a department at LTUC. ASAC teaches programming in LTUC.")).toStrictEqual("ASAC");
        expect(firstRepeated("Once upon a time, there was a brave princess who...")).toStrictEqual("a");
        expect(firstRepeated("It was the best of times, it was the worst of times...")).toStrictEqual("was");
        expect(firstRepeated("I do not like green eggs and ham. I do not like them, Sam-I-Am.")).toStrictEqual("I");
    });
    }
);
