const quote = document.getElementById("quote");
const rollButtonQuote = document.getElementById("rollButton");
const quoteList = [
    {
        id: "1",
        text: "Verily, the early bird may catcheth the worm, but the second mouse gets the cheese."
    },
    {
        id: "2",
        text: "Hark! Thou canst not make everyone happy. Thou art not a jar of peanut butter."
    },
    {
        id: "3",
        text: "Methinks life is like a tavern: full of spirits, ales, and occasionally, a good bar brawl."
    },
    {
        id: "4",
        text: "Beware the man who speaketh not a word, for he likely hath too much to say."
    },
    {
        id: "5",
        text: "Tis better to have loved and lost, than to have to fetch the dragon's laundry every fortnight."
    },
    {
        id: "6",
        text: "Doth thou ever wonder if clouds look down upon us and say, 'That one resembles a turnip'?"
    },
    {
        id: "7",
        text: "In the land of the blind, the one-eyed man is likely to be tripped over."
    },
    {
        id: "8",
        text: "To err is human, to arr is pirate."
    },
    {
        id: "9",
        text: "If at first thou dost not succeed, try not to look like thou art enjoying thyself."
    },
    {
        id: "10",
        text: "Age doth not always bringeth wisdom, sometimes it just bringeth dried fruit."
    },
    {
        id: "11",
        text: "A fool and his money art soon partying."
    },
    {
        id: "12",
        text: "Why doth everyone keepeth telling me to followeth my dreams? I cannot even find my keys."
    },
    {
        id: "13",
        text: "Hast thou ever noticed that 'studying' is just 'student' and 'dying' put together?"
    },
    {
        id: "14",
        text: "Thou shalt not steal; the government doth not like competition."
    },
    {
        id: "15",
        text: "Marry a woman with a sense of humor, for thou shalt needeth someone to laugh at thy funeral."
    },
    {
        id: "16",
        text: "Tis wise to remember that every great journey beginneth with a single step, usually onto a LEGO."
    },
    {
        id: "17",
        text: "An apple a day keepeth the doctor away, unless thou throweth it hard enough."
    },
    {
        id: "18",
        text: "Doth thou ever wonder if the alphabet soup maketh sentences as they boil?"
    },
    {
        id: "19",
        text: "Speak softly and carry a big stick, or shout loudly and carry a small stick; either way, thou shalt look ridiculous."
    },
    {
        id: "20",
        text: "A penny saved is a penny earned, but a penny multiplied by a thousand is a good night at the tavern."
    },
    {
        id: "21",
        text: "Better to remain silent and be thought a fool than to speak and remove all doubt, especially when thou art in debt."
    },
    {
        id: "22",
        text: "A watched pot never boil, but a watched wizard is just creepy."
    },
    {
        id: "23",
        text: "Why dost everyone feareth change? I once changed my socks and the world didst not end."
    },
    {
        id: "24",
        text: "When life giveth thee lemons, make lemonade, but addeth a little something extra to make thy enemies regret their life choices."
    },
    {
        id: "25",
        text: "To thine own self be true, unless thou art a mime; then by all means, be someone else."
    },
    {
        id: "26",
        text: "If thou canst not convince them, confuse them. It's much easier."
    },
    {
        id: "27",
        text: "Doth thou ever feel like life is just one big quest for the perfect cup of tea?"
    },
    {
        id: "28",
        text: "He who laugheth last probably didst not get the joke the first time."
    },
    {
        id: "29",
        text: "If at first thou dost not succeed, skydiving is not for thee."
    },
    {
        id: "30",
        text: "Speaketh softly and carry a big stick, or speaketh loudly and carry a small stick, for it shall still maketh thee look ridiculous."
    },
    {
        id: "31",
        text: "Thou canst lead a horse to water, but thou canst not make him appreciate the view."
    },
    {
        id: "32",
        text: "Always remember: you art unique, just like everyone else."
    },
    {
        id: "33",
        text: "Why dost thou needeth a parachute to skydive? Doth thou not also needeth one to skydive again?"
    },
    {
        id: "34",
        text: "The early bird may catcheth the worm, but the second mouse getteth the cheese and avoideth the trap."
    },
    {
        id: "35",
        text: "Art thou lost? Seeketh ye wisdom in the bottom of a tankard."
    },
    {
        id: "36",
        text: "Methinks the world wouldst be a much better place if everyone just chilled out and had a good cup of tea."
    },
    {
        id: "37",
        text: "To thine own self be true, unless thou canst be Batman. Always be Batman."
    },
    {
        id: "38",
        text: "Why doth everyone always seek the meaning of life? Canst we not just enjoy the journey?"
    },
    {
        id: "39",
        text: "The road to success is fraught with peril, obstacles, and a lot of 'Are we there yet?'"
    },
    {
        id: "40",
        text: "If thou canst not be a good example, then thou shalt just have to be a horrible warning."
    },
    {
        id: "41",
        text: "Remember, it's not the size of the wand that mattereth, it's the magic within."
    },
    {
        id: "42",
        text: "Fortune favors the bold, but remember, boldness sometimes leadeth to being chased by an angry mob."
    },
    {
        id: "43",
        text: "Life is like a box of chocolates; it maketh thee fat if thou indulgeth too much."
    },
    {
        id: "44",
        text: "A penny for thy thoughts, a shilling for thy dreams, and a pound if thou canst shut up about them."
    },
    {
        id: "45",
        text: "Hast thou ever noticed that 'studying' is just 'student' and 'dying' rearranged? Coincidence? I thinketh not."
    },
    {
        id: "46",
        text: "Why dost thou worry about what people think? They don't even know what they're thinking half the time."
    },
    {
        id: "47",
        text: "When in doubt, blame the cat. It worketh every time."
    },
    {
        id: "48",
        text: "If life giveth thee melons, thou mayest be dyslexic."
    },
    {
        id: "49",
        text: "And lo, though I walk through the valley of the shadow of death, I shall fear no evil, for I am the evilest son-of-a-witch in the valley."
    }
]

function randomQuote () {
    const quoteChance = Math.floor(Math.random() * quoteList.length);
    quote.innerHTML = `<p id="quoteText">"${quoteList[quoteChance].text}"</p> <p id="wizard"><i>- Miguel the Wizard</i></p>`
}