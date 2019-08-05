var app = new Vue({
  el: "#app",
  data: {
    start: 0,
    end: 99,
    isHex: true,
    signs: 3,
    hashList: [],
    template: "12354x131",
    delimiter: "x",
    search: "0ad801f6",
    searchedList: []
  },
  methods: {
    findHash() {
      this.hashList.push("2");
    },
    findHashUntilNextSign() {
      let start = "0".repeat(this.signs);
      let end = parseInt("f".repeat(this.signs), 16);
      let a = 0x0;
      console.log(end);
      while (a < end) {
        a++;
        let encoded = ("" + a).padStart(this.signs, "0");
        let fullText = this.template.replace(this.delimiter, encoded);
        this.hashList.push({
          number: a,
          encoded: encoded,
          full: fullText,
          hash: adler32(fullText),
          cost: parseInt(fullText.cost(), 16)
        });
      }
    },
    searchHash() {
      let start = "0".repeat(this.signs);
      let end = parseInt("f".repeat(this.signs), 16);
      let a = 0;
      console.log(start + " ->  " + end);
      while (a < end) {
        a++;
        let encoded = ("" + a).padStart(this.signs, "0");
        let fullText = this.template.replace(this.delimiter, encoded);
        let hash = adler32(fullText);
        console.log(hash);
        if (hash.length !== this.search.length) {
          this.searchedList.push("ERROR search hex length not equals");
          return;
        }
        if (hash == this.search) {
          this.searchedList.push({
            number: a,
            encoded: encoded,
            full: fullText,
            hash: hash
          });
        }
      }
    }
  }
});
