// OBJECT VARIABLE HOLDING SKATE RECOMENDATION INFORMATION FOR REFERENCE (Mentor recommendation)
const skateSuggest = [
// NARROW STUNT SKATE OPTIONS
{
  id: "AAA",
  option: {
    name: "Roces M12 UFS Black",
    info: " 'Narrow', 'Stunt' and 'up to £200' we would recommend the Roces M12. It's a classic industry-standard skate that withstands the test of time. The boot is supportive and reliable, built to endure heavy impacts. They hold up against the most demanding street tests performed by some of the most talented skaters worldwide.",
    image: "url('assets/images/rocesm12.webp')"
  }
},
{
  id: "AAB",
  option: {
    name: "USD Sway Sagona Pro",
    info: " 'Narrow', 'Stunt' and '£200-£350' we would recommend the USD Sway. With it's unique injection moulding makes the boot impact ready offering great resilience and shock absorption. The Sway offers generous forward flexion with it's ergonomical shape and tapered back for a balance between soul space and bulk.",
    image: "url('assets/images/usdsway.webp')"
  }
},
{
  id: "AAC",
  option: {
    name: "Razors Shima 3 White",
    info: " 'Narrow', 'Stunt' and '£350+' we would recommend The Razors Shima 3. Providing the ultimate package of performance, power and style. Built with OG Brian Shima's legendary touch, these skates feature a solid boot with a soft top quick lace system for maximum comfort and unparalleled performance.",
    image: "url('assets/images/shima3.webp')"
  }
},

// NARROW URBAN SKATE OPTIONS
{
  id: "ABA",
  option: {
    name: "Powerslide Next 100",
    info: " 'Narrow', 'Urban' and 'up to £200' we would recommend the Powerslide Next. The shell and cuff are composed of glass fibre-reinforced plastic, making the skate lightweight but supportive. The construction also provides adequate shock absorption so that users will suffer less stress on their feet, reducing muscle fatigue.",
    image: "url('assets/images/powerslidenext100.webp')"
  }
},
{
  id: "ABB",
  option: {
    name: "Seba Trix 2",
    info: " 'Narrow, 'Urban', and '£200-£350' we would recommend The Seba Trix 2. The skate is part of the grand tourism series from Seba. Using a plastic injected shell which offers more comfort and shock absorption than its carbon fibre siblings, making this perfect for exploring the city or longer sessions with friends.",
    image: "url('assets/images/sebatrix2.webp')"
  }
},
{
  id: "ABC",
  option: {
    name: "Powerslide HC Evo",
    info: " 'Narrow', 'Urban', and '£350+' we would recommend The Powerslide HC Evo. The shell is made of reinforced carbon fibre and kevlar and is heat moldable to your foot (use caution when doing this yourself!) with a 5mm heel lift for optimum positioning and manoeuvrability. The cuff offers excellent lateral support.",
    image: "url('assets/images/powerslidehcevo.webp')"
  }
},

// NARROW FITNESS SKATE OPTIONS
{
  id: "ACA",
  option: {
    name: "Powerslide Phuzion 90",
    info: " 'Narrow', 'Fitness' and 'up to £200' we would recommend the Powerslide Phuzion 90. The skate is constructed with a glass-fibre reinforced outer shell, much like the Pheme or the Swell skates. This gives your foot balanced support from toe to ankle, including a 'power knit' upper (TPU welded) which provides a snug feel to the fitment.",
    image: "url('assets/images/powerslidephuzion90.webp')"
  }
},
{
  id: "ACB",
  option: {
    name: "Powerslide Swell 110",
    info: " 'Narrow', 'Fitness' and '£200-£350' we would recommend the Powerslide Swell 100. Constructed from Powerslide's power-knit material, the upper includes a 360° lace wrapping that hugs the foot, going a long way to extending the skate's comfort and feeling of support. The recall memory foam makes the skate very comfortable.",
    image: "url('assets/images/powerslideswell110.webp')"
  }
},
{
  id: "ACC",
  option: {
    name: "Powerslide Swell Carbon 125",
    info: " 'Narrow', 'Fitness' and '£350+' we would recommend the Powerslide Swell Carbon 125. The hybrid hand-lasted carbon fibre shell improves the performance of the Swell skates conclusively. You will find the skate's responsiveness precise and accurate. Increased energy transfer will see you gliding down the streets with greater ease and reducing fatigue.",
    image: "url('assets/images/powerslideswellcarbon125.webp')"
  }
},

// REGULAR STUNT SKATE OPTIONS
{
  id: "BAA",
  option: {
    name: "Razors Cult",
    info: " 'Regular', 'Stunt' and 'up to £200' we would recommend the Razors Cult. A tried and true design since the early 2000s featuring a sleek classic boot styling and a super fast soleplate. A premium skate in a great low price range.",
    image: "url('assets/images/razorscultblack.webp')"
  }
},
{
  id: "BAB",
  option: {
    name: "Mesmer Throne",
    info: " 'Regular', 'Stunt' and '£200-£350' we would recommend the Mesmer Throne. The boot mould is taken from the USD Classic Throne. Necessary modernizations allow the Mesmer Throne to flourish, The one-piece sole kit is a brand-new design and fits the bottom of the reshaped boot like a glove.",
    image: "url('assets/images/mesmerthrone.webp')"
  }
},
{
  id: "BAC",
  option: {
    name: "Them Skates 909",
    info: " 'Regular', 'Stunt' and '£350+' we would recommend the Them Skates 909. One of the most highly regarded and loved aggressive skates on the market. The Them Skates 909 is the brainchild of legendary skater Jon Julio. The boot offers a solid and comfortable ride thanks to the use of Intuition liners.",
    image: "url('assets/images/themskates909.webp')"
  }
},

// REGULAR URBAN SKATE OPTIONS
{
  id: "BBA",
  option: {
    name: "Rollerblade Cruiser",
    info: " 'Regular', 'Urban' and 'up to £200' we would recommend the Rollerblade Cruiser. An urban skate featuring 80mm/85a Urban Profile wheels and SG7 bearings for added control, stability and speed. Ultimate lateral support and sliders, a dual-buckle/lace secure closure system with shock-absorbing padding in the heel.",
    image: "url('assets/images/rollerbladecruiser.webp')"
  }
},
{
  id: "BBB",
  option: {
    name: "Gawds Aton Urban 110mm",
    info: " 'Regular', 'Urban' and '£200-£350' we would recommend the Gawds Aton Urban 110mm. With a style that screams GAWDS, the Aton is like nothing else on the market. The shell is made of glass-fibre reinforced plastic and covered with a mixture of polyurethane (PU) nano-leather, and real leather, giving the skate a unique sneaker-inspired look.",
    image: "url('assets/images/gawdsaton110.webp')"
  }
},
{
  id: "BBC",
  option: {
    name: "Adapt Hyperskate GTO",
    info: " 'Regular', 'Urban' and '£350+' we would recommend the Adapt Hyperskate GTO. The GTO model has remained at the core of Adapt's offering since its debut in 2016, and while it has been continuously updated, its essential nature has remained the same; a speedy, reactive, and aesthetically pleasing skate.",
    image: "url('assets/images/adapthyperskategto.webp')"
  }
},

// REGULAR FITNESS SKATE OPTIONS
{
  id: "BCA",
  option: {
    name: "Powerslide Radon 80",
    info: " 'Regular', 'Fitness' and 'up to £200' we would recommend the Powerslide Radon 80. The skate is constructed with a glass-fibre reinforced outer shell, much like the Pheme or the Swell skates. This gives your foot balanced support from toe to ankle, including a 'power knit' upper (TPU welded) which provides a snug feel to the fitment.",
    image: "url('assets/images/powerslideradon80.webp')"
  }
},
{
  id: "BCB",
  option: {
    name: "K2 Uptown",
    info: " 'Regular', 'Fitness' and '£200-£350' we would recommend the K2 Uptown. Having this boot on your foot is akin to putting your foot in a massive bag of rice, which is no surprise considering K2 is the original soft boot brand. The lining is soft whilst holding the structure perfectly. The cuff is from K2's aggressive model and is highly supportive.",
    image: "url('assets/images/k2uptown.webp')"
  }
},
{
  id: "BCC",
  option: {
    name: "Rollerblade Crossfire",
    info: " 'Regular', 'Fitness' and '£350+' we would recommend the Rollerblade Crossfire. The Crossfire is based on a classic slalom-style skate, but can also be used (and will be used most commonly) in any skating style due to its manoeuvrability and performance. These skates provide a comfortable yet rigid structure to meet the demands of any sharp turn.",
    image: "url('assets/images/rollerbladecrossfire.webp')"
  }
},

// WID STUNT SKATE OPTIONS
{
  id: "CAA",
  option: {
    name: "USD Aeon 60 Basic",
    info: " 'Wide', 'Stunt' and 'up to £250' we would recommend the USD Aeon 60 Basic Skate. A staple on the aggressive skate market. Groundbreaking and offering high performance whilst remaining affordable. The Aeon uses a unibody boot and frame giving it a solid feel and lower centre of gravity.",
    image: "url('assets/images/usdaeon60basic.webp')"
  }
},
{
  id: "CAB",
  option: {
    name: "Razors SL",
    info: " 'Wide', 'Stunt' and '£200-£350' we would recommend the Razors SL. With plenty of ankle support, shock absorption and a decent soul plate for grinding. Beginners will get on just as well as more experienced skaters. a category of skate that everyone will be familiar with and be able to pick up with ease.",
    image: "url('assets/images/razorsslgrey.webp')"
  }
},
{
  id: "CAC",
  option: {
    name: "Faction Tactical V1",
    info: " 'Wide', 'Stunt' and '£350+' we would recommend the Faction Tactical V1. A heat moldable carbon fibre boot with a nubuck leather upper. The strength and responsiveness of carbon with the style and comfort of a soft boot. Including a fully removable liner to get the best fit. Available boot only.",
    image: "url('assets/images/factionv1.webp')"
  }
},

// WIDE URBAN SKATE OPTIONS
{
  id: "CBA",
  option: {
    name: "Flying Eagle FBS+",
    info: " 'Wide', 'Urban' and 'up to £200' we would recommend the Flying Eagle FBS+. The boot is supportive accompanied by a comfortable liner, with ventilation holes keeping the foot cool. The construction will benefit users who want great energy transfer with fewer pressure points on the foot.",
    image: "url('assets/images/flyingeaglefbsplus.webp')"
  }
},
{
  id: "CBB",
  option: {
    name: "FR Skates FR1 80",
    info: " 'Wide', 'Urban' and '£200-£350' we would recommend the FR1 80. Having undergone testing from elite athletes to ensure both top performance and shock absorption. Responsive whilst reducing road vibrations for a smoother feel. The wide lace opening allows easy fitment, while the cuff provides great support.",
    image: "url('assets/images/frfr180.webp')"
  }
},
{
  id: "CBC",
  option: {
    name: "FR Skates FR1 80 Intuition",
    info: " 'Wide' 'Urban' and '£350+' we would recommend the FR1 80 Intuition. Having undergone testing from elite athletes to ensure both top performance and shock absorption. Responsive whilst reducing road vibrations for a smoother feel, The inclusion of an industry-leading Intuition liner really sets these apart.",
    image: "url('assets/images/frfr180intuition.webp')"
  }
},

// WIDE FITNESS SKATE OPTIONS
{
  id: "CCA",
  option: {
    name: "Micro MT4",
    info: " 'Wide', 'Fitness' and 'up to £200' we would recommend the Micro MT4. An Urban and/or Recreation inline skate for those looking for style and comfort. It's fully customizable to the individual preferences of each user, with a see-through high-resistant wide-body construction polypropylene shell that offers the perfect fit for most feet.",
    image: "url('assets/images/micromt4.webp')"
  }
},
{
  id: "CCB",
  option: {
    name: "Rollerblade Maxxum XT",
    info: " 'Wide', 'Fitness' and '£200-£350' we would recommend the Rollerblade Maxxum XT. Standing out as an incredibly adaptable skate for leisure and fitness. It expertly blends style, speed, and durability, ensuring unmatched performance and superior lateral support compared to other hard shell boots.",
    image: "url('assets/images/rollerblademaxxumxt.webp')"
  }
},
{
  id: "CCC",
  option: {
    name: "Adapt Hyperskate GTO",
    info: " 'Wide', 'Fitness' and '£350+' we would recommend the Adapt Hyperskate GTO. The GTO model has remained at the core of Adapt's offering since its debut in 2016, and while it has been continuously updated, its essential nature has remained the same; a speedy, reactive, and aesthetically pleasing skate.",
    image: "url('assets/images/adapthyperskategto.webp')"
  }
}
];

// ARRAY OF QUESTIONS WITH ANSWER ID'S TO LOG IN "SELECTED RESULTS ARRAY"
const questions = [
  {
    question: "How would you describe the width of your feet?",
    answers: ["Narrow", "Regular", "Wide"]
  },
  {
    question: "What is your primary focus or preferred style of inline skating?",
    answers: [ "Stunt", "Urban", "Fitness"]
  },
  {
    question: "What price range do you typically find most suitable for your needs?",
    answers: ["Upto £200", "£200-£350", "Over £350"]
  }
];
