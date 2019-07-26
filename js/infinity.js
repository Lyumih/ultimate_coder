var app = new Vue({
    el: "#app",
    data: {
        hashAlgorithmList: ["sha256", "md5", "adler32"],
        hashAlgorithm: "adler32",
        step: 0,
        text: "0123456789abcdef",
        alphabet: ALPHABET_X16.toLowerCase().split(""),
        lengthNewText: 12,
        lengthCrossingForward: 9,
        crossingDivider: "~"
    },
    computed: {
        hash() {
            switch (this.hashAlgorithm) {
                case "sha256":
                    return sha256(this.text);
                case "md5":
                    return md5(this.text);
                case "adler32":
                    return adler32(this.text);
            }
            return "hash algorithm not founded";
        },
        resultText() {
            return (
                this.hash + this.deleteLetters.join('').replaceAll(" ", "")
            );
        },
        diffLetters() {
            return unique(this.text.split("").diff(this.hash.split([""])));
        },
        crossingLettersForward() {
            let letters = [];
            let numberHash = 0;
            let hashLetters = this.hash.split("");
            let textLetters = this.text.split("");
            for (numberText = 0; numberText < textLetters.length; numberText++) {
                if (numberHash > hashLetters.length - 1) numberHash = 0;
                if (textLetters[numberText] == hashLetters[numberHash]) {
                    numberHash++;
                    letters.push(textLetters[numberText]);
                }
            }
            return letters;
        },
        crossingForwardIndexs() {
            let indexs = []
            let numberHash = 0;
            let hashLetters = this.hash.split("");
            let textLetters = this.text.split("");
            for (numberText = 0; numberText < textLetters.length; numberText++) {
                if (numberHash > hashLetters.length - 1) numberHash = 0;
                if (textLetters[numberText] == hashLetters[numberHash]) {
                    numberHash++;
                    indexs.push(numberText)
                }
            }
            return indexs;
        },
        crossingText() {
            let textCrossing = [];
            let numberHash = 0;
            let hashLetters = this.hash.split("");
            let textLetters = this.text.split("");
            for (numberText = 0; numberText < textLetters.length; numberText++) {
                if (numberHash > hashLetters.length - 1) numberHash = 0;
                if (textLetters[numberText] == hashLetters[numberHash]) {
                    numberHash++;
                    textCrossing.push(this.crossingDivider);
                } else {
                    textCrossing.push(textLetters[numberText]);
                }
            }
            return textCrossing.join("");
        },
        deleteLetters() {
            let letters = this.text.split("")

            this.crossingForwardIndexs.forEach(item => letters[item - 1] = " ");
            return letters
        },
        lettersLost() {
            return this.text.split("").filter((letter, index) => this.crossingForwardIndexs.includes(index + 1))
        },
        styledCrossintText() {
            let styledText = this.crossingText.replaceAll(this.crossingDivider,
                "<span class='text-danger'>" + this.crossingDivider + "</span>")
            return styledText
        },
        isFirstLetterLost() {
            return this.crossingForwardIndexs[0] == 0
        },
        isPairLettersLost() {
            for (let index = 1; index < this.crossingForwardIndexs.length; index++) {
                if (this.crossingForwardIndexs[index] == this.crossingForwardIndexs[index - 1] + 1) return true
            }
            return false
        }
    },
    methods: {
        generateText(length) {
            let newText = [];
            for (let i = 0; i < length; i++) {
                newText.push(this.alphabet[random(0, this.alphabet.length - 1)]);
            }
            this.text = newText.join("");
        },
        addRandomLetter() {
            let letter = this.alphabet[random(0, this.alphabet.length - 1)];
            this.text += letter;
        },
        addRandomLetterUnleeCrossing() {
            this.addRandomLetter();
            while (
                this.crossingLettersForward.length < this.lengthCrossingForward
            ) {
                if (this.text.length > 10000000) {
                    console.log("очень больше число");
                    break;
                }
                this.addRandomLetter();
            }
        }
    }
});